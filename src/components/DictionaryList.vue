<template>
    <div>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <dictionaryitem  v-for="(a, q) in dictionary | filterByLetter selectedLetter" :id=a :item=q dataparent="accordion" track-by="id"></dictionaryitem>

        </div>
    </div>
</template>

<script>
//import dictionary from './dictionary.json';
import dictionary from '../dictionary/all.js';
import dictionaryitem from './DictionaryItem.vue'

export default {
  name: 'DictionaryList',
  components: {dictionaryitem},
  methods : {
    setLetter : function(letter){
        console.log("call this");
        console.log(letter);
      this.selectedLetter = letter;
    }
  },
  ready : function(){
    this.setLetter(this.$route.params.letra);
  },
  data () {
    return {
      dictionary : dictionary.termos,
      selectedLetter : this.$route.params.letra || ""
    }
  },
  events: {
    'letter-changed': function (letter) {
      // `this` in event callbacks are automatically bound
      // to the instance that registered it
      console.log("Chegou");
      this.setLetter(letter);
      return true;
    }
  }
}
</script>

<style>

</style>
