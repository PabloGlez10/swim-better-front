<template>
  <div class="container">
    <h1 class="title has-text-centered has-text-white">Accede a SWIM BETTER</h1>
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" v-model="email" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" v-model="password" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field is-justify-content-center has-text-centered">
  <p class="control">
    <button class="button nb-primary-color" @click="login">
      <p class="light">Login</p>
    </button>
  </p>
</div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        }
        console.log(credentials)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        }
        return fetch("http://localhost:8081/auth/login", requestOptions).then(this.endLogin());
        
        
      } catch (error) {
        alert("Usuario y/o contraseña incorrectos")
      }
    },
    // endLogin(){
    //   console.log("El login ha finalizado.")
    //   this.$router.push("/")
    // }
  }

};
</script>