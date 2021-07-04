const Router = require("koa-router");

const {
  selectStu,
  updateStu,
  deleteStu,
  addStu,
  queryStuDetail,
} = require("../controller/stu.controller");

// stu接口
const stuRouter = new Router({ prefix: "/stu" });

// 创建用户中间件 错误拦截
stuRouter.get("/list", selectStu);

// 修改学生信息
stuRouter.post("/update", updateStu);

// 删除
stuRouter.post("/delete", deleteStu);

// 添加
stuRouter.post("/add", addStu);

// 查询单个学生详细信息
stuRouter.get("/querystudetail/:id", queryStuDetail);

module.exports = stuRouter;
