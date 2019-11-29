<template>
  <div>
    <div id="login">
      <div class="login-head">
        <p>大数据分析平台</p>
      </div>
      <div class="login-body">
        <div class="form-item">
          <label>账号：</label>
          <input type="text" v-model="username" placeholder="请输入账号...">
        </div>
        <div class="form-item">
          <label>密码：</label>
          <input type="password" v-model="password" placeholder="请输入密码...">
        </div>
        <div class="form-btn">
          <button @click="login()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if(this.username == 'admin' && this.password == 123) {
        this.$router.push('/Home');
      }else if(this.username == '' || this.password == '') {
        this.$message.error('请输入账号或者密码！');
      }else {
        this.$message.error('账号或者密码错误！');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f1f1f1;
}
#login {
  width: 320px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  color: #333;
  border: 1px solid #e1e1e1;
  .login-head {
    padding: 15px;
    border-bottom: 1px solid #e1e1e1;
    p {
      margin: 0;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .login-body {
    padding: 42px 15px;
    .form-item {
      margin-top: 20px;
      label {
        display: inline-block;
        width: 80px;
        height: 32px;
        line-height: 32px;
        text-align: right;
      }
      input {
        height: 30px;
      }
      &:first-child {
        margin-top: 0;
      }
    }
    .form-btn {
      margin-top: 20px;
      button {
        width: 100%;
        height: 32px;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
        background-color: #2d8cf0;
        border: none;
        color: #fff;
        transition: all .3s linear;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
