<template>
  <div class="container">
    <h1 class="title pink has-text-centered white">Accede a SWIM BETTER</h1>
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
    <button class="button nb-primary-color">
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
        const response = await this.$api.auth.login(this.email, this.password)
        this.$router.push("/")
        
      } catch (error) {
        alert("Usuario y/o contraseña incorrectos")
      }
    },
  },
};
</script>