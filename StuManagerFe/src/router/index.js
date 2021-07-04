import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Login from "@/components/Login";
import StuList from "@/components/StuList";
import StuDetail from "@/components/StuDetail";
import MajorCourse from "@/components/MajorCourse";
import axios from "axios";

Vue.use(axios);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/index",
      name: "Index",
      component: Index
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/stulist",
      name: "StuList",
      component: StuList
    },
    {
      path: "/studetail/:id",
      name: "StuDetail",
      component: StuDetail
    },
    {
      path: "/majorcourse",
      name: "MajorCourse",
      component: MajorCourse
    }
  ]
});
