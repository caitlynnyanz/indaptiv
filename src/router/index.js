import { createRouter, createWebHistory } from "@ionic/vue-router";

import TabsPage from "../views/TabsPage.vue";

import SignupView from "../views/settings/SignupView.vue";
import LoginView from "../views/settings/LoginView.vue";
import LogoutView from "../views/settings/LogoutView.vue";

import AccountView from "../views/settings/AccountView.vue";
import NotificationsView from "../views/settings/NotificationsView.vue";
import InviteView from "../views/settings/InviteView.vue";
import AdvancedSettings from "../views/settings/AdvancedSettings.vue";

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
        component: () => import("@/views/tabs/DashboardTab.vue"),
      },
      {
        path: "habits",
        component: () => import("@/views/tabs/HabitsTab.vue"),
      },
      {
        path: "habits/new",
        component: () => import("@/views/habits/HabitsNew.vue"),
      },
      {
        path: "habits/:id",
        component: () => import("@/views/habits/HabitsShow.vue"),
      },
      {
        path: "habits/:id/edit",
        component: () => import("@/views/habits/HabitsUpdate.vue"),
      },
      {
        path: "goals",
        component: () => import("@/views/goals/GoalsIndex.vue"),
      },
      {
        path: "goals/new",
        component: () => import("@/views/goals/GoalsNew.vue"),
      },
      {
        path: "goals/:id",
        component: () => import("@/views/goals/GoalsShow.vue"),
      },
      {
        path: "goals/:id/edit",
        component: () => import("@/views/goals/GoalsUpdate.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/tabs/CreateTab.vue"),
      },
      {
        path: "journal",
        component: () => import("@/views/tabs/JournalTab.vue"),
      },
      {
        path: "journal/new",
        component: () => import("@/views/journal/JournalNew.vue"),
      },
      {
        path: "journal/:id",
        component: () => import("@/views/journal/JournalShow.vue"),
      },
      {
        path: "journal/:id/edit",
        component: () => import("@/views/journal/JournalUpdate.vue"),
      },
      {
        path: "calendar",
        component: () => import("@/views/tabs/CalendarTab.vue"),
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
