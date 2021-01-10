package com.github.mengweijin.relx.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.github.mengweijin.relx.entity.GoodsType;
import com.github.mengweijin.relx.service.GoodsTypeService;
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

import java.util.List;

/**
 * <p>
 * 商品类型表 Controller
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Slf4j
@Validated
@RestController
@RequestMapping("/goods-type")
public class GoodsTypeController {

    /**
     * <p>
     * GoodsTypeService
     * </p>
     */
    @Autowired
    private GoodsTypeService goodsTypeService;

    /**
     * <p>
     * Get GoodsType by id
     * </p>
     * @param id id
     * @return GoodsType
     */
    @GetMapping("/{id}")
    public GoodsType getById(@Valid @PathVariable("id") Long id) {
        return goodsTypeService.getById(id);
    }

    /**
     * <p>
     * Get GoodsType page list by GoodsType
     * </p>
     * @param page page
     * @param goodsType goodsType
     * @return IPage<GoodsType>
     */
    @GetMapping
    public IPage<GoodsType> getPage(IPage<GoodsType> page, @Valid GoodsType goodsType) {
        return goodsTypeService.page(page, new QueryWrapper<>(goodsType));
    }

    @GetMapping("/all")
    public List<GoodsType> getAll() {
        return goodsTypeService.list();
    }

    /**
     * <p>
     * Add GoodsType
     * </p>
     * @param goodsType goodsType
     */
    @PostMapping
    public void add(@Valid @RequestBody GoodsType goodsType) {
        goodsTypeService.save(goodsType);
    }

    /**
     * <p>
     * Update GoodsType
     * </p>
     * @param goodsType goodsType
     */
    @PutMapping
    public void update(@Valid @RequestBody GoodsType goodsType) {
        goodsTypeService.updateById(goodsType);
    }

    /**
     * <p>
     * Delete GoodsType by id
     * </p>
     * @param id id
     */
    @DeleteMapping("/{id}")
    public void delete(@Valid @PathVariable("id") Long id) {
        goodsTypeService.removeById(id);
    }

}
