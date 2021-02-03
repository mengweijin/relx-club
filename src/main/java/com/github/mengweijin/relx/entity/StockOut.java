package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.TableField;
import java.math.BigDecimal;
import java.sql.Clob;
import java.util.List;

import com.github.mengweijin.quickboot.mybatis.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 出库记录表
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_STOCK_OUT")
public class StockOut extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 移动电话
     */
    @TableField("MOBILE_TELEPHONE")
    private String mobileTelephone;

    /**
     * 销售合计价格
     */
    @TableField("TOTAL_PRICE")
    private BigDecimal totalPrice;

    /**
     * 备注
     */
    @TableField("REMARK")
    private String remark;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

    @TableField(exist = false)
    private List<StockOutDetail> stockOutDetailList;
}
