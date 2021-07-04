<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/index">主页</el-menu-item>
      <el-menu-item index="/stulist">学生列表</el-menu-item>
      <el-submenu index="2">
        <template slot="title">学生</template>
        <div v-for="(item,index) in stuList" :key="index">
          <el-menu-item :index="'/studetail/' + item.id">{{item.name}}</el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="3">课程展示</el-menu-item>
      <el-menu-item index="4">成绩查询</el-menu-item>
      <el-menu-item index="5" disabled>选课系统</el-menu-item>
    </el-menu>

    <!-- 登录 -->

    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      stuList: [],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // location.reload()
    },
  },
  created() {
    axios
      .get("http://localhost:1123/stu/list")
      .then((res) => {
        this.stuList = res.data;
      })
      .catch((err) => {});
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.tac {
  height: 1000px;
}
</style>
