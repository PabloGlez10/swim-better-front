<template>
   <div class="home">

    <Slider preTitle="Bienvenido" 
            :isBig="false"
            title="Las mejores pizzas"
            desc="A los mejores precios" />

    <section class="swim-better-intro">
        <div class="wrap is-flex">
            <div class="info">
                <div class="columns">
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-phone"></span></div>
                        <div class="text">
                            <h3>000 (123) 456 7890</h3>
                            <p>A small river named Duden flows</p>
                        </div>
                    </div>
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-my_location"></span></div>
                        <div class="text">
                            <h3>198 West 21th Street</h3>
                            <p>Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div class="column is-4 is-flex">
                        <div class="icon"><span class="icon-clock-o"></span></div>
                        <div class="text">
                            <h3>Open Monday-Friday</h3>
                            <p>8:00am - 9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social is-flex is-align-items-center is-justify-content-center">
                <ul class="social-icon">
                    <li class="">
                        <a href="#"><span class="icon-twitter"></span></a>
                    </li>
                    <li class="">
                        <a href="#"><span class="icon-facebook"></span></a>
                    </li>
                    <li class="">
                        <a href="#"><span class="icon-instagram"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
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

<style>

</style>