package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.service.StockDetailService;
import lombok.extern.slf4j.Slf4j;
import javax.validation.Valid;
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
 * 入库记录明细表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/stock-detail")
public class StockDetailController {

    /**
     * <p>
     * StockDetailService
     * </p>
     */
    @Autowired
    private StockDetailService stockDetailService;

    /**
     * <p>
     * Get StockDetail by id
     * </p>
     * @param id id
     * @return StockDetail
     */
    @GetMapping("/{id}")
    public StockDetail getById(@Valid @PathVariable("id") Long id) {
        return stockDetailService.getById(id);
    }

    /**
     * <p>
     * Get StockDetail page list by StockDetail
     * </p>
     * @param page page
     * @param stockDetail stockDetail
     * @return IPage<StockDetail>
     */
    @GetMapping
    public IPage<StockDetail> getPage(IPage<StockDetail> page, @Valid StockDetail stockDetail) {
        return stockDetailService.page(page, new QueryWrapper<>(stockDetail));
    }

    /**
     * <p>
     * Add StockDetail
     * </p>
     * @param stockDetail stockDetail
     */
    @PostMapping
    public void add(@Valid @RequestBody StockDetail stockDetail) {
        stockDetailService.save(stockDetail);
    }

    /**
     * <p>
     * Update StockDetail
     * </p>
     * @param stockDetail stockDetail
     */
    @PutMapping
    public void update(@Valid @RequestBody StockDetail stockDetail) {
        stockDetailService.updateById(stockDetail);
    }

    /**
     * <p>
     * Delete StockDetail by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockDetailService.removeById(id);
    }

}
