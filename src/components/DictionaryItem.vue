<template>
    <a v-link="{name:'palavra',params: {id: item.id}}">{{item.title}}</a>
</template>

<script>
export default {
  name : "dictionaryitem",
  props : {item:{},id:{},dataparent:{},opened:{type:Boolean,default:false}}
}
</script>
