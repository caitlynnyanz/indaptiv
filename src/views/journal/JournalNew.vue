<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="menu">
        <ion-button slot="start" @click="openMenu()">
          <ion-icon :icon="menu" />
        </ion-button>
      </ion-toolbar>
      <ion-toolbar>
        <ion-title class="title">Journal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Default textarea -->
      <ion-textarea></ion-textarea>

      <!-- Textarea in an item with a placeholder -->
      <ion-item>
        <ion-textarea placeholder="Enter more information here..."></ion-textarea>
      </ion-item>

      <!-- Textarea in an item with a floating label -->
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea></ion-textarea>
      </ion-item>

      <!-- Disabled and readonly textarea in an item with a stacked label -->
      <ion-item>
        <ion-label position="stacked">Summary</ion-label>
        <ion-textarea
          disabled
          readonly
          value="Ionic enables developers to build performant, high-quality mobile apps."
        ></ion-textarea>
      </ion-item>

      <!-- Textarea that clears the value on edit -->
      <ion-item>
        <ion-label>Comment</ion-label>
        <ion-textarea clear-on-edit="true"></ion-textarea>
      </ion-item>

      <!-- Textarea with custom number of rows and cols -->
      <ion-item>
        <ion-label>Notes</ion-label>
        <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>
      </ion-item>
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
  IonItem,
  IonLabel,
  IonTextarea,
} from "@ionic/vue";

import { menu } from "ionicons/icons";

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
    IonItem,
    IonLabel,
    IonTextarea,
  },
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

<style scoped>
.title {
  text-align: center;
}
</style>
