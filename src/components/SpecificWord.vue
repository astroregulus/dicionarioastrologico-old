<template>
  <div>
    <dictionaryitem :item=getSpecificWord($route.params.id) :opened=true></dictionaryitem>
  </div>
</template>

<script>
import dictionary from '../dictionary/all.js';
import dictionaryitem from './DictionaryItem.vue'

export default {
  name: 'Dictionary',
  components: {dictionaryitem},
  methods : {
    getSpecificWord : function(id){
      return dictionary.termos.find(x=> x.id === id);
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
