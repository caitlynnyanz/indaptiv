<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button slot="start" @click="openMenu()" expand="full">
          <ion-icon :icon="menu" />
        </ion-button>
        <ion-title>Habits</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Habits</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, menuController, IonButton, IonIcon } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { menu } from "ionicons/icons";

export default {
  name: "Tab2Page",
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonIcon },
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
