<template>
  <div>
    <div id="background">
      <!-- 登录框 -->
      <div id="login-box">
        <br />
        <div id="title">
          <h2>欢迎登陆</h2>
        </div>
        <br />
        <br />

        <label for="">username</label>
        <input type="text" v-model="loginData.name" />
        <br />
        <label for="">password</label>
        <input type="text" v-model="loginData.password" />
        {{loginData}}
        <button @click="Login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  data() {
    return {
      loginData: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      axios
        .post("http://localhost:1123/login", this.loginData)
        .then((res) => {
          this.$router.push('/index')
        })
        .catch((err) => {});
    },
  },
  created() {},
};
</script>


<style scoped>
#background {
  position: absolute;
  z-index: 9998;
  background-image: url("https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/7cff224agy1gqs5jqd242j214e0r5td9.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  top: -0;
}

#login-box {
  background-image: url(https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210704000651.png) !important;
  background-size: 100% !important;
  border-radius: 4%;
  background-position: 10% 60% !important;
  width: 30%;
  height: 30%;
  background: white;
  margin: 0 auto;
  position: relative;
  top: 30%;
}

#title {
  width: 16%;
  margin: 0 auto;
}
.el-form-item__label {
  color: white !important;
}
</style>
