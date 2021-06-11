<template>
   <div class="home">

    <Slider preTitle="Bienvenido a" 
            :isBig="true"
            title="SWIM BETTER"
            desc="Donde encontraras los mejores entrenos" />

    <Swimbetterwall />
  </div>

  

</template>

<script>
import Slider from "@/components/slider"
import Swimbetterwall from "@/components/swimbetterwall"
export default {
  name: 'Home',
  components: {
    Slider,
    Swimbetterwall
  }
}
</script>