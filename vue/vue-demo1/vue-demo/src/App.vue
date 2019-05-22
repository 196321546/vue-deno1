<template>
  <div id="app">
    <app-header
      @topage1="topage1"
      @topage2="topage2"></app-header>
    <app-search></app-search>
  </div>
</template>

<script>
import appHeader from './components/app-header'
import appsearch from './components/app-search'

export default {
  name: 'App',
  components: { 'app-search': appsearch, 'app-header': appHeader
  },
  data () {
    return {
      msg:'12314123'
    }
  },
  methods: {
    topage1 (){

    },
    topage2 (){
      
    }
  }
}
</script>

<style>
  html,body,p,li,ul,a{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  .form{
    text-align: center;
    margin-top: 30px;
  }
  .search-log{
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
  }
  .search-input{
    width: 500px;
    height: 36px;
    border-radius:3px;
    padding-left: 14px;
    border: 1px solid #ccc;
  }
  .search-btn{
    height: 40px;
    font-size: 14px;
    width: 60px;
    vertical-align: top;
    line-height: 40px;
  }
  .search-log-list{
    padding-top: 20px;
    width: 560px;
    margin: 0 auto;
  }
</style>
