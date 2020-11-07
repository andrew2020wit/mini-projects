import Vue from "vue";
import VueRouter from "vue-router";
import Counter from "../views/counter";
import Home from "../views/Home.vue";
import StateModificator from "../views/state-modificator";
import StateViewer from "../views/state-viewer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/state-viewer",
    mame: "StateViewer",
    component: StateViewer,
  },
  {
    path: "/state-modificator",
    component: StateModificator,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
