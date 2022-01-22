package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.quickboot.mybatis.Pager;
import com.github.mengweijin.relx.entity.StockInDetail;
import com.github.mengweijin.relx.service.StockInDetailService;
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
@RequestMapping("/stock-in-detail")
public class StockInDetailController {

    /**
     * <p>
     * StockDetailService
     * </p>
     */
    @Autowired
    private StockInDetailService stockInDetailService;

    /**
     * <p>
     * Get StockDetail by id
     * </p>
     * @param id id
     * @return StockDetail
     */
    @GetMapping("/{id}")
    public StockInDetail getById(@Valid @PathVariable("id") Long id) {
        return stockInDetailService.getById(id);
    }

    /**
     * <p>
     * Get StockDetail page list by StockDetail
     * </p>
     * @param pager pager
     * @param stockInDetail stockDetail
     * @return IPage<StockDetail>
     */
    @GetMapping
    public Pager<StockInDetail> getPage(Pager<StockInDetail> pager, @Valid StockInDetail stockInDetail) {
        IPage<StockInDetail> page = stockInDetailService.page(pager.toPage(), new QueryWrapper<>(stockInDetail));
        return pager.toPager(page);
    }

    /**
     * <p>
     * Add StockDetail
     * </p>
     * @param stockInDetail stockDetail
     */
    @PostMapping
    public void add(@Valid @RequestBody StockInDetail stockInDetail) {
        stockInDetailService.save(stockInDetail);
    }

    /**
     * <p>
     * Update StockDetail
     * </p>
     * @param stockInDetail stockDetail
     */
    @PutMapping
    public void update(@Valid @RequestBody StockInDetail stockInDetail) {
        stockInDetailService.updateById(stockInDetail);
    }

    /**
     * <p>
     * Delete StockDetail by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        stockInDetailService.removeById(id);
    }

}
