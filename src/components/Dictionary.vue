<template>
<div>
<div>
   <a @click="setLetter(letter)" v-for="letter in letters">{{letter}}</a>
   <dictionaryitem v-for="q in dictionary | filterByLetter letter" :item=q></dictionaryitem>
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
      this.letter = letter;
    }
  },
  data () {
    return {
      letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      dictionary : dictionary.termos,
      letter : ""
    }
  }
}
</script>
