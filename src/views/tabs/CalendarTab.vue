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
        <ion-title class="title">Calendar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="calendar">
        <vue-cal
          :selected-date="dateToday"
          :disable-views="['years', 'year']"
          active-view="week"
          :time="false"
          events-on-month-view="short"
          :events="formattedEvents"
          style="height: 750px"
        />
        <!-- <vue-cal
          xsmall
          hide-view-selector
          click-to-navigate
          :time="false"
          active-view="month"
          :disable-views="['week']"
        /> -->
      </div>
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
  IonImg,
} from "@ionic/vue";

import { menu } from "ionicons/icons";

// Documentation: https://antoniandre.github.io/vue-cal

import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";
var moment = require("moment");

export default {
  name: "Tab3Page",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon, VueCal, IonImg },
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
            class: response.data[i].color,
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
.event-middle .vuecal__event-time,
.event-end .vuecal__event-time {
  display: none;
}
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
.vuecal__event-title {
  font-size: 1em;

  /* margin: 4px 0 8px; */
}

/* .vuecal__event-title {
  font-size: 1em; */

/* margin: 4px 0 8px; */
/* } */
@media (min-width: 768px) {
  .vuecal__event-title {
    font-size: 1em;

    /* margin: 4px 0 8px; */
  }
}
@media (max-width: 575.98px) {
  .vuecal__event-title {
    font-size: 0.7em;

    /* margin: 4px 0 8px; */
  }
}

/* Different color for different event types. */
.vuecal__event.aa {
  background-color: rgba(252, 164, 63, 0.9);
  border: 1px solid rgba(252, 164, 63, 0.9);
  color: #fff;
}
.vuecal__event.ab {
  background-color: rgba(230, 212, 93, 0.9);
  border: 1px solid rgba(230, 212, 93, 0.9);
  color: #fff;
}
.vuecal__event.ba {
  background-color: rgba(84, 163, 113, 0.9);
  border: 1px solid rgba(84, 163, 113, 0.9);
  color: #fff;
}
.vuecal__event.bb {
  background-color: rgba(106, 210, 144, 0.9);
  border: 1px solid rgba(106, 210, 144, 0.9);
  color: #fff;
}
.vuecal__event.ca {
  background-color: rgba(90, 107, 145, 0.9);
  border: 1px solid rgba(90, 107, 145, 0.9);
  color: #fff;
}
.vuecal__event.cb {
  background-color: rgba(53, 119, 166, 0.9);
  border: 1px solid rgba(53, 119, 166, 0.9);
  color: #fff;
}

ion-img {
  height: 30px;
  width: auto;
  margin: 10px;
}
</style>
