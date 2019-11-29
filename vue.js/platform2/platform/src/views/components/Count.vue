<template>
  <div id="count">
    <div class="left-tree">
      <div class="tree-top">
        <span class="model-z">算子组</span>
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
        >
        </el-tree>
      </div>
    </div>
    <div class="right-cont">
      <div class="cont-head clearfix">
        <div class="crumb">
          <span>算子组</span>
          <i>&nbsp;&gt;&nbsp;</i>
          <span>过程模型算子</span>
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
            <el-button type="primary" round @click="newModel = true" class="el-icon-plus">新建算子</el-button>
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
                label="算子名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="countTag"
                label="算子标识">
              </el-table-column>
              <el-table-column
                prop="unit"
                label="所属单位">
              </el-table-column>
              <el-table-column
                prop="date"
                label="创建时间">
              </el-table-column>
              <el-table-column
                label="操作"
                width="200">
                <template>
                  <i class="operate-icon el-icon-edit">编辑</i>
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
      <el-dialog title="新建算子" :visible.sync="newModel" width="30%">
        <div class="dialog-cont">
          <div class="instant-box">
            <label>计算框架：</label>
            <el-select v-model="framework" placeholder="请选择计算框架">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
          <div class="instant-box">
            <label>上传文件：</label>
            <input type="text" placeholder="请输入任务名称">
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="newModel = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFlag: 1,
      currentPage: 1,
      crumbName: '输入',
      newModel: false,
      framework: '',
      data: [{
        id: 1,
        label: '过程模型算子',
        children: [
          {
            id: '1-1',
            label: '输入'
          },
          {
            id: '1-2',
            label: '输出'
          },
          {
            id: '1-3',
            label: '数据处理',
            children: [
              {
                id: '1-3-1',
                label: '行处理'
              },
              {
                id: '1-3-2',
                label: '列处理'
              },
              {
                id: '1-3-3',
                label: '数据集处理'
              }
            ]
          },
          {
            id: '1-4',
            label: '可视化'
          }
        ]
      }],
      tableData1: [{
          order: '1',
          name: 'hive表输入',
          countTag: 'Reader_Hive',
          unit: 'xlkh',
          date: '2019-06-10 15:23:32',
          operate: '操作'
        }, {
          order: '2',
          name: 'mysql表输入',
          countTag: 'Reader_MySQL',
          unit: 'xlkh',
          date: '2019-06-10 15:23:32',
          operate: '操作'
        }, {
          order: '3',
          name: 'hive表输入',
          countTag: 'Reader_Hive',
          unit: 'xlkh',
          date: '2019-06-10 15:23:32',
          operate: '操作'
        }, {
          order: '4',
          name: 'hive表输入',
          countTag: 'Reader_Hive',
          unit: 'xlkh',
          date: '2019-06-10 15:23:32',
          operate: '操作'
        },
        {
          order: '5',
          name: 'hive表输入',
          countTag: 'Reader_Hive',
          unit: 'xlkh',
          date: '2019-06-10 15:23:32',
          operate: '操作'
        }
      ],
      options: [{
        value: '选项1',
        label: 'spark'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
#count {
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
          width: 212px;
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
