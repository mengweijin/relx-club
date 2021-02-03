package com.github.mengweijin.relx.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.entity.StockIn;
import com.github.mengweijin.relx.entity.StockInDetail;
import com.github.mengweijin.relx.mapper.StockInDetailMapper;
import com.github.mengweijin.relx.service.GoodsService;
import com.github.mengweijin.relx.service.StockInDetailService;
import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.mapper.StockInMapper;
import com.github.mengweijin.relx.service.StockInService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 入库记录表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class StockInServiceImpl extends ServiceImpl<StockInMapper, StockIn> implements StockInService {

    /**
     * <p>
     * StockMapper
     * </p>
     */
    @Autowired
    private StockInMapper stockInMapper;

    @Autowired
    private StockInDetailService stockInDetailService;

    @Autowired
    private StockInDetailMapper stockInDetailMapper;

    @Autowired
    private GoodsService goodsService;

    @Override
    public void addStockInDetails(StockIn stockIn) {
        this.save(stockIn);
        List<StockInDetail> stockInDetailList = stockIn.getStockInDetailList();

        BigDecimal stockInTotalPrice = BigDecimal.ZERO;
        Goods goods;
        for (StockInDetail stockInDetail : stockInDetailList) {
            stockInDetail.setStockInId(stockIn.getId());
            stockInDetail.setTotalPrice(stockInDetail.getPrice().multiply(new BigDecimal(stockInDetail.getAmount())));
            // 更新库存
            goods = goodsService.getById(stockInDetail.getGoodsId());
            goods.setAmount(goods.getAmount() + stockInDetail.getAmount());
            goodsService.updateById(goods);

            stockInTotalPrice = stockInTotalPrice.add(stockInDetail.getTotalPrice());
        }

        stockInDetailService.saveBatch(stockInDetailList);
        // 更新 StockIn 总价格
        stockIn.setTotalPrice(stockInTotalPrice);
        this.updateById(stockIn);
    }

    @Override
    public IPage<StockIn> getStockInDetails(IPage<StockIn> page, StockIn stockIn) {
        IPage<StockIn> stockInPage = this.page(page, new QueryWrapper<>(stockIn).orderByDesc("create_time"));
        stockInPage.getRecords().forEach(stockInEntity -> {
            stockInEntity.setStockInDetailList(stockInDetailMapper.selectStockInDetailByStockInId(stockInEntity.getId()));
        });
        return stockInPage;
    }
}
