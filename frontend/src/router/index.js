import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { getIsLoggedIn, getUserId } from "src/utils/localStorage";
import { Notify } from "quasar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.auth)) {
      if (
        getIsLoggedIn() == null ||
        (getIsLoggedIn() == undefined && getUserId() == null) ||
        getUserId() == undefined
      ) {
        next({
          path: "/login-as",
        });
        Notify.create({
          color: "red",
          message: "Silahkan login terlebih dahulu",
          position: "top",
          timeout: 3000,
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  return Router;
});
