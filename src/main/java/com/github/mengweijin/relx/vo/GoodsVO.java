package com.github.mengweijin.relx.vo;

import com.github.mengweijin.relx.entity.Goods;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author mengweijin
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class GoodsVO extends Goods {

    private String goodsTypeName;
}
