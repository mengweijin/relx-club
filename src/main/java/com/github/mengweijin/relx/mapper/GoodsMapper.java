package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.mengweijin.relx.entity.Goods;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 商品表 Mapper Interface
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Mapper
public interface GoodsMapper extends BaseMapper<Goods> {

}
