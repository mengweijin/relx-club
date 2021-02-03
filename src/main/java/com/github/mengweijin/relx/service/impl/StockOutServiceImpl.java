package com.github.mengweijin.relx.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.quickboot.framework.exception.ClientException;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.entity.GoodsType;
import com.github.mengweijin.relx.entity.StockIn;
import com.github.mengweijin.relx.entity.StockInDetail;
import com.github.mengweijin.relx.entity.StockOutDetail;
import com.github.mengweijin.relx.mapper.StockOutDetailMapper;
import com.github.mengweijin.relx.service.GoodsService;
import com.github.mengweijin.relx.service.GoodsTypeService;
import com.github.mengweijin.relx.service.StockOutDetailService;
import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.entity.StockOut;
import com.github.mengweijin.relx.mapper.StockOutMapper;
import com.github.mengweijin.relx.service.StockOutService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 出库记录表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class StockOutServiceImpl extends ServiceImpl<StockOutMapper, StockOut> implements StockOutService {

    /**
     * <p>
     * StockOutMapper
     * </p>
     */
    @Autowired
    private StockOutMapper stockOutMapper;

    @Autowired
    private StockOutDetailMapper stockOutDetailMapper;

    @Autowired
    private StockOutDetailService stockOutDetailService;

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private GoodsTypeService goodsTypeService;

    @Override
    public IPage<StockOut> getStockDetails(IPage<StockOut> page, StockOut stockOut) {
        IPage<StockOut> stockOutIPage = this.page(page, new QueryWrapper<>(stockOut).orderByDesc("create_time"));
        stockOutIPage.getRecords().forEach(stockOutEntity -> {
            stockOutEntity.setStockOutDetailList(stockOutDetailMapper.selectStockOutDetailByStockOutId(stockOutEntity.getId()));
        });
        return stockOutIPage;
    }

    @Override
    public void addStockOutDetails(StockOut stockOut) {
        this.save(stockOut);
        List<StockOutDetail> stockOutDetailList = stockOut.getStockOutDetailList();

        BigDecimal stockInTotalPrice = BigDecimal.ZERO;
        Goods goods;
        GoodsType goodsType;
        for (StockOutDetail stockOutDetail : stockOutDetailList) {
            stockOutDetail.setStockOutId(stockOut.getId());
            stockOutDetail.setTotalPrice(stockOutDetail.getPrice().multiply(new BigDecimal(stockOutDetail.getAmount())));
            // 更新库存
            goods = goodsService.getById(stockOutDetail.getGoodsId());
            if(goods.getAmount() < stockOutDetail.getAmount()) {
                goodsType = goodsTypeService.getById(goods.getGoodsTypeId());
                String message = "商品库存不足！商品类型：" + goodsType.getName() + "; 商品名称：" + goods.getName() +
                        "; 剩余库存：" + goods.getAmount();
                throw new ClientException(message);
            }
            goods.setAmount(goods.getAmount() - stockOutDetail.getAmount());
            goodsService.updateById(goods);

            stockInTotalPrice = stockInTotalPrice.add(stockOutDetail.getTotalPrice());
        }

        stockOutDetailService.saveBatch(stockOutDetailList);
        // 更新 StockOut 总价格
        stockOut.setTotalPrice(stockInTotalPrice);
        this.updateById(stockOut);
    }
}
