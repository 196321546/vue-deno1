<template>
  <div>
    <p class="title">添加品牌</p>
    <label>
      id:
      <input type="text" v-model="id" class="form-control">
    </label>
    <label>
      name:
      <input type="text" v-model="name" class="form-control">
    </label>
      <input type="button" value="提交" @click="add" class="btn btn-primary">
    <label>
        搜索：
      <input type="text" placeholder="name" class="form-control" v-model="words">
    </label>

    <table class="table" cellspacing=0>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>ctime</th>
          <th>operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sear(words)" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ctime}}</td>
          <td>
              <a href="" @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      words:'',
      list: [
        { id: 1, name: "宝马", ctime: new Date() },
        { id: 2, name: "路虎", ctime: new Date() },
        { id: 3, name: "奔驰", ctime: new Date() }
      ]
    };
  },
  methods: {
    add() {
        this.list.push({id:this.id,name:this.name,ctime: new Date()})
        this.id=this.name=''
    },
    del(ind){
        this.list.some((item,i)=>{
            if(item.id==ind){
                this.list.splice(i,1)
                return true;
            }
        })
    },
    sear(words){
        var newlist=[]
        this.list.forEach((item,i)=>{
            if(item.name.indexOf(words) !=-1){
                newlist.push(item);
            }
        });
        return newlist;
    }
  }
};
</script>
<style scoped>
.title {
  background: darkcyan;
  font-size: 26px;
  color: #fff133;
  height: 60px;
  line-height: 60px;
  padding-left: 40px;
}
label{
    margin-left: 140px;
    height: 40px;
    line-height: 40px;
}
.form-control{
    width: 300px;
    margin-top: 20px;
    padding-left: 10px;
}
input{
    height: 28px;
}
table{
    width: 90%;
    margin: 40px auto 0;
}
table td{
    width: 25%;
    text-align: center;
    height: 30px;
    line-height: 30px;
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
    height: 30px;
    border-left: 0px;
    line-height: 30px;
    border:1px solid #666;
    border-left:0px solid #666;
}
tbody tr:first-child td{
    border-top: 0px solid #666;
}
table tr:last-child td{
    border-bottom: 1px solid #666;
}
</style>

