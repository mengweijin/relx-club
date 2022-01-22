package com.github.mengweijin.relx.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.github.mengweijin.quickboot.mybatis.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/**
 * <p>
 * 商品类型表
 * </p>
 *
 * @author mengweijin
 * @since 2021-01-05
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
@TableName("RELX_GOODS_TYPE")
public class GoodsType extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 商品类型名称
     */
    @NotBlank
    @Length(min = 1, max = 64)
    @TableField("NAME")
    private String name;

    /**
     * 逻辑删除
     */
    @TableField("DELETED")
    private Integer deleted;

}
