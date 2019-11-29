<template>
  <div>
    <HeaderItem></HeaderItem>
    <SidebarItem></SidebarItem>
    <div class="mian">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import HeaderItem from './common/Header'
  import SidebarItem from './common/Sidebar'
  export default {
    components: {
      HeaderItem,
      SidebarItem
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  .mian {
    margin-left: 240px;
  }
</style>