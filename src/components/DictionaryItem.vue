<template>
   <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#{{dataparent}}" href="#description{{id}}" aria-expanded="false" aria-controls="description{{id}}">
          {{item.title}}
        </a>
      </h4>
    </div>
    <div id=description{{id}} class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        {{item.description}}
      </div>
    </div>
</template>

<script>
export default {
  name : "dictionaryitem",
  props : ['item','id','dataparent']
}
</script>
