package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.github.mengweijin.quickboot.mybatis.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

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
@TableName("RELX_STOCK")
public class Stock extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 入库明细id
     */
    @JsonSerialize(using = ToStringSerializer.class)
    @TableField("STOCK_DETAIL_ID")
    private Long stockDetailId;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

}
