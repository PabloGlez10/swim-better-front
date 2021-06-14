<template>
<div class="container">
    <section>
        
        <b-tabs position="is-centered" class="block" v-model="activeTab">
            <b-tab-item label="3-5 Años">
              <div class="content">
                <div class="columns">
                  <div class="column is-4">
                    <figure class="image is-256x256">
                      <img src="../../public/images/level1.jpg" class="has-ratio">
                    </figure>
                  </div>
                    <div class="column is-8">
                      <h3>
                        Ejercicio 1
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                      <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                          <a aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                            {{ !props.open ? 'Materiales' : 'Quitar materiales' }}
                          </a>
                        </template>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                      </b-collapse>
                    </div>
                  </div>
                  </div>
            </b-tab-item>

            <b-tab-item label="Music">
                Lorem <br>
                ipsum <br>
                dolor <br>
                sit <br>
                amet.
            </b-tab-item>

            <b-tab-item :visible="showBooks" label="Books">
                What light is light, if Silvia be not seen? <br>
                What joy is joy, if Silvia be not by— <br>
                Unless it be to think that she is by <br>
                And feed upon the shadow of perfection? <br>
                Except I be by Silvia in the night, <br>
                There is no music in the nightingale.
            </b-tab-item>

            <b-tab-item label="Videos" disabled>
                Nunc nec velit nec libero vestibulum eleifend.
                Curabitur pulvinar congue luctus.
                Nullam hendrerit iaculis augue vitae ornare.
                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
        </b-tabs>
    </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0,
                showBooks: false
            }
        }
    }
</script>