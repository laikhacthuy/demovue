<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="2"
        class="d-flex"
      >
        <img src="@/assets/logo.png" alt="" width="50px" height="50px">
        <p
          class="name_company blue--text text--darken-1 ml-5"
        >
          Name Company
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="7"
        class="d-flex"
      >
        <nav class="nav-menu-parent">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/introl">Introl</router-link>
            </li>
            <li>
              <router-link to="/product">Product</router-link>
            </li>
            <li>
              <router-link to="/cart">Cart</router-link>
            </li>
            <li>
              <router-link to="/about-us">About us</router-link>
            </li>
          </ul>
        </nav>
        <v-form ref="form" class="d-flex">
          <v-text-field
            label="Search"
            outlined
            dense
            class="input_text"
          ></v-text-field>
          <v-btn
            class="ml-2 light-blue white--text btnSearch"
            color="pink"
          >
            <v-icon small >fas fa-search</v-icon>
          </v-btn>
        </v-form>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-btn
          elevation="2"
          large
          rounded
          color="#0091EA"
          v-if="this.$store.getters.getCheckLogin == false"
        >
            <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn
          elevation="2"
          large
          rounded
          color="#ffc107"
          v-if="this.$store.getters.getCheckLogin == false"
        >
          <router-link to="/register">Register</router-link>
        </v-btn>
        <v-avatar v-if="this.$store.getters.getCheckLogin == true">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
        <v-btn
          elevation="2"
          color="warning"
          v-if="this.$store.getters.getCheckLogin == true"
          v-on:click="logout"
        >Logout</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
        :interval="3000"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'boxHeader',
  data () {
    return {
      items: [
        {
          src: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
        }
      ],
    }
  },
  methods: {
    logout: function () {
      sessionStorage.setItem('token_session', '')
      document.cookie = "token_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.$store.commit('setCheckLogin', false);
    }
  },
  computed: {
  },
  created () {
    console.log(this.$store.getters.getCheckLogin);
  }
}
</script>
<style scoped>
.name_company{
  margin: 10px 0;
  font-size: 18px;
}
.btnSearch{
  height: 39px !important;
}
.nav-menu-parent{
   background: #fff;
}
.nav-menu-parent ul{
  display: flex;
  background: #fff;
}
.nav-menu-parent> ul li{
    list-style: none;
    margin: 4px 25px;
    font-size: 22px;
}
.nav-menu-parent> ul li a{
    text-decoration: none;
    color: #3949AB;
}
.nav-menu-parent > ul li a:hover{
    color: #FFC107;
}
.v-application a {
    color: #fff;
    text-decoration: none;
}
.router-link-exact-active {
  color: #F06292 !important;
}
</style>
