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
  IonCheckbox,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import { menu } from "ionicons/icons";
import axios from "axios";

export default {
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  data: function () {
    return {
      goals: [],
      tasks: [],
    };
  },
  created: function () {
    this.indexGoals();
    this.indexTasks();
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    indexGoals: function () {
      axios.get("/goals").then((response) => {
        console.log("goals index", response);
        this.goals = response.data;
      });
    },
    indexTasks: function () {
      axios.get("/tasks").then((response) => {
        console.log("tasks index", response);
        this.tasks = response.data;
      });
    },
  },
  setup() {
    return {
      menu,
    };
  },
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="menu">
        <ion-button slot="start" @click="openMenu()">
          <ion-icon :icon="menu" />
        </ion-button>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <br />
      <ion-title>Daily to-do!</ion-title>
      <br />
      <ion-item v-for="task in tasks" v-bind:key="task.id">
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>{{ task.name }}</ion-label>
      </ion-item>
      <br />
      <ion-title>This weeks goals!</ion-title>
      <ion-card v-for="goal in goals" v-bind:key="goal.id">
        <ion-card-header>
          <ion-card-subtitle>{{ goal.set_date }} - {{ goal.achieve_date }}</ion-card-subtitle>
          <ion-card-title>{{ goal.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ goal.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content {
  text-align: left;
}

.title {
  text-align: center;
}
</style>
