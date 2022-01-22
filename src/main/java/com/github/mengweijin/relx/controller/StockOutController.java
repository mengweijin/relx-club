package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.quickboot.mybatis.Pager;
import com.github.mengweijin.relx.entity.StockOut;
import com.github.mengweijin.relx.service.StockOutService;
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
 * 出库记录表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/stock-out")
public class StockOutController {

    /**
     * <p>
     * StockOutService
     * </p>
     */
    @Autowired
    private StockOutService stockOutService;

    /**
     * <p>
     * Get StockOut by id
     * </p>
     * @param id id
     * @return StockOut
     */
    @GetMapping("/{id}")
    public StockOut getById(@Valid @PathVariable("id") Long id) {
        return stockOutService.getById(id);
    }

    /**
     * <p>
     * Get StockOut page list by StockOut
     * </p>
     * @param pager pager
     * @param stockOut stockOut
     * @return IPage<StockOut>
     */
    @GetMapping
    public Pager<StockOut> getPage(Pager<StockOut> pager, StockOut stockOut) {
        IPage<StockOut> page = stockOutService.page(pager.toPage(), new QueryWrapper<>(stockOut));
        return pager.toPager(page);
    }

    @GetMapping("/details")
    public Pager<StockOut> getStockDetails(Pager<StockOut> pager, StockOut stockOut) {
        IPage<StockOut> page = stockOutService.getStockDetails(pager.toPage(), stockOut);
        return pager.toPager(page);
    }

    /**
     * <p>
     * Add StockOut
     * </p>
     * @param stockOut stockOut
     */
    @PostMapping
    public void add(@Valid @RequestBody StockOut stockOut) {
        stockOutService.save(stockOut);
    }

    @PostMapping("/details")
    public void addStockDetails(@Valid @NotNull @RequestBody StockOut stockOut) {
        stockOutService.addStockOutDetails(stockOut);
    }

    /**
     * <p>
     * Update StockOut
     * </p>
     * @param stockOut stockOut
     */
    @PutMapping
    public void update(@Valid @RequestBody StockOut stockOut) {
        stockOutService.updateById(stockOut);
    }

    /**
     * <p>
     * Delete StockOut by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockOutService.removeById(id);
    }

}
