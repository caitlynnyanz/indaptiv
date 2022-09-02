<template>
  <ion-menu menu-id="app-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-if="!isLoggedIn" button @click="menuNavigation('/signup')">
          <ion-label>Signup</ion-label>
        </ion-item>
        <ion-item v-if="!isLoggedIn" button @click="menuNavigation('/login')">
          <ion-label>Login</ion-label>
        </ion-item>
        <ion-item v-if="isLoggedIn" button @click="menuNavigation('/logout')">
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonLabel,
  menuController,
} from "@ionic/vue";
export default {
  components: {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
  },
  methods: {
    menuNavigation(url) {
      menuController.close("app-menu");
      this.$router.push(url);
    },
  },
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>
