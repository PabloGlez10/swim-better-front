<template>
  <nav aria-label="main navigation" class="navbar is-black p-3" role="navigation">
    <div class="container">
      
      <div class="navbar-brand">
        <a href="http://localhost:8080/" class="navbar-item">
          <div>
            <span><i class="fas fa-swimmer"></i></span>Swim
            <small class="red">Better</small>
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
        
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger is-outlined" href="http://localhost:8080/exercises">Ejercicios</a>
            <a class="button is-danger is-outlined" href="http://localhost:8080/">Randomizador</a>
            <a class="button is-danger is-outlined" href="http://localhost:8080/">Calendario</a>
            <a v-if="!isAuth" class="button is-danger is-outlined" href="/register">
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