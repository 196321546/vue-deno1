<template>
  <div id="hdfs">
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%" 
    :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column
      prop="name" sortable
      label="name"
      width="150"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="permission"
      label="permission" sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="owner" sortable
      label="owner"
      width="150">
    </el-table-column>
    <el-table-column
      prop="group" sortable
      label="group"
      width="150">
    </el-table-column>
    <el-table-column
      prop="size" sortable
      label="size"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date" sortable
      label="date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="replication" sortable
      label="replication"
      width="150">
    </el-table-column>
    <el-table-column
      prop="blockSize" sortable
      label="blockSize"
      width="150">
    </el-table-column>
    <el-table-column label="操作" width="300">
      <template>
        <i class="el-icon-edit icon-setting" title="编辑"></i>
        <i class="el-icon-delete icon-setting" title="删除"></i>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tableData: [{
          name: '张三',
          permission: '-rw-r-r--',
          owner: 'root',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }, {
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        },{
          permission: '-rw-r-r--',
          owner: 'toot',
          group: 'supergroup',
          size: '179.16MB',
          date: '2019-05-29',
          replication: '1',
          blockSize: '128MB',
          name: '张三'
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
#hdfs {
  padding: 20px;
  .icon-setting {
    font-size: 16px;
    margin-right: 15px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
      color: #000;
    }
  }
}
</style>
