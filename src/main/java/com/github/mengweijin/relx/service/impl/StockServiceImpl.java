package com.github.mengweijin.relx.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.mapper.StockDetailMapper;
import com.github.mengweijin.relx.service.GoodsService;
import com.github.mengweijin.relx.service.StockDetailService;
import com.github.mengweijin.relx.vo.StockVO;
import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.entity.Stock;
import com.github.mengweijin.relx.mapper.StockMapper;
import com.github.mengweijin.relx.service.StockService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
public class StockServiceImpl extends ServiceImpl<StockMapper, Stock> implements StockService {

    /**
     * <p>
     * StockMapper
     * </p>
     */
    @Autowired
    private StockMapper stockMapper;

    @Autowired
    private StockDetailService stockDetailService;

    @Autowired
    private StockDetailMapper stockDetailMapper;

    @Autowired
    private GoodsService goodsService;

    @Override
    public void addStockDetails(List<StockDetail> stockDetailList) {
        Stock stock = new Stock();
        this.save(stock);
        stockDetailList.forEach(stockDetail -> {
            stockDetail.setStockId(stock.getId());

            Goods goods = goodsService.getById(stockDetail.getGoodsId());
            goods.setAmount(goods.getAmount() + stockDetail.getAmount());
            goodsService.updateById(goods);
        });
        stockDetailService.saveBatch(stockDetailList);
    }

    @Override
    public List<StockVO> getStockDetails(IPage<Stock> page, Stock stock) {
        IPage<Stock> stockPage = this.page(page, new QueryWrapper<>(stock));
        List<StockVO> stockVOList = new ArrayList<>();
        stockPage.getRecords().forEach(stockEntity -> {
            StockVO stockVO = new StockVO();
            BeanUtils.copyProperties(stockEntity, stockVO);
            stockVO.setStockDetailList(stockDetailMapper.selectStockDetailVOByStockId(stockEntity.getId()));
            stockVOList.add(stockVO);
        });
        return stockVOList;
    }
}
