<template>
  <div id="model" class="clearfix">
    <div class="left-tree">
      <div class="tree-top">
        <span class="model-z">模型组</span>
        <span class="model-s">
          <input type="text" placeholder="搜索模型">
          <i class="icon-search"></i>
        </span>
      </div>
      <div class="model-list">
        <el-tree 
        :data="data" 
        node-key="id"
        :default-expanded-keys="['1-1', '1-2']"
        @node-click="selectTree">
        </el-tree>
      </div>
    </div>
    <div class="right-cont">
      <div class="cont-head clearfix">
        <div class="crumb">
          <span>模型组</span>
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
            <el-button type="primary" round @click="newModel = true" class="el-icon-plus">创建过程模型</el-button>
          </span>
          <span class="span-btn">
            <el-button type="primary" round @click="createModel('program')" class="el-icon-plus">创建程序模型</el-button>
          </span>
        </div>
      </div>
      <div class="platform" v-show="showFlag == 1">
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
                label="模型名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="creater"
                label="创建者">
              </el-table-column>
              <el-table-column
                prop="date"
                label="创建时间">
              </el-table-column>
              <el-table-column
                prop="modelType"
                label="模型类型">
              </el-table-column>
              <el-table-column
                prop="countType"
                label="计算类型">
              </el-table-column>
              <el-table-column
                label="操作"
                width="300">
                <template>
                  <i class="operate-icon el-icon-edit">编辑</i>
                  <i class="operate-icon el-icon-folder" @click="createTasks = true">任务</i>
                  <i class="operate-icon el-icon-document-copy">复制</i>
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
      <div class="dataInfo" v-show="showFlag == 2">
        <div class="cont-table">
          <template>
            <el-table
              :data="tableData2"
              border
              style="width: 100%">
              <el-table-column
                prop="order"
                label="序号"
                width="80">
              </el-table-column>
              <el-table-column
                prop="name"
                label="模型名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="creater"
                label="创建者">
              </el-table-column>
              <el-table-column
                prop="date"
                label="创建时间">
              </el-table-column>
              <el-table-column
                prop="modelType"
                label="模型类型">
              </el-table-column>
              <el-table-column
                prop="countType"
                label="计算类型">
              </el-table-column>
              <el-table-column
                label="操作"
                width="300">
                <template>
                  <i class="operate-icon el-icon-edit">编辑</i>
                  <i class="operate-icon el-icon-folder">任务</i>
                  <i class="operate-icon el-icon-document-copy">复制</i>
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
    <div class="dialog">
      <el-dialog title="创建任务" :visible.sync="createTasks" width="30%">
        <div class="dialog-top">
          <span :class="isActive == 1? 'spanActived' : ''" @click="isActive = 1">即时任务</span>
          <i class="line"></i>
          <span :class="isActive == 2? 'spanActived' : ''" @click="isActive = 2">定时任务</span>
        </div>
        <div class="dialog-cont">
          <div class="cont-instant" v-show="isActive == 1">
            <div class="instant-box">
              <label>任务名称：</label>
              <input type="text" placeholder="请输入任务名称">
            </div>
          </div>
          <div class="cont-timing" v-show="isActive == 2">
            <div class="instant-box">
              <label>任务名称：</label>
              <input type="text" placeholder="请输入任务名称">
            </div>
            <div class="instant-box startDate">
              <label>开始日期：</label>
              <el-date-picker
                v-model="dataValue"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <div class="instant-box gapTime">
              <label>间隔时间：</label>
              <input type="text" placeholder="请输入间隔时间">
              <select v-model="numValue">
                <option value="年">年</option>
                <option value="月">月</option>
                <option value="日">日</option>
                <option value="时">时</option>
                <option value="分">分</option>
                <option value="秒">秒</option>
              </select>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="createTasks = false">取 消</el-button>
          <el-button type="primary" @click="createTasks = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="新建模型" :visible.sync="newModel" width="30%">
        <div class="dialog-cont">
          <div class="instant-box">
            <label>模型名称：</label>
            <input type="text" placeholder="请输入任务名称">
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="newModel = false">取 消</el-button>
          <el-button type="primary" @click="createModel('process')">创 建</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataValue: '',
      numValue: '时',
      crumbName: '数据信息统计模型',
      currentPage: 1,
      showFlag: 1,
      createTasks: false,
      newModel: false,
      isActive: 1,
      data: [{
        id: 1,
        label: '模型列表',
        children: [
          {
            id: '1-1',
            label: '数据信息统计模型'
          },
          {
            id: '1-2',
            label: '云平台分析'
          }
        ]
      }],
      tableData1: [{
          order: '1',
          name: '数据信息统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '2',
          name: '数据信息统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '程序模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '3',
          name: '数据信息统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '4',
          name: '数据信息统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        },
        {
          order: '5',
          name: '数据信息统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }
        ],
      tableData2: [{
          order: '1',
          name: '云平台统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '2',
          name: '云平台设备匹配',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '程序模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '3',
          name: '云平台统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }, {
          order: '4',
          name: '云平台统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        },
        {
          order: '5',
          name: '云平台统计',
          creater: 'songyuting',
          date: '2019-06-04 17:38:09',
          modelType: '计划模型',
          countType: '批处理',
          operate: '操作'
        }
        ]
        
    }
  },
  methods: {
    selectTree(data) {
      this.crumbName = data.label;
      if(data.id == '1-1') {
        this.showFlag = 1;
      }else if(data.id == '1-2') {
        this.showFlag = 2;
      }
    },
    createModel(model) {
      if(model == 'process') {
        this.newModel = true;
        this.$router.push('/Process');
      }else if(model == 'program') {
        this.$router.push('/Program');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#model {
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
        }
        
      }
    }
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
  .dialog {
    .dialog-top {
      border-bottom: 1px solid #e1e1e1;
      margin-top: -20px;
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
    .dialog-cont {
      margin-top: 20px;
      min-height: 142px;
      .instant-box {
        margin-top: 20px;
        label {
          display: inline-block;
          vertical-align: middle;
          width: 100px;
          line-height: 34px;
          text-align: right;
        }
        input {
          width: 200px;
          height: 34px;
        }
        select {
          width: 100px;
          height: 34px;
          margin-left: 20px;
          border: 1px solid #e1e1e1;
          border-radius: 3px;
          color: #333333;
          padding: 0 10px;
        }
        .el-date-editor.el-input, .el-date-editor.el-input__inner {
          width: 200px;
        }
      }
    }
  }
}
</style>

