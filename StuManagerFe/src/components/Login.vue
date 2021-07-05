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

        <!-- <label for="">username</label>
        <input type="text" v-model="loginData.name" />
        <br />
        <label for="">password</label>
        <input type="text" v-model="loginData.password" /> -->

        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="用户名"
            prop="name"
            :rules="[{ required: true, message: '用户名不能为空' }]"
          >
            <el-input
              type="name"
              v-model.number="numberValidateForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="密码"
            prop="password"
            :rules="[{ required: true, message: '用户名不能为空' }]"
          >
            <el-input
              type="password"
              v-model="numberValidateForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button id="btn" type="primary" @click="Login"
              >提交</el-button
            >
          </el-form-item>
        </el-form>

        <!-- <div id="btn">
          <el-button @click="Login" type="primary">主要按钮</el-button>
        </div> -->
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
      numberValidateForm: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    Login() {
      axios
        .post("http://localhost:1123/login", this.numberValidateForm)
        .then((res) => {
          this.$router.push("/index");
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
  background-image: url("https://z3.ax1x.com/2021/07/05/RhN5Fg.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  top: -0;
}

#login-box {
  /* background-image: url(https://z3.ax1x.com/2021/07/05/RhwzHx.jpg) !important; */
  background-size: 100% !important;
  border-radius: 4%;
  background-position: 10% 60% !important;
  width: 30%;
  height: 38%;
  background: rgb(255, 255, 255, 0.2);
  margin: 0 auto;
  position: relative;
  top: 26%;
}

#title {
  width: 25%;
  margin: 0 auto;
}
.el-form-item__label {
  color: white !important;
}

#btn {
  margin-left: 29%;
}

.el-input {
  width: 300px;
  margin-bottom: 3px;
}
</style>
