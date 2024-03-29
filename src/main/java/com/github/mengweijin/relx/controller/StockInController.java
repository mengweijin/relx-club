package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.quickboot.mybatis.Pager;
import com.github.mengweijin.relx.entity.StockIn;
import com.github.mengweijin.relx.service.StockInService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

/**
 * <p>
 * 入库记录表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/stock-in")
public class StockInController {

    /**
     * <p>
     * StockService
     * </p>
     */
    @Autowired
    private StockInService stockInService;

    /**
     * <p>
     * Get Stock by id
     * </p>
     * @param id id
     * @return Stock
     */
    @GetMapping("/{id}")
    public StockIn getById(@Valid @PathVariable("id") Long id) {
        return stockInService.getById(id);
    }

    /**
     * <p>
     * Get Stock page list by Stock
     * </p>
     * @param pager pager
     * @param stockIn stock
     * @return IPage<Stock>
     */
    @GetMapping
    public Pager<StockIn> getPage(Pager<StockIn> pager, StockIn stockIn) {
        final IPage<StockIn> page = stockInService.page(pager.toPage(), new QueryWrapper<>(stockIn));
        return pager.toPager(page);
    }

    @GetMapping("/details")
    public Pager<StockIn> getStockInDetails(Pager<StockIn> pager, StockIn stockIn) {
        IPage<StockIn> page = stockInService.getStockInDetails(pager.toPage(), stockIn);
        return pager.toPager(page);
    }
    /**
     * <p>
     * Add Stock
     * </p>
     * @param stockIn stock
     */
    @PostMapping
    public void add(@Valid @RequestBody StockIn stockIn) {
        stockInService.save(stockIn);
    }

    @PostMapping("/details")
    public void addStockInDetails(@Valid @NotNull @RequestBody StockIn stockIn) {
        stockInService.addStockInDetails(stockIn);
    }

    /**
     * <p>
     * Update Stock
     * </p>
     * @param stockIn stock
     */
    @PutMapping
    public void update(@Valid @RequestBody StockIn stockIn) {
        stockInService.updateById(stockIn);
    }

    /**
     * <p>
     * Delete Stock by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockInService.removeById(id);
    }

}
