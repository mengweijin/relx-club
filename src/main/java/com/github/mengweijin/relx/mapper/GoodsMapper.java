package com.github.mengweijin.relx.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.github.mengweijin.relx.entity.Goods;
import com.github.mengweijin.relx.vo.GoodsVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

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
    /**
     * 自定义分页查询
     * @param page
     * @param goods
     * @return
     */
    IPage<GoodsVO> selectPageVO(IPage<GoodsVO> page, @Param("p") Goods goods);
}
