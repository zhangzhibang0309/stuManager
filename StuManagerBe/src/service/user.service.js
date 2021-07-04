const connection = require("../app/database");

class UserService {
  // 创建用户函数 async转异步
  async create(user) {
    const { name, password } = user;
    const statement = `INSERT INTO users (name,password) VALUES (?,?)`;

    const result = await connection.execute(statement, [name, password]);

    // 将user存储到数据库种
    return result[0];
  }

  // 
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);

    return result[0];
  }
}

module.exports = new UserService();
