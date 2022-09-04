<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/dashboard">
          <ion-icon :icon="home" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/habits">
          <ion-icon :icon="bulb" />
          <ion-label>Habits</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/create">
          <ion-icon :icon="add" />
          <ion-label>Create</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/journal">
          <ion-icon :icon="document" />
          <ion-label>Journal</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab5" href="/tabs/calendar">
          <ion-icon :icon="calendar" />
          <ion-label>Calendar</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from "@ionic/vue";
import { home, bulb, add, document, calendar } from "ionicons/icons";

export default {
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      home,
      bulb,
      add,
      document,
      calendar,
    };
  },
};
</script>
