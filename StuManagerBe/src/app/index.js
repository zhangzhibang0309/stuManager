const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");


const errorHandler = require("./error-handle");
const useRoutes = require("../router");

const app = new Koa();


// 跨域
app.use(
    cors({
      origin: "*", // 允许跨域的地址，我的理解类似白名单，*代表全部允许
      exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], // 暴露header列表
      maxAge: 5, // 每隔5秒发送预检请求，也就是发送两次请求
      credentials: true, // 允许请求携带cookie
      allowMethods: ["OPTIONS", "GET", "PUT", "POST", "DELETE"], // 请求方式
      allowHeaders: ["Accept", "Origin", "Content-type", "Authorization"],
    })
  );
  
// 解析body
app.use(bodyParser());


useRoutes(app);

// 监听错误
app.on("error", errorHandler);

module.exports = app;
