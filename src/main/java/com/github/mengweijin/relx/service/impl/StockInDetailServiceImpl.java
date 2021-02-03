package com.github.mengweijin.relx.service.impl;

import lombok.extern.slf4j.Slf4j;
import com.github.mengweijin.relx.entity.StockInDetail;
import com.github.mengweijin.relx.mapper.StockInDetailMapper;
import com.github.mengweijin.relx.service.StockInDetailService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 * 入库记录明细表 implement
 * </p>
 *
 * @author mengweijin
 * @since 2021-02-01
 */
@Slf4j
@Service
@Transactional(rollbackFor = Exception.class)
public class StockInDetailServiceImpl extends ServiceImpl<StockInDetailMapper, StockInDetail> implements StockInDetailService {

    /**
     * <p>
     * StockDetailMapper
     * </p>
     */
    @Autowired
    private StockInDetailMapper stockInDetailMapper;
}
