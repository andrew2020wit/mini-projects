import Vue from "vue";
import VueRouter from "vue-router";
import P404 from "../views/404";
import Home from "../views/home";
import MessageComponent from "../views/message";
import RouteParams from "../views/route-params";
import UserInputComponent from "../views/user-input";

Vue.use(VueRouter);

const routes = [
  {
    path: "/route-params/:pid",
    component: RouteParams,
  },
  {
    path: "/route-params",
    component: RouteParams,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/message",
    component: MessageComponent,
  },
  {
    path: "/user-input",
    component: UserInputComponent,
  },
  {
    path: "*",
    component: P404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
