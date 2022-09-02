<script>
import axios from "axios";
import { IonPage, IonHeader, IonToolbar, IonTitle, menuController, IonButton, IonContent } from "@ionic/vue";

import { menu } from "ionicons/icons";

export default {
  data: function () {
    return {
      newUserParams: {},
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
  },
  methods: {
    openMenu() {
      menuController.open("app-menu");
    },
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
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
      <ion-toolbar class="title">
        <ion-title>Signup</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="signup">
      <div>
        <form v-on:submit.prevent="submit()">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>First Name:</label>
            <br />
            <input type="text" v-model="newUserParams.first_name" />
          </div>
          <br />
          <div>
            <label>Last Name:</label>
            <br />
            <input type="text" v-model="newUserParams.last_name" />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <br />
            <input type="email" v-model="newUserParams.email" />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <br />
            <input type="password" v-model="newUserParams.password" />
          </div>
          <br />
          <div>
            <label>Password confirmation:</label>
            <br />
            <input type="password" v-model="newUserParams.password_confirmation" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <br />
      <ion-button href="/login">Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<style>
.title {
  text-align: center;
}
.signup {
  text-align: center;
}
</style>
