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
      <el-button @click="updateIntroOpen" type="primary" plain
        >修改个人介绍</el-button
      >
      <el-button @click="updateImgOpen" type="success" plain
        >修改照片</el-button
      >
    </div>

    <!-- drawer -->
    <div>
      <!-- 修改 -->
      <el-drawer title="我是标题" :visible.sync="drawer1" :with-header="false">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign1"
        >
          <el-form-item label="个人介绍">
            <el-input v-model="formLabelAlign1.stu_info"></el-input>
          </el-form-item>
          <el-button type="primary" @click="updateIntroConfirm">提交</el-button>
        </el-form>
      </el-drawer>
      <!-- 修改照片 -->
      <el-drawer title="我是标题" :visible.sync="drawer2" :with-header="false">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign1"
        >
          <el-form-item label="图片链接">
            <el-input v-model="formLabelAlign2.stu_img"></el-input>
          </el-form-item>
          <el-button type="primary" @click="updateImgConfirm">提交</el-button>
        </el-form>
      </el-drawer>
    </div>

    <div
      style="
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 92%;
        margin: 0 auto;
      "
    >
      <div
        style="
          width: 50%;
          margin: 0 auto;
          float: left;
          margin-top: 10%;
          margin-left: 2%;
        "
      >
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
      drawer1: false,
      drawer2: false,
      labelPosition: "top",
      formLabelAlign1: {
        stu_info: "",
        id: 0,
      },
      formLabelAlign2: {
        stu_img: "",
        id: 0,
      },
    };
  },
  computed: {
    StuId() {
      return parseInt(this.$route.params.id);
    },
  },
  methods: {
    // 修改个人介绍按钮
    updateIntroOpen() {
      this.drawer1 = true;
    },
    // 修改照片按钮
    updateImgOpen() {
      this.drawer2 = true;
    },
    // 确认修改个人介绍
    updateIntroConfirm() {
      let data = this.formLabelAlign1;
      data.id = parseInt(this.$route.params.id);

      axios
        .post("http://localhost:1123/stu/updateintro", data)
        .then((res) => {
          location.reload();
        })
        .catch((err) => {});
    },
    updateImgConfirm() {
      let data = this.formLabelAlign2;
      data.id = parseInt(this.$route.params.id);

      axios
        .post("http://localhost:1123/stu/updateimg", data)
        .then((res) => {
          location.reload();
        })
        .catch((err) => {});
    },
  },
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
  display: inline-block;
}
#img {
  width: 40%;
  margin-left: 6%;
}
</style>
