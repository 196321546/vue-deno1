<template>
  <div id="task">
    <div class="left-tree">
      <div class="tree-top">
        <span class="model-z">任务组</span>
        <span class="model-s">
          <input type="text" placeholder="搜索模型">
          <i class="icon-search"></i>
        </span>
      </div>
      <div class="model-list">
        <el-tree 
        :data="data" 
        node-key="id"
        :default-expanded-keys="['1-1','1-2','2-1','2-2']"
        >
        </el-tree>
      </div>
    </div>
    <div class="right-cont">
      <div class="cont-head clearfix">
        <div class="crumb">
          <span>任务列表</span>
          <i>&nbsp;&gt;&nbsp;</i>
          <span>云平台分析</span>
          <i class="crumb-inner">&nbsp;&gt;&nbsp;</i>
          <span class="crumb-inner">{{crumbName}}</span>
        </div>
        <div class="cont-head-right">
          <span class="input-search">
            <input type="text" placeholder="搜索模型">
          </span>
          <span class="span-btn span-btn-search">
              <el-button type="primary" round>搜索</el-button>
          </span>
          <span class="span-btn">
            <i class="span-btn-icon el-icon-plus"></i>
            <i class="span-btn-icon el-icon-refresh-right"></i>
          </span>
        </div>
      </div>
      <div class="task-platform" v-show="taskFlag == 'manage'">
        <div class="cont-task-btn">
            <span :class="isActive == 1? 'spanActived' : ''" @click="isActive = 1">即时任务</span>
            <i class="line"></i>
            <span :class="isActive == 2? 'spanActived' : ''" @click="isActive = 2">定时任务</span>
        </div>
        <div class="platform" v-show="showFlag == 'instant'">
          <div class="cont-table">
            <template>
              <el-table
                :data="tableData1"
                border
                style="width: 100%">
                <el-table-column
                  prop="order"
                  label="序号"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="任务名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="创建用户">
                </el-table-column>
                <el-table-column
                  prop="startTime"
                  width="180"
                  label="开始时间">
                </el-table-column>
                <el-table-column
                  prop="endTime"
                  width="180"
                  label="结束时间">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="耗时">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="状态">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="300">
                  <template>
                    <i class="operate-icon el-icon-s-data" @click="taskFlag = 'result'">结果</i>
                    <i class="operate-icon el-icon-chat-line-square" @click="taskFlag = 'record'">日志</i>
                    <i class="operate-icon el-icon-copy-document" @click="taskFlag = 'detail'">详情</i>
                    <i class="operate-icon el-icon-delete">删除</i>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </div>
          <div class="pages">
            <el-pagination
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 30]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="25">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="task-platform" v-show="taskFlag == 'result'">
        <h3>这里是程序</h3>
      </div>
      <div class="task-platform" v-show="taskFlag == 'record'">
        <h3>日志文本信息</h3>
      </div>
      <div class="task-platform" v-show="taskFlag == 'detail'">
        <h3>这里是详情</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskFlag: 'manage',
      isActive: 1,
      crumbName: '云平台设备统计',
      showFlag: 'instant',
      currentPage: 1,
      data: [{
        id: 1,
        label: '任务列表',
        children: [
          {
            id: '1-1',
            label: '输入'
          },
          {
            id: '1-2',
            label: '输出'
          }
        ]
      },
      {
        id: 2,
        label: '云平台分析',
        children: [
          {
            id: '2-1',
            label: '云平台统计'
          },
          {
            id: '2-2',
            label: '云平台设备匹配'
          }
        ]
      }],
      tableData1: [{
          order: '1',
          name: '云平台设备匹配',
          username: 'syt',
          startTime: '2019-06-10 17:04:32',
          endTime: '2019-06-10 15:23:32',
          time: '30分钟',
          state: '执行成功',
          operate: '操作'
        }, {
          order: '2',
          name: '云平台设备匹配',
          username: 'syt',
          startTime: '2019-06-10 17:04:32',
          endTime: '2019-06-10 15:23:32',
          time: '30分钟',
          state: '执行成功',
          operate: '操作'
        }, {
          order: '3',
          name: '云平台设备匹配',
          username: 'syt',
          startTime: '2019-06-10 17:04:32',
          endTime: '2019-06-10 15:23:32',
          time: '30分钟',
          state: '执行成功',
          operate: '操作'
        }, {
          order: '4',
          name: '云平台设备匹配',
          username: 'syt',
          startTime: '2019-06-10 17:04:32',
          endTime: '2019-06-10 15:23:32',
          time: '30分钟',
          state: '执行成功',
          operate: '操作'
        },
        {
          order: '5',
          name: '云平台设备匹配',
          username: 'syt',
          startTime: '2019-06-10 17:04:32',
          endTime: '2019-06-10 15:23:32',
          time: '30分钟',
          state: '执行成功',
          operate: '操作'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
#task {
  padding: 20px;
  position: relative;
  .left-tree {
    width: 310px;
    border-right: 1px solid #e1e1e1;
    min-height: 800px;
    position: absolute;
    top: 20px;
    left: 20px;
    .tree-top {
      .model-z {
        display: inline-block;
        vertical-align: middle;
        color: #666; 
      }
      .model-s {
        display: inline-block;
        vertical-align: middle;
        margin-left: 50px;
        input {
          width: 170px;
          height: 34px;
        }
        .icon-search {
          display: inline-block;
          vertical-align: middle;
          width: 16px;
          height: 16px;
          background: url(../../assets/images/small/search.png) no-repeat center center;
          margin-left: 10px;
        }
      }
    }
    .model-list {
      margin-top: 30px;
    }
  }
  .right-cont {
    margin-left: 350px;
    .cont-task-btn {
      border-bottom: 1px solid #e1e1e1;
      margin-top: 20px;
      span {
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        border-bottom: 1px solid transparent;
      }
      .spanActived {
        color: #409EFF;
        border-bottom: 1px solid #409EFF;
      }
      .line {
        display: inline-block;
        vertical-align: middle;
        width: 1px;
        height: 14px;
        background-color: #e1e1e1;
      }
    }
    .cont-head {
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 10px;
      .crumb {
        float: left;
        color: #666;
        line-height: 34px;
        .crumb-inner {
          color: #888;
        }
      }
      .cont-head-right {
        float: right;
        .input-search {
          input {
            width: 150px;
            height: 34px;
          }
        }
        .span-btn-search {
          margin-right: 50px;
        }
        .span-btn {
          margin-left: 10px;
          .el-button.is-round {
            padding: 8px 18px;
          }
          .span-btn-icon {
            display: inline-block;
            font-size: 20px;
            margin-right: 10px;
            cursor: pointer;
          }
          .span-btn-icon:hover {
            color: #409EFF;
          }
        }
        
      }
    }
    .platform {
      .cont-table {
        margin-top: 30px;
        .operate-icon {
          margin-right: 15px;
          cursor: pointer;
          &:hover {
            color: #409EFF;
          }
        }
      }
      .pages {
        margin-top: 30px;
        text-align: right;
      }
    }
  }
}
</style>
