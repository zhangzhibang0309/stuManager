const connection = require("../app/database");

class StuService {
  //
  async selectStu() {
    const statement = `SELECT * FROM students`;
    const result = await connection.execute(statement);

    return result[0];
  }
  // 修改学生信息
  async updateStu(student) {
    const { id, name, age, school, major } = student;

    const statement = `UPDATE students SET name = ?, age = ?, school = ?, major = ? WHERE id = ? `;
    const result = await connection.execute(statement, [
      name,
      age,
      school,
      major,
      id,
    ]);

    return result[0];
  }
  // 删除学生信息
  async deleteStu(student) {
    const { id } = student;

    const statement = `DELETE FROM students WHERE id = ?`;
    const result = await connection.execute(statement, [id]);

    return result[0];
  }
  // 添加学生信息
  async addStu(student) {
    const { name, age, school, major, major_id } = student;

    const statement = `INSERT  INTO students (name, age, school, major, major_id) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [
      name,
      age,
      school,
      major,
      major_id,
    ]);

    return result[0];
  }
  // 查询单个学生详细信息
  async queryStuDetail(student) {
    const  id  = student;

    const statement = `SELECT * FROM students WHERE id = ?`;
    const result = await connection.execute(statement, [id]);

    return result[0];
  }

}

module.exports = new StuService();
