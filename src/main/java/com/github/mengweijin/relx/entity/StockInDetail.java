package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.github.mengweijin.quickboot.mybatis.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

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
@TableName("RELX_STOCK_IN_DETAIL")
public class StockInDetail extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 入库明细id
     */
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("STOCK_IN_ID")
    private Long stockInId;

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
    private Long amount;

    /**
     * 采购单价
     */
    @NotNull
    @TableField("PRICE")
    private BigDecimal price;

    /**
     * 采购合计价格
     */
    @TableField("TOTAL_PRICE")
    private BigDecimal totalPrice;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

    @TableField(exist = false)
    private String goodsTypeName;

    @TableField(exist = false)
    private String goodsName;

    @TableField(exist = false)
    private String goodsUnit;
}
