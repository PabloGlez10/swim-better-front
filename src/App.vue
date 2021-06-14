<template>
  <div id="app">
    <mainNav  />
    <router-view/>
    <mainFooter />
  </div>
</template>

<script>
import mainNav from '@/components/mainNav'
import mainFooter from '@/components/mainFooter'
export default {
  name: "App",
  data(){
    return{

    }
},
components: {
  mainNav,
  mainFooter
},
computed:{

},
  mounted(){
  this.$api.sayHello()
  const token = localStorage.getItem('jwt-token')

  this.$store.dispatch('login, token')
  }
}
</script>

<style>

</style>