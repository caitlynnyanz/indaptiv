<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="menu">
        <ion-button slot="start" @click="openMenu()">
          <ion-icon :icon="menu" />
        </ion-button>
        <ion-img slot="end" src="assets/logo.png"></ion-img>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Journal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card v-for="journal in journals" v-bind:key="journal.id">
        <ion-card-header>
          <ion-card-subtitle v-if="journal && journal.habit && journal.habit.name">
            Habit: "{{ journal.habit.name }}" | {{ journal.date }}
          </ion-card-subtitle>
          <ion-card-title>{{ journal.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ journal.body }}
        </ion-card-content>
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
  // IonItem,
  // IonLabel,
  // IonTextarea,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import { menu } from "ionicons/icons";
import axios from "axios";

export default {
  name: "Tab3Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    // IonItem,
    // IonLabel,
    // IonTextarea,
    IonImg,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  data: function () {
    return {
      journals: [],
      dates: [],
    };
  },
  created: function () {
    this.indexJournals();
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    indexJournals: function () {
      axios.get("/journals").then((response) => {
        console.log("journals index", response);
        this.journals = response.data;
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

<style scoped>
ion-content {
  text-align: left;
}
.title {
  text-align: center;
}
ion-img {
  height: 30px;
  width: auto;
  margin: 10px;
}
</style>
