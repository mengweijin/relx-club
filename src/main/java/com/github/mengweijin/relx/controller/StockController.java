package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.mengweijin.relx.entity.Stock;
import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.service.StockService;
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

import java.util.List;

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
@RequestMapping("/stock")
public class StockController {

    /**
     * <p>
     * StockService
     * </p>
     */
    @Autowired
    private StockService stockService;

    /**
     * <p>
     * Get Stock by id
     * </p>
     * @param id id
     * @return Stock
     */
    @GetMapping("/{id}")
    public Stock getById(@Valid @PathVariable("id") Long id) {
        return stockService.getById(id);
    }

    /**
     * <p>
     * Get Stock page list by Stock
     * </p>
     * @param page page
     * @param stock stock
     * @return IPage<Stock>
     */
    @GetMapping
    public IPage<Stock> getPage(IPage<Stock> page, Stock stock) {
        return stockService.page(page, new QueryWrapper<>(stock));
    }

    /**
     * <p>
     * Add Stock
     * </p>
     * @param stock stock
     */
    @PostMapping
    public void add(@Valid @RequestBody Stock stock) {
        stockService.save(stock);
    }

    @PostMapping("/details")
    public void addStockDetails(@Valid @NotNull @RequestBody List<@Valid StockDetail> stockDetailList) {
        stockService.addStockDetails(stockDetailList);
    }

    /**
     * <p>
     * Update Stock
     * </p>
     * @param stock stock
     */
    @PutMapping
    public void update(@Valid @RequestBody Stock stock) {
        stockService.updateById(stock);
    }

    /**
     * <p>
     * Delete Stock by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockService.removeById(id);
    }

}
