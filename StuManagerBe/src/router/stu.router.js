const Router = require("koa-router");

const {
  selectStu,
  updateStu,
  deleteStu,
  addStu,
  queryStuDetail,
  updateIntro,
  updateImg
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

// 修改单个学生自我介绍
stuRouter.post("/updateintro", updateIntro);

// 修改单个学生的图片
stuRouter.post("/updateimg", updateImg);

module.exports = stuRouter;
