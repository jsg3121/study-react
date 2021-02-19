const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/greeting", {
      target: "https://mighty-brook-06284.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
