<template>
  <div>
    <!-- 学生信息展示 -->
    <h2 id="introduce">学生主要信息</h2>

    <div
      style="
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 92%;
        margin: 0 auto;
      "
    >
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="school" label="学院"> </el-table-column>
        <el-table-column prop="major" label="专业"> </el-table-column>
      </el-table>
    </div>

    <!-- 自我介绍+图片 -->
    <br />
    <br />
    <div>
      <h2 id="introduce">个人介绍</h2>
    </div>

    <div style="   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 92%;
        margin: 0 auto;">
      <div style="width: 50%; margin: 0 auto; float: left;margin-top:10%;margin-left:2%">
      <span>{{ this.tableData[0].stu_info }}</span>
      <el-divider content-position="right">{{
        this.tableData[0].name
      }}</el-divider>
    </div>

    <img id="img" :src="this.tableData[0].stu_img" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StuDetail",
  data() {
    return {
      tableData: [],
      idData: 0,
    };
  },
  computed: {
    StuId() {
      return this.$route.params.id;
    },
  },
  methods: {},
  created() {
    axios
      .get("http://localhost:1123/stu/querystudetail/" + this.StuId)
      .then((res) => {
        this.tableData = res.data;
        console.log(this.tableData);
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
#introduce {
  margin-left: 5%;
  margin-bottom: 1%;
}
#img {
  width: 40%;
  margin-left: 6%;
}
</style>
