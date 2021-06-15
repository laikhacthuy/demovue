<template>
  <v-container>
    <v-row
      class="green lighten-1 white--text"
    >
      <v-col
        cols="12"
        sm="3"
      >
        <p class="company-info">Bionetwork Ltd</p>
        <p class="company-info">Phone: +30-6977664062</p>
        <p class="company-info">Address: Keas 69 Str.15234, ChalandriAthens,Greece</p>
        <p class="company-info">Company name</p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <h3 class="text-center">Google Maps</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.980384379247!2d105.81945410425034!3d21.022778763209775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1622539712752!5m2!1svi!2s" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <h4 class="text-center white--text font-italic">Copyright@2021</h4>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <h3 class="text-center">Social media</h3>
        <ul
          class="d-flex list-media"
        >
          <li>
            <a href="">
              <v-icon large class="blue--text">fab fa-facebook</v-icon>
            </a>
          </li>
          <li>
            <a href="">
              <v-icon large class="light-blue--text lighten-5--text">fab fa-twitter</v-icon>
            </a>
          </li>
          <li>
            <a href="">
              <v-icon large class="red--text">fab fa-google-plus</v-icon>
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'boxFooter'
}
</script>
<style scoped>
.list-media li{
  margin: 5px auto;
  list-style: none;
}
.list-media li a{
  text-decoration: none;
}
</style>
