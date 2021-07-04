const service = require("../service/majorcourse.service");

class MajorCourseController {
  // 查询专业
  async selcetMajorCourse(ctx, next) {
    const result = await service.selcetMajorCourse();
    // 返回数据
    ctx.body = result;
  }
  //查询课程
  async selceCourse(ctx, next) {
    const result = await service.selceCourse();
    // 返回数据
    ctx.body = result;
  }
  //添加专业
  async addMajor(ctx, next) {
    const major = ctx.request.body;

    const result = await service.addMajor(major);
    // 返回数据
    ctx.body = result;
  }
  //添加课程
  async addCourse(ctx, next) {
    const course = ctx.request.body;

    const result = await service.addCourse(course);
    // 返回数据
    ctx.body = result;
  }
}

module.exports = new MajorCourseController();
