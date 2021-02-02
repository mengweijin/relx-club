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


DROP TABLE IF EXISTS relx_stock;
CREATE TABLE relx_stock (
  id                bigint NOT NULL COMMENT '主键ID',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='入库记录表';


DROP TABLE IF EXISTS relx_stock_detail;
CREATE TABLE relx_stock_detail (
  id                bigint NOT NULL COMMENT '主键ID',
  stock_id          bigint NOT NULL COMMENT '入库明细id',
  goods_type_id     bigint NOT NULL COMMENT '商品类型id',
  goods_id          bigint NOT NULL COMMENT '商品id',
  amount            bigint DEFAULT 0 NOT NULL COMMENT '入库数量',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='入库记录明细表';
