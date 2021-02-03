package com.github.mengweijin.relx.service.impl;

import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.entity.StockOutDetail;
import com.github.mengweijin.relx.mapper.StockOutDetailMapper;
import com.github.mengweijin.relx.service.StockOutDetailService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 * 出库记录明细表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-03
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class StockOutDetailServiceImpl extends ServiceImpl<StockOutDetailMapper, StockOutDetail> implements StockOutDetailService {

    /**
     * <p>
     * StockOutDetailMapper
     * </p>
     */
    @Autowired
    private StockOutDetailMapper stockOutDetailMapper;
}
