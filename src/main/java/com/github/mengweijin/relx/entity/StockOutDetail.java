package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.github.mengweijin.quickboot.mybatis.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.math.BigDecimal;

/**
 * <p>
 * 出库记录明细表
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_STOCK_OUT_DETAIL")
public class StockOutDetail extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 出库明细id
     */
    @TableField("STOCK_OUT_ID")
    private Long stockOutId;

    /**
     * 商品类型id
     */
    @TableField("GOODS_TYPE_ID")
    private Long goodsTypeId;

    /**
     * 商品id
     */
    @TableField("GOODS_ID")
    private Long goodsId;

    /**
     * 出库销售数量
     */
    @TableField("AMOUNT")
    private Long amount;

    /**
     * 销售单价
     */
    @TableField("PRICE")
    private BigDecimal price;

    /**
     * 销售合计价格
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
