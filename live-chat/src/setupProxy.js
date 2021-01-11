const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "https://livechat-0107.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
