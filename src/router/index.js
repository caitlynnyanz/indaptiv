import { createRouter, createWebHistory } from "@ionic/vue-router";

import TabsPage from "../views/TabsPage.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import AccountView from "../views/AccountView.vue";
import NotificationsView from "../views/NotificationsView.vue";
import InviteView from "../views/InviteView.vue";
import AdvancedSettings from "../views/AdvancedSettings.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/dashboard",
      },
      {
        path: "dashboard",
        component: () => import("@/views/DashboardTab.vue"),
      },
      {
        path: "habits",
        component: () => import("@/views/HabitsTab.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/CreateTab.vue"),
      },
      {
        path: "journal",
        component: () => import("@/views/JournalTab.vue"),
      },
      {
        path: "calendar",
        component: () => import("@/views/CalendarTab.vue"),
      },
    ],
  },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/account", name: "account", component: AccountView },
  { path: "/notifications", name: "notifications", component: NotificationsView },
  { path: "/invite", name: "invite", component: InviteView },
  { path: "/settings/advanced", name: "advanced-settings", component: AdvancedSettings },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
