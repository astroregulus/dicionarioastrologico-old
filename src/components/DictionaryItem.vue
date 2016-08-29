<template>
  <div>
    {{item.title}} - {{item.description}}
  </div>
</template>

<script>
export default {
  name : "dictionaryitem",
  props : ['item']
}
</script>
