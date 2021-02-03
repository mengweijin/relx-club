package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.mengweijin.relx.entity.StockInDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 入库记录明细表 Mapper Interface
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Mapper
public interface StockInDetailMapper extends BaseMapper<StockInDetail> {

    List<StockInDetail> selectStockInDetailByStockInId(@Param("stockInId") Long stockInId);
}
