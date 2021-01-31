FROM nginx:1.19.6
MAINTAINER Meng Wei Jin mengweijin.work@foxmail.com
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
#COPY ./dist /usr/share/nginx/html/

RUN mkdir /app
COPY /dist /app
COPY nginx.conf /etc/nginx/nginx.conf

# 设置镜像时区为东八区时区，上海
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 设置环境变量为中文环境
ENV LC_ALL zh_CN.utf8


# 使用 Dockerfile 来构建镜像
# -t 是给镜像取名。
# 最后有一个点 “.”，表示使用当前路径下的 dockerfile 文件，也可以指定使用其它路径的。
# docker build -t nginx-relx-ui:latest .

# 启动容器
# docker run --name relx-ui -p 80:80 -d registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-ui:latest