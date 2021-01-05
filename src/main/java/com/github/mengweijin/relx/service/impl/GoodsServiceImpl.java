package com.github.mengweijin.relx.service.impl;

import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.mapper.GoodsMapper;
import com.github.mengweijin.relx.service.GoodsService;
import lombok.extern.slf4j.Slf4j;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 * 商品表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class GoodsServiceImpl extends ServiceImpl<GoodsMapper, Goods> implements GoodsService {

    /**
     * <p>
     * GoodsMapper
     * </p>
     */
    @Autowired
    private GoodsMapper goodsMapper;
}
