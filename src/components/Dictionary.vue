<template>
<div>
<div>
   <button @click="setLetter(letter)" v-for="letter in letters" 
            v-bind:class="{ 'active': selectedLetter == letter}">{{letter}}</button>
   <button @click="setLetter()" v-bind:class="{ 'active': !selectedLetter}"> ALL</button>
   <dictionaryitem v-for="q in dictionary | filterByLetter selectedLetter" :item=q></dictionaryitem>
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
import dictionary from './dictionary.json';
import dictionaryitem from './DictionaryItem.vue'
export default {
  name: 'Dictionary',
  components: {dictionaryitem},
  methods : {
    setLetter : function(letter){
      this.selectedLetter = letter;
    }
  },
  data () {
    return {
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      dictionary : dictionary.termos,
      selectedLetter : ""
    }
  }
}
</script>

<style>
  .active {
    color : red;
  }
</style>

