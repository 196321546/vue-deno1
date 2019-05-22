<template>
    <div class="form">
      <div>
        <input class="search-input" v-model="inputValue">
        <button class="search-btn" @click="handleSubmit">搜索</button>
      </div>
      <ul class="search-log-list">
        <p class="search-log">{{msg}}</p>
        <todo-item v-for="(item, index) of list"
          :key="index"
          :content="item"
          :index="index"
          @delate="handleDelate"></todo-item>
      </ul>
    </div>
</template>
<script>
import todoitem from './todoitem'
export default {
  components: { 'todo-item': todoitem
  },
  data () {
    return {
      inputValue: '',
      list: [],
      msg:'搜索记录'
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelate (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
