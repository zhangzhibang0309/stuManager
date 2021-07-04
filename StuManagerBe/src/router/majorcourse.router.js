const Router = require("koa-router");

const {
  selcetMajorCourse,
  selceCourse,
  addMajor,
  addCourse
} = require("../controller/majorcourse.controller");

// stu接口
const stuRouter = new Router({ prefix: "/majorcourse" });

// 查询专业
stuRouter.get("/list", selcetMajorCourse);
//查询课程
stuRouter.get("/courselist", selceCourse);

//添加专业
stuRouter.post("/addmajor", addMajor);

//添加课程
stuRouter.post("/addcourse", addCourse);

module.exports = stuRouter;
