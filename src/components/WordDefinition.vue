<template>
  <div>
    <div v-if="item">
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
    </div>
</div>
</template>

<script>
import dictionary from '../dictionary/all.js';
export default {
  name: 'WordDefinition',
  methods : {
    updateWord : function(){
      let id = this.$route.params.id;
      this.item = dictionary.termos.find(x=> x.id === id);
    }
  },
  data () {
    return {
      item : null
    }
  },
  watch : {
    '$route' : function(){
      this.updateWord();
    }
  }

}
</script>
