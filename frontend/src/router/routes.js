const routes = [
  {
    path: "/",
    component: () => import("src/layouts/HeaderFooter.vue"),
    children: [
      {path: "", name: "Landing",component: () => import("pages/Landing.vue"),
      },
    ],
  },

  {
    path: "/login-as",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      {path: "", name: "LoginAs", component: () => import("pages/LoginAs.vue")},
    ],
  },

  {
    path: "/register-as",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      {path: "", name: "RegisterAs", component: () => import("pages/RegisterAs.vue")},
    ],
  },

  {
    path: "/user",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      { path: "login", name: "UserLogin", component: () => import("pages/auth/user/Login.vue")},
      { path: "register", name: "UserRegister", component: () => import("pages/auth/user/Register.vue")},
    ],
  },


  {
    path: "/event",
    component: () => import("src/layouts/HeaderFooter.vue"),
    meta: {
      auth: true
    },
    children: [
      { path: "", name: "EVentDetail", component: () => import("pages/user/EventDetail.vue")},
    ],
  },


  {
    path: "/home",
    component: () => import("src/layouts/HeaderFooter.vue"),
    meta: {
      auth: true
    },
    children: [
      { path: "", name: "UserHome", component: () => import("pages/user/Home.vue")},
    ],
  },


  {
    path: "/organizer",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      { path: "login", name: "OrganizerLogin", component: () => import("pages/auth/admin/Login.vue")},
      { path: "register", name: "OrganizerRegister", component: () => import("pages/auth/admin/Register.vue")},
    ],
  },

  {
    path: "/organizer",
    component: () => import("src/layouts/OrganizerHeaderFooter.vue"),
    meta: {
      auth: true
    },
    children: [
      { path: "event", name: "OrganizerEvents", component: () => import("pages/admin/Events.vue")},
    ],
  },

 
  {
    path: "/organizer/event",
    component: () => import("src/layouts/OrganizerHeaderFooter.vue"),
    meta: {
      auth: true
    },
    children: [
      { path: "create", name: "AddEvent", component: () => import("pages/admin/AddEvent.vue")},
      { path: "applicants", name: "EventApplicants", component: () => import("pages/admin/EventApplicants.vue")},
      { path: "update", name: "UpdateEvent", component: () => import("pages/admin/UpdateEvent.vue")},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
