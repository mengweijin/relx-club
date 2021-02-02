package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.entity.StockDetail;
import com.github.mengweijin.relx.vo.GoodsVO;
import com.github.mengweijin.relx.vo.StockDetailVO;
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
public interface StockDetailMapper extends BaseMapper<StockDetail> {

    List<StockDetailVO> selectStockDetailVOByStockId(@Param("stockId") Long stockId);
}
