const service = require("../service/stu.service");

class StuController {
  // 展示学生列表
  async selectStu(ctx, next) {
    const result = await service.selectStu();
    // 返回数据
    ctx.body = result;
  }
  // 修改学生信息
  async updateStu(ctx, next) {
    const student = ctx.request.body;

    const result = await service.updateStu(student);
    // 返回数据
    ctx.body = result;
  }
  // 删除学生信息
  async deleteStu(ctx, next) {
    const student = ctx.request.body;

    const result = await service.deleteStu(student);
    // 返回数据
    ctx.body = result;
  }
  // 添加学生信息
  async addStu(ctx, next) {
    const student = ctx.request.body;

    const result = await service.addStu(student);
    // 返回数据
    ctx.body = result;
  }
  // 查询单个学生详细信息
  async queryStuDetail(ctx, next) {
    const student = ctx.params.id;
    

    const result = await service.queryStuDetail(student);
    // 返回数据
    ctx.body = result;
  }
}

module.exports = new StuController();
