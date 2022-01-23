FROM java:8
MAINTAINER Meng Wei Jin mengweijin.work@foxmail.com

ARG JAR_ARTIFACT_ID='relx-club'
ARG JAR_VERSION='0.0.1-SNAPSHOT'
ARG JAR_NAME=${JAR_ARTIFACT_ID}-${JAR_VERSION}.jar

# 设置镜像时区为东八区时区，上海
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    RUN mkdir /app
COPY target/${JAR_NAME} /app/application.jar

# RUN bash -c 'touch /app/application.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/application.jar"]
EXPOSE 8080

# docker build -t registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club:latest .

# docker login --username=***@**.com registry.cn-hangzhou.aliyuncs.com
# docker push registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club:latest

# docker run --name relx-club -d -p 9003:8080 registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club:latest

