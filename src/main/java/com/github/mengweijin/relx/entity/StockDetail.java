package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.math.BigDecimal;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.github.mengweijin.quickboot.mybatis.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;

/**
 * <p>
 * 入库记录明细表
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_STOCK_DETAIL")
public class StockDetail extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 入库明细id
     */
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("STOCK_ID")
    private Long stockId;

    /**
     * 商品类型id
     */
    @NotNull
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("GOODS_TYPE_ID")
    private Long goodsTypeId;

    /**
     * 商品id
     */
    @NotNull
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("GOODS_ID")
    private Long goodsId;

    /**
     * 入库数量
     */
    @TableField("AMOUNT")
    private BigDecimal amount;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

}
