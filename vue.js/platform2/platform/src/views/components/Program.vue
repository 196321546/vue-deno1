<template>
  <div id="program">
    <div class="leftProgram">
      <el-row class="tac">
        <el-col>
          <el-menu
            :default-active="this.$route.path"
            :unique-opened="true"
            class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-edit-outline"></i> -->
                <span>算字库</span>
              </template>
              <el-menu-item index="1-2">
                <span slot="title">输入</span>
              </el-menu-item>
              <el-menu-item index="1-3">
                <span slot="title">输出</span>
              </el-menu-item>
              <el-menu-item index="1-4">
                <span slot="title">数据处理</span>
              </el-menu-item>
              <el-menu-item index="1-5">
                <span slot="title">可视化</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <!-- <i class="el-icon-coin"></i> -->
                <span>模型组</span>
              </template>
              <el-submenu index="2-1">
                <template slot="title">组A</template>
                <el-menu-item-group>
                  <el-menu-item index="">模型1</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2-2">
                <template slot="title">组B</template>
                <el-menu-item-group>
                  <el-menu-item index="">模型2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="main">
      <div class="programDiv">
        <div class="program-model">
          <div class="pro-label">
            <label>模型名称：</label>
            <input type="text" placeholder="请输入模型名称">
          </div>
          <div class="pro-label">
            <label>选择程序：</label>
            <input type="text" placeholder="请输入模型名称">
            <el-button type="primary" round>浏 览</el-button>
          </div>
        </div>
        <div class="program-config">
          <h4>参数配置</h4>
          <p>spark容器配置</p>
          <div class="config-input">
            <label>master</label>
            <input type="text" placeholder="请输入内容">
          </div>
          <div class="config-input">
            <label>driver-memory</label>
            <input type="text" placeholder="请输入内容">
          </div>
          <div class="config-input">
            <label>executor-cores</label>
            <input type="text" placeholder="请输入内容">
          </div>
          <div class="config-input">
            <label>executor-memory</label>
            <input type="text" placeholder="请输入内容">
          </div>
          <div class="config-input">
            <label>num-executors</label>
            <input type="text" placeholder="请输入内容">
          </div>
          <div class="btn-box">
            <button class="btn btn-submit">提交配置</button>
            <button class="btn btn-reset">重置</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderItem from '../common/Header'
export default {
  components: {
      HeaderItem
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
#program {
  border-top: 1px solid #e1e1e1;
  .leftProgram {
    width: 240px;
    position: absolute;
    margin-top: 10px;
    .el-menu-item, .el-submenu__title {
      height: 34px;
      line-height: 34px;
    }
  }
  .main {
    margin-left: 240px;
    .programDiv {
      display: flex;
      background-color: #f1f3f7;
      .pro-label {
        margin-top: 20px;
        label {
          display: inline-block;
          line-height: 34px;
          color: #333;
        }
        input {
          width: 300px;
          height: 34px;
        }
        .el-button.is-round {
          padding: 8px 18px;
          margin-left: 20px;
        }
      }
      .program-model {
        flex: 1;
        margin-left: 20px;
        margin-right: 20px;
        padding: 23px;
        min-height: 830px;
        background-color: #fff;
      }
      .program-config {
        width: 400px;
        min-height: 830px;
        color: #333333;
        padding: 20px;
        font-size: 14px;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        background-color: #fff;
        p {
          margin-top: 20px;
          font-size: 16px;
        }
        .config-input {
          margin-top: 20px;
          label {
            display: block;
            width: 300px;
            line-height: 34px;
            font-size: 14px;
          }
          input {
            width: 300px;
            height: 34px;
          }
        }
        .btn-box {
          margin-top: 20px;
          .btn {
            width: 100px;
            height: 30px;
            color: #333333;
            border-radius: 3px;
            background: linear-gradient(#d7d7d7,#f8f8f8);
            border: 1px solid #ccc;
            transition: all .2s ease;
            margin-right: 55px;
            &:hover {
              background: linear-gradient(#c7c7c7,#f1f1f1);
            }
          }
        }
      }
    }
  }
}
</style>
