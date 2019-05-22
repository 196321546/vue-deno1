<template>
  <li>{{content}}<span class="del-log"  @click="handleDelate">X</span></li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelate () {
      this.$emit('delate', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .del-log{
    float: right;
    font-size: 12px;
    font-family: sans-serif;
    color: #f00;
    margin-right: 10px;
  }
  li{
    background-color: #f1f1f1;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    border-bottom: 1px solid #fff;
  }
  li:hover{
    background-color: #eaeaea;
  }
</style>
