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
   computed: {
    item: function () {
      let id = this.$route.params.id;
      return dictionary.termos.find(x=> x.id === id);
    }
  }

}
</script>
