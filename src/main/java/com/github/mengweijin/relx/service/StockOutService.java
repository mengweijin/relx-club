package com.github.mengweijin.relx.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.github.mengweijin.relx.entity.StockOut;

/**
 * <p>
 * 出库记录表 Service
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
public interface StockOutService extends IService<StockOut> {

    IPage<StockOut> getStockDetails(IPage<StockOut> page, StockOut stockOut);

    void addStockOutDetails(StockOut stockOut);
}
