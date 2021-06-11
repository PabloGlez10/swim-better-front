<template>
  <nav aria-label="main navigation" class="navbar is-black p-3" role="navigation">
    <div class="container">
      
      <div class="navbar-brand">
        <a href="/index.html" class="navbar-item">
          <div>
            <span class="flaticon-swim-better"></span>Swim
            <small>Better</small>
          </div>
        </a>
        <a aria-expanded="false" aria-label="menu" class="navbar-burger" data-target="navbarBasicExample" role="button">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link exact-active-class="selected" class="navbar-item" v-for="(item, index) in items" :key="index" to="item.path">
            {{item.name}}
          </router-link>
        </div>
        <!-- <a class="navbar-item" href="/exercise.html">Ejercicios</a>
        <a class="navbar-item" href="/randomizer.html">Randomizador</a>
        <a class="navbar-item" href="/calendar.html">Calendario</a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="!isAuth" class="button is-warning is-outlined" href="registro.html">
              <strong>Crear Cuenta</strong>
            </a>
            <router-link v-if="!isAuth" class="button is-light is-outlined" to="/login">
            Acceder
            </router-link>
            <router-link v-if="isAuth" class="button is-light is-outlined" to="/profile">
            {{currentUser.firstName}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "mainNav",
  props: {
    items: Array
  },
  computed: {
    isAuth(){
      return this.$store.getters.isAuth
    },
    currentUser(){
      return this.$store.getters.currentUser
    }
  }
}
</script>

<style>

</style>