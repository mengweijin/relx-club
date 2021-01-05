package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.service.GoodsService;
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
 * 商品表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/goods")
public class GoodsController {

    /**
     * <p>
     * GoodsService
     * </p>
     */
    @Autowired
    private GoodsService goodsService;

    /**
     * <p>
     * Get Goods by id
     * </p>
     * @param id id
     * @return Goods
     */
    @GetMapping("/{id}")
    public Goods getById(@Valid @PathVariable("id") Long id) {
        return goodsService.getById(id);
    }

    /**
     * <p>
     * Get Goods page list by Goods
     * </p>
     * @param page page
     * @param goods goods
     * @return IPage<Goods>
     */
    @GetMapping
    public IPage<Goods> getPage(IPage<Goods> page, @Valid Goods goods) {
        return goodsService.page(page, new QueryWrapper<>(goods));
    }

    /**
     * <p>
     * Add Goods
     * </p>
     * @param goods goods
     */
    @PostMapping
    public void add(@Valid @RequestBody Goods goods) {
        goodsService.save(goods);
    }

    /**
     * <p>
     * Update Goods
     * </p>
     * @param goods goods
     */
    @PutMapping
    public void update(@Valid @RequestBody Goods goods) {
        goodsService.updateById(goods);
    }

    /**
     * <p>
     * Delete Goods by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        goodsService.removeById(id);
    }

}
