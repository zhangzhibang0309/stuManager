<template>
  <div>
    <div id="coursedisplay"><h1 >专业展示</h1></div>
    

    <!-- 专业展示 -->
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); width: 92%; margin: 0 auto;">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="学号" width="180"> </el-table-column>
        <el-table-column prop="name" label="专业名称" width="180">
        </el-table-column>
        <el-table-column prop="major_info" label="专业详细信息">
        </el-table-column>
      </el-table>
      <el-button type="warning" round @click="addOpen">添加专业</el-button>
    </div>

    <div id="coursedisplay"><h1 >课程展示</h1></div>
    <!-- 课程展示 -->
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); width: 92%; margin: 0 auto;">
      <el-table :data="tableData2" stripe style="width: 100%">
        <el-table-column prop="id" label="课程号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="专业课程"> </el-table-column>
      </el-table>
      <el-button type="warning" round @click="addCourseOpen"
        >添加课程</el-button
      >
    </div>

    <!-- drawer1 -->
    <div>
      <!-- 1 -->
      <el-drawer title="我是标题" :visible.sync="drawer1" :with-header="false">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign1"
        >
          <el-form-item label="专业名称">
            <el-input v-model="formLabelAlign1.name"></el-input>
          </el-form-item>
          <el-form-item label="专业详细信息">
            <el-input v-model="formLabelAlign1.major_info"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model.number="formLabelAlign1.course_id"></el-input>
          </el-form-item>

          <el-button type="primary" @click="addMajorConfirm">提交</el-button>
        </el-form>
      </el-drawer>
      <!-- 2 -->
      <el-drawer title="我是标题" :visible.sync="drawer2" :with-header="false">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign2"
        >
          <el-form-item label="专业课程">
            <el-input v-model="formLabelAlign2.name"></el-input>
          </el-form-item>

          <el-button type="primary" @click="addCourseConfirm">提交</el-button>
        </el-form>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MajorCourse",
  data() {
    return {
      tableData: [],
      tableData2: [],
      drawer1: false,
      drawer2: false,
      labelPosition: "top",
      formLabelAlign1: {
        name: "",
        major_info: "",
        course_id: "",
      },
      formLabelAlign2: {
        name: "",
      },
    };
  },
  methods: {
    addOpen() {
      this.drawer1 = true;
    },
    addCourseOpen() {
      this.drawer2 = true;
    },
    addMajorConfirm() {
      let data = this.formLabelAlign1;

      axios
        .post("http://localhost:1123/majorcourse/addmajor", data)
        .then((res) => {
          console.log(res);
          this.drawer1 = false;
        })
        .catch((err) => {});
        
    },
    addCourseConfirm(){
      let data = this.formLabelAlign2;

      axios
        .post("http://localhost:1123/majorcourse/addcourse", data)
        .then((res) => {
          console.log(res);
        this.drawer2 = false;

        })
        .catch((err) => {});
    }
  },
  created() {
    //查询专业
    axios
      .get("http://localhost:1123/majorcourse/list")
      .then((res) => {
        console.log(res);
        this.tableData = res.data;
      })
      .catch((err) => {});
    //查询课程
    axios
      .get("http://localhost:1123/majorcourse/courselist")
      .then((res) => {
        console.log(res);
        this.tableData2 = res.data;
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
#coursedisplay{
 margin-left: 5%;
 margin-top: 3%;
 margin-bottom: 1%;
}
</style>
