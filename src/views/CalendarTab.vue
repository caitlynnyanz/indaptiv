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
          :selected-date="dateToday"
          :time-from="0 * 60"
          :disable-views="['years', 'year']"
          active-view="month"
          events-on-month-view="short"
          :events="formattedEvents"
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
import axios from "axios";
var moment = require("moment");

export default {
  name: "Tab3Page",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, VueCal },
  data: function () {
    return {
      events: [],
      formattedEvents: [],
      newEvent: {},
      dateToday: moment(new Date()).format("YYYY-MM-DD"),
    };
  },
  created: function () {
    this.indexEvents();
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    indexEvents: function () {
      axios.get("/events").then((response) => {
        console.log("events index", response);
        this.events = response.data;
        for (let i = 0; i < response.data.length; i++) {
          // console.log(response.data[i]);
          let event = {
            title: response.data[i].title,
            start: moment.utc(response.data[i].start).format("YYYY-MM-DD H:mm"),
            end: moment.utc(response.data[i].end).format("YYYY-MM-DD H:mm"),
            class: response.data[i].class,
          };
          console.log(event);
          this.formattedEvents.push(event);
        }
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

/* Different color for different event types. */
.vuecal__event.habit {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.goal {
  background-color: rgba(164, 230, 210, 0.9);
  border: 1px solid rgb(144, 210, 190);
}
.vuecal__event.task {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
</style>
