DROP TABLE IF EXISTS relx_goods_type;
CREATE TABLE relx_goods_type (
  id                bigint NOT NULL COMMENT '主键ID',
  name              varchar(64) NOT NULL COMMENT '商品类型名称',
  deleted           int(4) DEFAULT 0 NOT NULL COMMENT '逻辑删除',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='商品类型表';

insert into relx_goods_type values(1, '一代套盒', 0, 'SYSTEM', CURRENT_TIMESTAMP(), 'SYSTEM', CURRENT_TIMESTAMP());
insert into relx_goods_type values(2, '一代烟弹', 0, 'SYSTEM', CURRENT_TIMESTAMP(), 'SYSTEM', CURRENT_TIMESTAMP());

DROP TABLE IF EXISTS relx_goods;
CREATE TABLE relx_goods (
  id                bigint NOT NULL COMMENT '主键ID',
  name              varchar(64) NOT NULL COMMENT '商品名称',
  goods_type_id     bigint DEFAULT 0 NOT NULL COMMENT '商品类型id',
  amount            int(11) DEFAULT 0 NOT NULL COMMENT '库存数量',
  unit              varchar(20) DEFAULT '盒' NOT NULL COMMENT '单位',
  create_by         varchar(64) DEFAULT NULL COMMENT '创建者',
  create_time       datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_by 	    varchar(64) DEFAULT NULL COMMENT '更新者',
  update_time 	    datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment '更新时间',
  PRIMARY KEY (id)
) COMMENT='商品表';

insert into relx_goods values(1, '红色', 1, 10, '盒', 'SYSTEM', CURRENT_TIMESTAMP(), 'SYSTEM', CURRENT_TIMESTAMP());
insert into relx_goods values(2, '紫红渐变', 1, 20, '盒', 'SYSTEM', CURRENT_TIMESTAMP(), 'SYSTEM', CURRENT_TIMESTAMP());