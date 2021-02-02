package com.github.mengweijin.relx.service.impl;

import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.mapper.StockDetailMapper;
import com.github.mengweijin.relx.service.StockDetailService;
import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.entity.Stock;
import com.github.mengweijin.relx.mapper.StockMapper;
import com.github.mengweijin.relx.service.StockService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    public void addStockDetails(List<StockDetail> stockDetailList) {
        Stock stock = new Stock();
        stockMapper.insert(stock);
        stockDetailList.stream().map(stockDetail -> stockDetail.setStockId(stock.getId()));
        stockDetailService.saveBatch(stockDetailList);
    }
}
