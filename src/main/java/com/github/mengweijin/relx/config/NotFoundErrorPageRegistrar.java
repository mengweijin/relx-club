package com.github.mengweijin.relx.config;

import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.ErrorPageRegistrar;
import org.springframework.boot.web.server.ErrorPageRegistry;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

/**
 * Vue 项目打包部署到 nginx 服务器下，我们一般 router 的 hitory 使用 createWebHistory 来去掉 url 中的 #
 * 但如果要打包并部署到 springboot 下的 static 目录，默认只能用 createWebHashHistory 才不会有问题。
 * 如果使用 createWebHistory，访问页面也没问题，但是刷新一下页面就 404 了。
 *
 * 但我们又想使用 createWebHistory 模式，还不想刷新时出现页面 404 的问题，所有在这里处理一下。
 *
 * @author mengweijin
 * @date 2022/5/2
 */
@Component
public class NotFoundErrorPageRegistrar implements ErrorPageRegistrar {
    @Override
    public void registerErrorPages(ErrorPageRegistry registry) {
        ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/index.html");
        registry.addErrorPages(error404Page);
    }
}
