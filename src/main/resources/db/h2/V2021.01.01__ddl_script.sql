DROP TABLE IF EXISTS relx_goods_type;
CREATE TABLE relx_goods_type (
  id                bigint NOT NULL COMMENT '主键ID',
  name              varchar(64) NOT NULL UNIQUE COMMENT '商品类型名称',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='商品类型表';


DROP TABLE IF EXISTS relx_goods;
CREATE TABLE relx_goods (
  id                bigint NOT NULL COMMENT '主键ID',
  name              varchar(64) NOT NULL  COMMENT '商品名称',
  price             decimal(10, 2) DEFAULT 0 NOT NULL COMMENT '价格',
  goods_type_id     bigint NOT NULL COMMENT '商品类型id',
  amount            bigint DEFAULT 0 NOT NULL COMMENT '库存数量',
  unit              varchar(20) NOT NULL COMMENT '单位',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='商品表';
ALTER TABLE relx_goods ADD UNIQUE INDEX relx_goods_goods_type_id_name (goods_type_id, name);


DROP TABLE IF EXISTS relx_stock_in;
CREATE TABLE relx_stock_in (
  id                bigint NOT NULL COMMENT '主键ID',
  total_price       decimal(38, 2) DEFAULT 0 NOT NULL COMMENT '采购合计价格',
  remark            text  COMMENT '备注',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='入库记录表';


DROP TABLE IF EXISTS relx_stock_in_detail;
CREATE TABLE relx_stock_in_detail (
  id                bigint NOT NULL COMMENT '主键ID',
  stock_in_id       bigint NOT NULL COMMENT '入库明细id',
  goods_type_id     bigint NOT NULL COMMENT '商品类型id',
  goods_id          bigint NOT NULL COMMENT '商品id',
  amount            bigint DEFAULT 0 NOT NULL COMMENT '入库数量',
  price             decimal(10, 2) DEFAULT 0 NOT NULL COMMENT '采购单价',
  total_price       decimal(38, 2) DEFAULT 0 NOT NULL COMMENT '采购合计价格',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='入库记录明细表';


DROP TABLE IF EXISTS relx_stock_out;
CREATE TABLE relx_stock_out (
  id                bigint NOT NULL COMMENT '主键ID',
  mobile_telephone  varchar(16) DEFAULT NULL COMMENT '移动电话',
  total_price       decimal(38, 2) DEFAULT 0 NOT NULL COMMENT '销售合计价格',
  remark            text  COMMENT '备注',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='出库记录表';


DROP TABLE IF EXISTS relx_stock_out_detail;
CREATE TABLE relx_stock_out_detail (
  id                bigint NOT NULL COMMENT '主键ID',
  stock_out_id      bigint NOT NULL COMMENT '出库明细id',
  goods_type_id     bigint NOT NULL COMMENT '商品类型id',
  goods_id          bigint NOT NULL COMMENT '商品id',
  amount            bigint DEFAULT 0 NOT NULL COMMENT '出库销售数量',
  price             decimal(10, 2) DEFAULT 0 NOT NULL COMMENT '销售单价',
  total_price       decimal(38, 2) DEFAULT 0 NOT NULL COMMENT '销售合计价格',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='出库记录明细表';
