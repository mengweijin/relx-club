package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.mengweijin.relx.entity.Stock;
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
public interface StockMapper extends BaseMapper<Stock> {

}
