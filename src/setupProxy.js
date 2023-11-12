const { createProxyMiddleware } = require("http-proxy-middleware");
const { API_BASE_ENDPOINT } = require("./utils/common");


module.exports = function (app){
    app.use(
        "/api",
        createProxyMiddleware({
            target: API_BASE_ENDPOINT,
            changeOrigin: true,
        })
    );
};