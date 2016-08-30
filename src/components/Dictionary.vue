<template>
<div>
<div>
   <button class="btn btn-default" @click="setLetter(letter)" v-for="letter in letters" 
            v-bind:class="{ 'active': selectedLetter == letter}">{{letter}}</button>
   <button @click="setLetter()" class="btn btn-default" v-bind:class="{ 'active': !selectedLetter}"> ALL</button>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

    <dictionaryitem  v-for="(a, q) in dictionary | filterByLetter selectedLetter" :id=a :item=q dataparent="accordion"></dictionaryitem>
      
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

</style>

