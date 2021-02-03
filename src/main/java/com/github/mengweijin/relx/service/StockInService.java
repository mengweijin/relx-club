package com.github.mengweijin.relx.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.mengweijin.relx.entity.StockIn;

/**
 * <p>
 * 入库记录表 Service
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
public interface StockInService extends IService<StockIn> {

    void addStockDetails(StockIn stockIn);

    IPage<StockIn> getStockDetails(IPage<StockIn> page, StockIn stockIn);
}
