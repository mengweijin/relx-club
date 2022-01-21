# relx-club

#### 介绍
悦刻 RELX Club

#### 软件技术
* 前端：Vue3, Element-Plus
* 后端：SpringBoot, MyBatis-Plus
* 容器部署：Docker, Nginx, Tomcat

#### 安装教程
1. 安装 docker
    * linux/windows专业版 系统参考 https://docs.docker.com docker 各自安装部分。
    * windows家庭版系统参考：https://docs.docker.com/docker-for-windows/install-windows-home/
    
注意：记得配置国内docker源，否则下载镜像的速度非常慢。

2.  安装
````
$ docker run --name relx-club --restart=always -p 9003:8081 -d registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club:latest
````

4. 访问页面 http://{ip地址}:9003

#### 页面展示
![image](docs/image/goods_list.png)
![image](docs/image/goods_edit.png)
![image](docs/image/stock_in_list.png)
![image](docs/image/stock_in_add.png)
![image](docs/image/stock_out_list.png)
![image](docs/image/stock_out_add.png)

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

