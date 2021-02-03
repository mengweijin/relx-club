package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.mengweijin.relx.entity.StockIn;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 入库记录表 Mapper Interface
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Mapper
public interface StockInMapper extends BaseMapper<StockIn> {

}
