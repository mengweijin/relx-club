FROM java:8
MAINTAINER Meng Wei Jin mengweijin.work@foxmail.com

ARG JAR_ARTIFACT_ID='relx-club-invoicing-management-system'
ARG JAR_VERSION='0.0.1-SNAPSHOT'
ARG JAR_NAME=${JAR_ARTIFACT_ID}-${JAR_VERSION}.jar

RUN mkdir /app
COPY target/${JAR_NAME} /app/application.jar

RUN bash -c 'touch /app/application.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/application.jar"]
EXPOSE 8081

# docker build -t relx-club-invoicing-management-system:latest .

# docker login --username=mengweijin@aliyun.com registry.cn-hangzhou.aliyuncs.com
# docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club-invoicing-management-system:[镜像版本号]
# docker push registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club-invoicing-management-system:[镜像版本号]

# docker run --name relx-club-invoicing-management-system -d -p 8081:8081 registry.cn-hangzhou.aliyuncs.com/mengweijin/relx-club-invoicing-management-system:latest
# docker run --name relx-club-invoicing-management-system -d -p 8081:8081 relx-club-invoicing-management-system:latest
