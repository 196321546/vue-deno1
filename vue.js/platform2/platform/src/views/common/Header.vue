<template>
  <div>
    <header id="header">
      <div class="clearfix">
        <div class="left-logo">
          <span class="head-logo"></span>
          <span class="head-name">大数据分析平台</span>
        </div>
        <div class="right-user">
          <span class="user headImg">
            <img src="../../assets/images/small/headImg.jpg" alt="">
          </span>
          <span class="user headUser">admin</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#header {
    height: 56px;
    background-color: #427edd;
    padding: 15px 30px;
    box-sizing: border-box;
    .clearfix {
      overflow: hidden;
      .left-logo {
        float: left;
        .head-logo {
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 28px;
            background: url(../../assets/images/small/logo.png) no-repeat center center;
          }
        .head-name {
          display: inline-block;
          vertical-align: middle;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          margin-left: 10px;
        }
      }
      .right-user {
        float: right;
        cursor: pointer;
        .user {
          display: inline-block;
          vertical-align: middle;
        }
        .headImg {
          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }
        .headUser {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
          margin-left: 10px;
        }
      }
    }
  }
</style>


