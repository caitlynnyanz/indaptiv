<script>
import axios from "axios";
import { IonPage, IonHeader, IonToolbar, IonTitle, menuController, IonButton, IonContent, IonImg } from "@ionic/vue";
import { menu } from "ionicons/icons";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
      loadPage: false,
    };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonImg,
  },
  mounted() {
    setTimeout(() => {
      console.log("Delayed for 3 seconds.");
      this.loadPage = true;
    }, "3000");
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
          this.$router.push("/tabs/dashboard");
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
    <span v-if="loadPage">
      <ion-header>
        <ion-toolbar>
          <ion-title class="title">Login</ion-title>
        </ion-toolbar>
      </ion-header>
    </span>
    <ion-content class="login">
      <span v-if="loadPage">
        <div>
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
        <br />
        <ion-button href="/signup">Signup</ion-button>
      </span>
      <span v-else>
        <ion-img src="assets/logo.png"></ion-img>
      </span>
    </ion-content>
  </ion-page>
</template>

<style>
.title {
  text-align: center;
}
.login {
  text-align: center;
}

/* span height and width, 100vh 100vw */
/* text-align center,  */

@media (max-width: 575.98px) {
  ion-img {
    height: 10%;
    width: auto;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 90%;
  }
}

@media (min-width: 768px) {
  ion-img {
    height: 10%;
    width: auto;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 25%;
  }
}
ion-content {
  height: 100%;
  display: block;
}
</style>
