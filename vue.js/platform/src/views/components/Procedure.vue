<template>
  <div id="procedure">
    <div class="left-tree">
      <div class="tree-top">
        <span class="model-z">程序组</span>
        <span class="model-s">
          <input type="text" placeholder="搜索">
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
          <span>程序列表</span>
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
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="程序名称"
                width="300">
              </el-table-column>
              <el-table-column
                prop="procedureTag"
                label="程序标识">
              </el-table-column>
              <el-table-column
                prop="createTime"
                width="300"
                label="创建时间">
              </el-table-column>
              <el-table-column
                label="操作"
                width="300">
                <template>
                  <i class="operate-icon el-icon-download">下载</i>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      crumbName: '云平台分析',
      showFlag: 1,
      currentPage: 1,
      data: [{
        id: 1,
        label: '程序列表',
        children: [
          {
            id: '1-1',
            label: '数据信息统计模型'
          },
          {
            id: '1-2',
            label: '云平台统计'
          }
        ]
      }],
      tableData1: [{
          order: '1',
          name: '云平台设备匹配',
          procedureTag: 'abc.zip',
          createTime: '2019-06-10 17:04:32',
          operate: '操作'
        }, {
          order: '2',
          name: '云平台设备匹配',
          procedureTag: 'abc.zip',
          createTime: '2019-06-10 17:04:32',
          operate: '操作'
        }, {
          order: '3',
          name: '云平台设备匹配',
          procedureTag: 'abc.zip',
          createTime: '2019-06-10 17:04:32',
          operate: '操作'
        }, {
          order: '4',
          name: '云平台设备匹配',
          procedureTag: 'abc.zip',
          createTime: '2019-06-10 17:04:32',
          operate: '操作'
        },
        {
          order: '5',
          name: '云平台设备匹配',
          procedureTag: 'abc.zip',
          createTime: '2019-06-10 17:04:32',
          operate: '操作'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#procedure {
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
</style>
