import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { getIsLoggedIn, getUserId, getOrganizerId, getIsLoggedInOrganizer } from "src/utils/localStorage";
import { Notify } from "quasar";

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.auth)) {
      // Cek jika pengguna login sebagai user biasa atau organizer
      if (
        (getIsLoggedIn() == null || getIsLoggedIn() == undefined || getUserId() == null || getUserId() == undefined) &&
        (getIsLoggedInOrganizer() == null || getIsLoggedInOrganizer() == undefined || getOrganizerId() == null || getOrganizerId() == undefined)
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
