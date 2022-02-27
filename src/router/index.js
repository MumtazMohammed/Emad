import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MyJobs from "../views/MyJobs.vue";
import MySkills from "../views/MySkills.vue";
import Experienceandeducation from "../views/Experienceandeducation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MyJobs",
    name: "MyJobs",
    component: MyJobs,
  },
  {
    path: "/MySkills",
    name: "MySkills",
    component: MySkills,
  },
  {
    path: "/Experienceandeducation",
    name: "Experienceandeducation",
    component: Experienceandeducation,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
