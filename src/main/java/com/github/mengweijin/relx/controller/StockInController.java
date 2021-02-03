package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.mengweijin.relx.entity.StockIn;
import com.github.mengweijin.relx.service.StockInService;
import lombok.extern.slf4j.Slf4j;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.core.metadata.IPage;

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
     * @param page page
     * @param stockIn stock
     * @return IPage<Stock>
     */
    @GetMapping
    public IPage<StockIn> getPage(IPage<StockIn> page, StockIn stockIn) {
        return stockInService.page(page, new QueryWrapper<>(stockIn));
    }

    @GetMapping("/details")
    public IPage<StockIn> getStockDetails(IPage<StockIn> page, StockIn stockIn) {
        return stockInService.getStockDetails(page, stockIn);
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
    public void addStockDetails(@Valid @NotNull @RequestBody StockIn stockIn) {
        stockInService.addStockDetails(stockIn);
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
