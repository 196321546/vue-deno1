<template>
    <div class="header">
        <p>欢迎来到vue开发教程</p>
        <div class="btn-box">
            <span @click="topage1" class="topage-1">page1</span>
            <span @click="topage2" class="topage-2">page2</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        topage1(){
            this.$emit('topage1');
        },
        topage2(){
            this.$emit('topage2')
        },
    }
}
</script>
<style scoped>
.header{
    text-align: center;
    color: #1aa84c;
    font-size: 28px;
    font-weight: 700;
    height: 60px;
    line-height: 60px;
    background-color: #3a409e;
}
.btn-box{
    float: left;
    margin-top: -60px;
    font-size: 14px;
    margin-left: 20px;
    color:#f00;
    text-decoration: underline;
}
.btn-box span{
    margin-left: 18px;
    cursor: pointer;
}
.btn-box span:hover{
    color:rgb(206, 250, 8);
}
</style>
