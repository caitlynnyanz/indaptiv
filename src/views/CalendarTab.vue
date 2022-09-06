<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="menu">
        <ion-button slot="start" @click="openMenu()">
          <ion-icon :icon="menu" />
        </ion-button>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Calendar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="calendar">
        <vue-cal
          selected-date="2022-09-04"
          :time-from="0 * 60"
          :disable-views="['years', 'year']"
          active-view="month"
          events-on-month-view="short"
          :events="events"
          style="height: 750px"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, menuController, IonButton, IonIcon } from "@ionic/vue";

import { menu } from "ionicons/icons";

// Documentation: https://antoniandre.github.io/vue-cal

import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  name: "Tab3Page",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, VueCal },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
  },
  setup() {
    return {
      menu,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vuecal {
  height: 100vh;
}
.vuecal--month-view .vuecal__cell {
  height: 100px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {
  padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
  display: none;
}

.calendar {
  padding: 25px;
}

.title {
  text-align: center;
}
</style>
