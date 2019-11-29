<template>
    <div class="outer-box">
        <div class="inner-box">
            <button class="btn" @click="gettable">人员信息</button>
            <table class="table" cellspacing=0>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>数量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item.id">
                        <td>{{item.id | sear}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.number | thousands }}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: []
        };
    },
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用
    /* mounted:function(){
        this.$nextTick(function(){
            this.gettable();
        })
    }, */
    methods:{
        gettable(){
            var url  = "static/api/das.json";                
             // 发送请求:将数据返回到一个回到函数中
             var _this= this;
             // 并且响应成功以后会执行then方法中的回调函数
             this.$http.get(url).then(function(result) {
                 // result是所有的返回回来的数据
                 // 包括了响应报文行
                 // 响应报文头
                 // 响应报文体
                 console.log(result.data.data)
                 _this.list = result.data.data;
             }).catch(function(){
                 alert("出错了");
             });    
        }
    },

    //实例被创建之后执行
    created:function(){
        this.gettable()
    },
    // filter是默认会传入当前的item，而且filter的第一个参数默认就是当前的item。
    filters: {
        thousands(num){
            var str = num.toString();
            var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
            return str.replace(reg,"$1,");
        },
        sear(id){
            var str = 'no '+id;
            return str;
        }
    }
}
</script>

<style scoped>
    .outer-box{
        height: 400px;
        width: 800px;
        margin: 0 auto;
        background-color: #ac9;
        overflow: hidden;
    }
    .inner-box{
        background-color: #7cde7c;
    }
    table{
        width: 100%;
        margin: 40px auto 0;
    }
    .btn{
        height: 40px;
        cursor: pointer;
        border-radius: 3px;
        margin-left: 10px;
        width: 120px;
        background-color: #fff;
        outline: none;
        margin-top: 10px;
        margin-bottom: 10px;
        float: left;
        border: 1px solid #ccc;
    }
    table td{
        width: 25%;
        text-align: center;
        height: 36px;
        line-height: 36px;
        border:1px solid #666;
        border-bottom: 0px;
        border-left: 0px;
    }
    table td:first-child,th:first-child{
        border-left: 1px solid #666;
    }
    table th{
        width: 25%;
        text-align: center;
        height: 36px;
        border-left: 0px;
        line-height: 36px;
        background-color: #fff;
        border:1px solid #666;
        border-left:0px solid #666;
    }
    tbody tr:nth-child(even){
        background-color: #fff;
    }
    tbody tr:first-child td{
        border-top: 0px solid #666;
    }
    table tr:last-child td{
        border-bottom: 1px solid #666;
    }
</style>

