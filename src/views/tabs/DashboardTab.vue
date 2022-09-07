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
  IonImg,
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
    IonImg,
  },
  data: function () {
    return {
      goals: [],
      tasks: [],
    };
  },
  created: function () {
    this.indexWeeklyGoals();
    this.indexTasks();
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    indexWeeklyGoals: function () {
      axios.get("/weekly_goals").then((response) => {
        console.log("weekly_goals index", response);
        this.goals = response.data;
      });
    },
    indexTasks: function () {
      axios.get("/active_tasks").then((response) => {
        console.log("active_tasks index", response);
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
        <!-- <ion-title class="logo" slot="end">indaptiv</ion-title> -->
        <ion-img slot="end" src="assets/logo.png"></ion-img>
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
          <!-- <ion-card-subtitle>{{ goal.start_date }} - {{ goal.end_date }}</ion-card-subtitle> -->
          <ion-card-subtitle v-if="goal && goal.habit && goal.habit.name">
            Habit: "{{ goal.habit.name }}"
          </ion-card-subtitle>
          <ion-card-title>{{ goal.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ goal.description }}
        </ion-card-content>
      </ion-card>
      <ion-button class="index-button" href="/goals">View all goals</ion-button>
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
/* .logo {
  font-family: Verdana, Tahoma, Helvetica, Arial, sans-serif;
  color: #1b4248;
} */

ion-img {
  height: 30px;
  width: auto;
  margin: 10px;
}

.index-button {
  font-size: small;
  height: 15px;
  width: auto;
  margin-left: 20px;
  margin-bottom: 30px;
}

ion-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
