const crypto = require("crypto");

const md5password = (password) => {
  // 采用MD5加密
  const md5 = crypto.createHash("md5");
  // 拿到字符串
  const result = md5.update(password).digest("hex");

  return result;
};

module.exports = md5password;
