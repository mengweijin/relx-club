package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.relx.entity.StockOutDetail;
import com.github.mengweijin.relx.service.StockOutDetailService;
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

/**
 * <p>
 * 出库记录明细表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/stock-out-detail")
public class StockOutDetailController {

    /**
     * <p>
     * StockOutDetailService
     * </p>
     */
    @Autowired
    private StockOutDetailService stockOutDetailService;

    /**
     * <p>
     * Get StockOutDetail by id
     * </p>
     * @param id id
     * @return StockOutDetail
     */
    @GetMapping("/{id}")
    public StockOutDetail getById(@Valid @PathVariable("id") Long id) {
        return stockOutDetailService.getById(id);
    }

    /**
     * <p>
     * Get StockOutDetail page list by StockOutDetail
     * </p>
     * @param page page
     * @param stockOutDetail stockOutDetail
     * @return IPage<StockOutDetail>
     */
    @GetMapping
    public IPage<StockOutDetail> getPage(IPage<StockOutDetail> page, StockOutDetail stockOutDetail) {
        return stockOutDetailService.page(page, new QueryWrapper<>(stockOutDetail));
    }

    /**
     * <p>
     * Add StockOutDetail
     * </p>
     * @param stockOutDetail stockOutDetail
     */
    @PostMapping
    public void add(@Valid @RequestBody StockOutDetail stockOutDetail) {
        stockOutDetailService.save(stockOutDetail);
    }

    /**
     * <p>
     * Update StockOutDetail
     * </p>
     * @param stockOutDetail stockOutDetail
     */
    @PutMapping
    public void update(@Valid @RequestBody StockOutDetail stockOutDetail) {
        stockOutDetailService.updateById(stockOutDetail);
    }

    /**
     * <p>
     * Delete StockOutDetail by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockOutDetailService.removeById(id);
    }

}
