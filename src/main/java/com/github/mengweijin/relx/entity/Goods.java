package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import com.github.mengweijin.quickboot.mybatis.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 商品表
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_GOODS")
public class Goods extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 商品名称
     */
    @TableField("NAME")
    private String name;

    /**
     * 商品类型id
     */
    @TableField("GOODS_TYPE_ID")
    private Long goodsTypeId;

    /**
     * 库存数量
     */
    @TableField("AMOUNT")
    private Double amount;

    /**
     * 单位
     */
    @TableField("UNIT")
    private String unit;
}
