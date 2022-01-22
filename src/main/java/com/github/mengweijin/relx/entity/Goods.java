package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.github.mengweijin.quickboot.mybatis.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

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
    @NotBlank
    @Length(min = 1, max = 64)
    @TableField("NAME")
    private String name;

    /**
     * 销售单价
     */
    @TableField("PRICE")
    private BigDecimal price;
    /**
     * 商品类型id
     */
    @NotNull
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("GOODS_TYPE_ID")
    private Long goodsTypeId;

    /**
     * 库存数量
     */
    @TableField("AMOUNT")
    private Long amount;

    /**
     * 单位
     */
    @TableField("UNIT")
    private String unit;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

    @TableField(exist = false)
    private String goodsTypeName;
}
