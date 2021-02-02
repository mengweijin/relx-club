package com.github.mengweijin.relx.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.mengweijin.relx.entity.Stock;
import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.vo.StockVO;

import java.util.List;

/**
 * <p>
 * 入库记录表 Service
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
public interface StockService extends IService<Stock> {

    void addStockDetails(List<StockDetail> stockDetailList);

    List<StockVO> getStockDetails(IPage<Stock> page, Stock stock);
}
