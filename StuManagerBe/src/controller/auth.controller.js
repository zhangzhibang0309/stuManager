class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;
    ctx.body = `登陆成功，欢迎${name}回来`;
  }
}

module.exports = new AuthController();
