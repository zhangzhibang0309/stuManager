const Router = require("koa-router");

const { create } = require("../controller/user.controller");
const { verifyUser,handlePassword } = require("../middleware/user.middleware");

// user接口
const userRouter = new Router({ prefix: "/users" });

// 创建用户中间件 错误拦截
userRouter.post("/", verifyUser, handlePassword, create);

module.exports = userRouter;
