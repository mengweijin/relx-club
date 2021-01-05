package com.github.mengweijin.relx.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.github.mengweijin.relx.entity.GoodsType;
import com.github.mengweijin.relx.mapper.GoodsTypeMapper;
import com.github.mengweijin.relx.service.GoodsTypeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 * 商品类型表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class GoodsTypeServiceImpl extends ServiceImpl<GoodsTypeMapper, GoodsType> implements GoodsTypeService {

    /**
     * <p>
     * GoodsTypeMapper
     * </p>
     */
    @Autowired
    private GoodsTypeMapper goodsTypeMapper;
}
