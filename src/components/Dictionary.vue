<template>
<div>
<div>
   <button class="btn btn-default" v-link="{name:'letra', params:{letra:letter}}" v-for="letter in letters"
            v-bind:class="{ 'active': selectedLetter == letter}">{{letter}}</button>
            
   <button v-link="{name:'letra', params:{letra:'todas'},activeClass: 'active'}" class="btn btn-default"> ALL</button>
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
//import dictionary from './dictionary.json';
import dictionary from '../dictionary/all.js';
import dictionaryitem from './DictionaryItem.vue'

export default {
  name: 'Dictionary',
  components: {dictionaryitem},
  methods : {
    setLetter : function(letter){
      letter = letter == "todas" ? "" : letter;
      this.$broadcast('letter-changed', letter);
      this.selectedLetter = letter;
    }
  },
  watch :{
    '$route' : function(){
      this.setLetter(this.$route.params.letra);
    }
  },
  data () {
    return {
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      dictionary : dictionary.termos,
      selectedLetter : this.$route.params.letra
    }
  }
}
</script>

<style>

</style>
