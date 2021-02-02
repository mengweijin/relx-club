package com.github.mengweijin.relx.vo;

import com.github.mengweijin.relx.entity.Stock;
import com.github.mengweijin.relx.entity.StockDetail;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

/**
 * @author mengweijin
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class StockDetailVO extends StockDetail {

    private String goodsTypeName;

    private String goodsName;

    private String goodsUnit;
}
