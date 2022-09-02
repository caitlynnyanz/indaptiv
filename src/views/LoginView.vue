<script>
import axios from "axios";
import { IonPage, IonHeader, IonToolbar, IonTitle, menuController, IonButton, IonIcon, IonContent } from "@ionic/vue";
import { menu } from "ionicons/icons";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
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
      <ion-toolbar>
        <ion-button slot="start" @click="openMenu()" expand="full">
          <ion-icon :icon="menu" />
        </ion-button>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="login">
        <form v-on:submit.prevent="submit()">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>Email:</label>
            <br />
            <input type="email" v-model="newSessionParams.email" />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <br />
            <input type="password" v-model="newSessionParams.password" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
