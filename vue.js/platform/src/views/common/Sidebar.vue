<template>
  <div id="eltac">
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="this.$route.path" :router="true"
          :unique-opened="true"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Home/Menu">数据管理</el-menu-item>
              <el-menu-item index="/Home/Hdfs">HDFS</el-menu-item>
              <el-menu-item index="">Hive</el-menu-item>
              <el-menu-item index="">MySQL</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-2">
              <template slot="title">ES</template>
              <el-menu-item-group>
                <el-menu-item index="">ES</el-menu-item>
                <el-menu-item index="">Discover</el-menu-item>
                <el-menu-item index="">Tools</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>模型分析</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Home/Model">模型管理</el-menu-item>
              <el-menu-item index="/Home/Count">算子管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>运维监测</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Home/Task">任务管理</el-menu-item>
              <el-menu-item index="/Home/Procedure">程序管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>可视化展示</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="">仪表盘</el-menu-item>
              <el-menu-item index="">模板列表</el-menu-item>
              <el-menu-item index="">大数据态势感知平台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
#eltac {
  width: 240px;
  position: absolute;
}
</style>

