<template>
    <div class="header">
        <p>欢迎来到vue开发教程</p>
        <div class="btn-box">
            <span><router-link to="/">home</router-link></span>
            <span><router-link to="/page1">品牌列表</router-link></span>
            <span><router-link to="/page2">page2</router-link></span>
           <!--  <span @click="topage1" class="topage-1">page1</span>
            <span @click="topage2" class="topage-2">page2</span> -->
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        
    }
}
</script>
<style scoped>
.header{
    text-align: center;
    color: #27da66;
    font-size: 20px;
    font-weight: 700;
    height: 60px;
    line-height: 60px;
    background-color: #2730c7;
}
.btn-box{
    float: left;
    margin-top: -60px;
    font-size: 14px;
    margin-left: 20px;
    text-decoration: underline;
}
.btn-box span{
    margin-left: 18px;
    cursor: pointer;
}
.btn-box span a{
    color:#f00;
}
.btn-box span a:hover{
    color:rgb(206, 250, 8);
}
</style>
