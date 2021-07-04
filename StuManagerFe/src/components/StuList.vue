<template>
  <div>
    <!-- 学生信息展示表格 -->
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); width: 92%; margin: 0 auto;">
      <el-table  :data="tableData" stripe >
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column prop="school" label="学院"> </el-table-column>
        <el-table-column prop="major" label="专业"> </el-table-column>
        <el-table-column prop="" label="详细信息">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              round
              @click="detailConfirm(scope.$index, scope.row)"
              >详细信息</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="" label="修改数据">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              round
              @click="updateOpen(scope.$index, scope.row)"
              >修改数据</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="" label="删除数据">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              round
              @click="deleteConfirm(scope.$index, scope.row)"
              >删除数据</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-button type="warning" @click="addOpen">添加学生</el-button>
    </div>

    <!-- drawer -->
    <div >
      <!-- 修改学生信息 -->
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <!-- 修改表单 -->
        <div>
          <div style="margin: 20px"></div>
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model.number="formLabelAlign.age"></el-input>
            </el-form-item>
            <el-form-item label="学院">
              <el-input v-model="formLabelAlign.school"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input v-model="formLabelAlign.major"></el-input>
            </el-form-item>

            <el-button type="primary" @click="updateConfirm">提交</el-button>
          </el-form>
        </div>
      </el-drawer>

      <!-- 添加学生信息 -->
      <el-drawer
        title="我是标题"
        :visible.sync="drawerAdd"
        :with-header="false"
      >
        <!-- 修改表单 -->
        <div>
          <div style="margin: 20px"></div>
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlignAdd"
          >
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlignAdd.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model.number="formLabelAlignAdd.age"></el-input>
            </el-form-item>
            <el-form-item label="学院">
              <el-input v-model="formLabelAlignAdd.school"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input v-model="formLabelAlignAdd.major"></el-input>
            </el-form-item>
            <el-form-item label="专业id">
              <el-input v-model="formLabelAlignAdd.major_id"></el-input>
            </el-form-item>

            <el-button type="primary" @click="AddConfirm">提交</el-button>
          </el-form>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StuList",
  data() {
    return {
      tableData: [],
      drawer: false,
      drawerAdd: false,
      labelPosition: "top",
      formLabelAlign: {
        id: 0,
        name: "",
        age: 0,
        school: "",
        major: "",
      },
      formLabelAlignAdd: {
        id: 0,
        name: "",
        age: 0,
        school: "",
        major: "",
        major_id: 0,
      },
    };
  },
  methods: {
    // 添加按钮
    addOpen() {
      this.drawerAdd = true;
    },
    //  确认添加
    AddConfirm() {
      let data = this.formLabelAlignAdd;
      axios
        .post("http://localhost:1123/stu/add", data)
        .then((res) => {
          location.reload()
        })
        .catch((err) => {});
      this.drawerAdd = false;
    },

    // 更新按钮
    updateOpen(index, row) {
      this.formLabelAlign.id = row.id;
      this.drawer = true;
    },
    // 确认更新
    updateConfirm() {
      let data = this.formLabelAlign;
      axios
        .post("http://localhost:1123/stu/update", data)
        .then((res) => {
          location.reload()
        })
        .catch((err) => {});
      this.drawer = false;
    },
    // 确认删除
    deleteConfirm(index, row) {
      let data = this.formLabelAlign;
      data.id = row.id;
      axios
        .post("http://localhost:1123/stu/delete", data)
        .then((res) => {
          location.reload()

        })
        .catch((err) => {});
    },
    // 查看详细信息
    detailConfirm(index, row) {
       this.$router.push('/studetail/' + row.id)
    },
  },
  created() {
    axios
      .get("http://localhost:1123/stu/list")
      .then((res) => {
        this.tableData = res.data;
      })
      .catch((err) => {});
  },
};
</script>


<style scoped>
</style>