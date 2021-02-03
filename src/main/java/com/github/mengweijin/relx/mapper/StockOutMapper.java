package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.mengweijin.relx.entity.StockOut;
import com.github.mengweijin.relx.entity.StockOutDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 出库记录表 Mapper Interface
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Mapper
public interface StockOutMapper extends BaseMapper<StockOut> {

 }
