package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.github.mengweijin.quickboot.mybatis.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.List;

/**
 * <p>
 * 入库记录表
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_STOCK_IN")
public class StockIn extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 采购合计价格
     */
    @TableField("TOTAL_PRICE")
    private BigDecimal totalPrice;

    /**
     * 备注
     */
    @Length(max = 65535)
    @TableField("REMARK")
    private String remark;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

    @TableField(exist = false)
    private List<StockInDetail> stockInDetailList;
}
