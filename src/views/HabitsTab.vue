<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="menu">
        <ion-button slot="start" @click="openMenu()">
          <ion-icon :icon="menu" />
        </ion-button>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Habits</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon :icon="wifi" slot="start"></ion-icon>
          <ion-label>Card Link Item 1 activated</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon :icon="wine" slot="start"></ion-icon>
          <ion-label>Card Link Item 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="warning" slot="start"></ion-icon>
          <ion-label>Card Button Item 1 activated</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon :icon="walk" slot="start"></ion-icon>
          <ion-label>Card Button Item 2</ion-label>
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  menuController,
  IonButton,
  IonIcon,
  IonCard,
} from "@ionic/vue";

import { menu, walk, warning, wifi, wine } from "ionicons/icons";
import axios from "axios";

export default {
  name: "Tab2Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonCard,
  },
  data: function () {
    return {
      habits: [],
    };
  },
  created: function () {
    this.indexHabits();
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    indexHabits: function () {
      axios.get("/habits").then((response) => {
        console.log("habits index", response);
        this.habits = response.data;
      });
    },
  },
  setup() {
    return {
      menu,
      walk,
      warning,
      wifi,
      wine,
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
