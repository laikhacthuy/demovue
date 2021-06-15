<template>
  <v-row>
    <v-col
      cols="12"
      sm="3"
    ></v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-img
        max-height="200"
        max-width="25%"
        class="text-center mt-5 logo"
        :src="logo"
      ></v-img>
      <v-row>
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <v-form @submit.prevent="submitForm" v-model="valid" class="mt-5" ref="form">
            <v-text-field
              v-model="username"
              :rules="nameRules"
              label="Username"
              outlined
              required
              rounded
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              placeholder="********"
              type="password"
              required
              outlined
              rounded
            ></v-text-field>
            <v-checkbox
              v-model="checkAutoLogin"
              :label="`Auto login`"
            ></v-checkbox>
            <v-btn
              class="blue white--text btnLogin"
              rounded
              type="submit"
              outlined
            >
              Login
            </v-btn>
            <p class="red--text darken-1--text mb-2 text-center">
              {{ errorLogin }}
            </p>
          </v-form>
        </v-col>
        <v-col cols="12" sm="3">
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      sm="3"
    ></v-col>
  </v-row>
</template>
<script>
import axios from 'axios'

export default {
  name: 'login',
  data()  {
    return {
      logo: require('@/assets/logo.png'),
      errorLogin: '',
      checkAutoLogin: '',
      valid: false,
      username: '',
      nameRules: [
        v => !!v || 'Vui lòng nhập tên đăng nhập'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Vui lòng nhập mật khẩu'
      ]
    }
  },
  methods: {
    submitForm () {
      if (this.$refs.form.validate()) {
        const params = new URLSearchParams()
        params.append('name', this.username)
        params.append('pass', this.password)
        params.append('autologin', this.checkAutoLogin)
        axios({ method:'post',url: 'http://testapi.vn/apilogin.php', data: params})
        .then(res => {
          if (res.data.status == '201') {
            if (res.data.autologin == 'true') {
              var now = new Date();
              var time = now.getTime();
              var expireTime = time + 12000;
              document.cookie = "token_cookie="+res.data.token+"; expires="+expireTime;
            }else {
              sessionStorage.setItem('token_session', res.data.token)
            }
            this.$store.commit('setCheckLogin', true);
            this.$router.push({ name: 'homepage' })
          }else {
            this.errorLogin = 'Username or password is not wrong'
          }
        })
        .catch(err => {
          console.error(err)
        })
      }
    }
  }
}
</script>
<style scoped>
.logo{
  margin: 0 auto;
}
.btnLogin{
  width: 100%;
}
</style>
