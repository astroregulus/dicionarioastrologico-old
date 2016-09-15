<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <menu></menu>
    </div>

    <div class="container">
      <h1>Dicionário astrológico</h1>

      <!-- sub-route -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import menu from './Menu.vue'
export default {
  name : "App",
  components: {menu}
}
</script>
