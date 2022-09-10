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
  IonImg,
} from "@ionic/vue";

import {
  accessibility,
  airplane,
  alarm,
  balloon,
  barbell,
  baseball,
  basketball,
  bed,
  beer,
  bicycle,
  book,
  briefcase,
  brush,
  bulb,
  cafe,
  cash,
  construct,
  diamond,
  dice,
  earth,
  fish,
  fitness,
  flash,
  flask,
  flower,
  football,
  golf,
  happy,
  headset,
  heart,
  home,
  image,
  leaf,
  menu,
  paw,
  planet,
  rocket,
  skull,
  star,
  time,
  umbrella,
  walk,
  warning,
  water,
  wifi,
  wine,
  women,
} from "ionicons/icons";
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
    IonImg,
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
      accessibility,
      airplane,
      alarm,
      balloon,
      barbell,
      baseball,
      basketball,
      bed,
      beer,
      bicycle,
      book,
      briefcase,
      brush,
      bulb,
      cafe,
      cash,
      construct,
      diamond,
      dice,
      earth,
      fish,
      fitness,
      flash,
      flask,
      flower,
      football,
      golf,
      happy,
      headset,
      heart,
      home,
      image,
      leaf,
      menu,
      paw,
      planet,
      rocket,
      skull,
      star,
      time,
      umbrella,
      walk,
      warning,
      water,
      wifi,
      wine,
      women,
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
        <ion-img slot="end" src="assets/logo.png"></ion-img>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Habits</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <br />
      <ion-title>Active Habits:</ion-title>
      <!-- <br /> -->
      <ion-card>
        <!-- <ion-item
          v-for="habit in habits"
          v-bind:key="habit.id"
          v-bind:href="`/tabs/habits/${habit.id}`"
          class="ion-activated"
        >
          <ion-icon :icon="`${habit.icon_name}`" slot="start"></ion-icon>
          <ion-label>{{ habit.name }}</ion-label>
        </ion-item> -->

        <ion-item class="ion-activated">
          <ion-icon :icon="alarm" slot="start"></ion-icon>
          <ion-label>Night owls can be 'early birds' too..?</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="barbell" slot="start"></ion-icon>
          <ion-label>#gains</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="book" slot="start"></ion-icon>
          <ion-label>Bookworm</ion-label>
        </ion-item>
      </ion-card>
      <ion-button class="index-button" href="#">View all habits</ion-button>
      <br />
      <ion-title>Resources:</ion-title>

      <!-- <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Collection</ion-card-subtitle>
          <ion-card-title>Article Title</ion-card-title>
        </ion-card-header>
        <ion-card-content>Article beginning contents.. brief read me</ion-card-content>
        <ion-button size="small">Read more</ion-button>
      </ion-card> -->
      <ion-grid>
        <ion-row justify-content-end>
          <ion-col padding size-xs="12" size-sm="4" size-md="4" size-lg="4" align-self-stretch>
            <ion-card class="level">
              <ion-card-content>
                <ion-card-subtitle>Collection</ion-card-subtitle>
                <ion-card-title>Article Title</ion-card-title>
                <ion-row class="progressWrapper"></ion-row>
                <ion-row>
                  <ion-img class="article-img" src="assets/square.png"></ion-img>
                </ion-row>
                <ion-row>
                  <ion-col text-center>
                    <ion-text>Sample text.. small read me</ion-text>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-button class="article-button" size="small">Read more</ion-button>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col padding size-xs="12" size-sm="4" size-md="4" size-lg="4" align-self-stretch>
            <ion-card class="faq">
              <ion-card-content>
                <ion-card-subtitle>Collection</ion-card-subtitle>
                <ion-card-title>Article Title</ion-card-title>
                <ion-row class="progressWrapper"></ion-row>
                <ion-row>
                  <ion-img class="article-img" src="assets/square.png"></ion-img>
                </ion-row>
                <ion-row>
                  <ion-col text-center>
                    <ion-text>Sample text.. small read me</ion-text>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-button class="article-button" size="small">Read more</ion-button>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col padding size-xs="12" size-sm="4" size-md="4" size-lg="4" align-self-stretch>
            <ion-card class="level">
              <ion-card-content>
                <ion-card-subtitle>Collection</ion-card-subtitle>
                <ion-card-title>Article Title</ion-card-title>
                <ion-row class="progressWrapper"></ion-row>
                <ion-row>
                  <ion-img class="article-img" src="assets/square.png"></ion-img>
                </ion-row>
                <ion-row>
                  <ion-col text-center>
                    <ion-text>Sample text.. small read me</ion-text>
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-button class="article-button" size="small">Read more</ion-button>
                </ion-row>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<!-- <ion-icon :icon="alarm" slot="start"></ion-icon> -->

<style scoped>
ion-title {
  text-align: left;
}
ion-card {
  text-align: center;
}
.title {
  text-align: center;
}
ion-img {
  height: 30px;
  width: auto;
  margin: 10px;
}

ion-button {
  margin: 10px;
}

.article-img {
  height: 100px;
  width: auto;
  margin-left: 35%;
}
.article-button {
  margin-left: 33%;
}
.index-button {
  font-size: small;
  height: 15px;
  width: auto;
  margin-left: 20px;
  margin-bottom: 30px;
}
</style>
