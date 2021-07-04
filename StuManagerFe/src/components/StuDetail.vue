<template>
  <div>
    {{ StuId }}
    <!-- 学生信息展示 -->
    <div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
      >
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="school" label="学院"> </el-table-column>
        <el-table-column prop="major" label="专业"> </el-table-column>
      </el-table>
    </div>

    <!-- 自我介绍+图片 -->
    <p>{{this.tableData[0].stu_info}}</p>
    <img :src="this.tableData[0].stu_img" alt="">
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
      .get('http://localhost:1123/stu/querystudetail/' + this.StuId)
      .then((res) => {
        this.tableData = res.data;
        console.log(this.tableData)
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
</style>
