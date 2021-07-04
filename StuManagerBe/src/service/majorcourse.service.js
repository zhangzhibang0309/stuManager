const connection = require("../app/database");

class MajorCourseService {
  // 创建用户函数 async转异步
  async selcetMajorCourse() {
    const statement = `SELECT * FROM major`;

    const result = await connection.execute(statement);

    // 将user存储到数据库种
    return result[0];
  }
  //查询课程
  async selceCourse() {
    const statement = `SELECT * FROM course`;

    const result = await connection.execute(statement);

    // 将user存储到数据库种
    return result[0];
  }
  //添加专业
  async addMajor(major) {
    const { name, major_info, course_id } = major;

    const statement = `insert into major (name,major_info,course_id) values (?,?,?)`;

    const result = await connection.execute(statement,[name, major_info, course_id]);

    // 将user存储到数据库种
    return result[0];
  }
  //添加课程
  async addCourse(course) {
    const { name } = course;

    const statement = `insert into course(name) values (?)`;

    const result = await connection.execute(statement,[name]);

    // 将user存储到数据库种
    return result[0];
  }
}

module.exports = new MajorCourseService();
