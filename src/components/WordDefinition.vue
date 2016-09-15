<template>
<div>
      <h2>{{item.title}}</h2>
      <p>{{item.description}}</p>
</div>
</template>

<script>
import dictionary from '../dictionary/all.js';
export default {
  name: 'WordDefinition',
  methods : {
    getSpecificWord : function(){
      let id = this.$route.params.id;
      return dictionary.termos.find(x=> x.id === id);
    }
  },
  data () {
    return {
      item : this.getSpecificWord()
    }
  }
}
</script>
