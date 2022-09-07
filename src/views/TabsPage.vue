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

        <ion-button class="create" id="open-modal" expand="block">
          <div class="create">
            <ion-icon :icon="add" class="create-button" />
            <ion-label>Create</ion-label>
          </div>
        </ion-button>
        <ion-modal ref="modal" trigger="open-modal">
          <ion-content>
            <ion-toolbar>
              <ion-buttons slot="end">
                <ion-button color="light" @click="dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-list style="height: 100%">
              <ion-title class="title">Create:</ion-title>
              <ion-item>
                <ion-label class="label">
                  <ion-button class="left-button" href="/tabs/habits/new">Habit</ion-button>
                  <ion-button class="right-button" href="/goals/new">Goal</ion-button>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-modal>

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
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonButtons,
  IonButton,
  IonModal,
  IonContent,
  IonToolbar,
  // IonTitle,
  IonItem,
  IonList,
} from "@ionic/vue";
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
    IonButtons,
    IonButton,
    IonModal,
    IonContent,
    IonToolbar,
    // IonTitle,
    IonItem,
    IonList,
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
  methods: {
    dismiss() {
      this.$refs.modal.$el.dismiss();
    },
  },
};
</script>

<style>
ion-modal {
  --height: 25%;
  --width: 400px;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background: #1b4248;
  --color: white;
}

.create {
  --background: #1f1f1f;
  --color: #a2a4ab;
  --border-color: none;
  --background-hover: none;
  --color-hover: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  --padding-bottom: none;
  --padding-top: none;
}
.create-button {
  font-size: 28px;
}
.left-button {
  float: center;
}
.right-button {
  float: center;
  margin-left: 20px;
}
/* .label {
  padding-left: 100px;
  padding-right: 100px;
}
@media (min-width: 768px) {
  .label {
    padding-left: 200px;
    padding-right: 200px;
  }
}
@media (max-width: 575.98px) {
  .label {
    padding-left: 75px;
    padding-right: 75px;
  }
} */
.label {
  float: center;
  text-align: center;
}
.title {
  text-align: center;
}
</style>
