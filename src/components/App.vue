<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <h1>Dicionário astrológico</h1>
      <div>
         <a href="#/{{letter}}" v-for="letter in letters">{{letter}}</a>
      </div>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
  data () {
    return {
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }
  }
}
</script>
