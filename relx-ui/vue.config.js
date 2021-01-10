module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true, //配置自动启动浏览器
        proxy: {
            "/api": {
                target: 'http://localhost:8081', //后端ip地址及端口
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
}