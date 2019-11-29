<template>
  <div id="process">
    <div class="leftOperate">
      <el-row class="tac">
        <el-col>
          <el-menu
            :default-active="this.$route.path"
            :unique-opened="true" @open="open1"
            class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-edit-outline"></i> -->
                <span>算子库</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">输入算子</template>
                <template>
                  <div class="nav-canvas">
                    <div id="myPaletteDiv"></div>
                  </div>
                </template>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">输出算子</template>
                <template>
                  <div class="nav-canvas">
                    <div id="myPaletteDiv2"></div>
                  </div>
                </template>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">数据处理</template>
                <template>
                  <div class="nav-canvas">
                    <div id="myPaletteDiv3"></div>
                  </div>
                </template>
              </el-submenu>
              <el-submenu index="1-4">
                <template slot="title">可视化</template>
              </el-submenu>
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
    <div class="operate">
      <Operator></Operator>
    </div>
  </div>
</template>

<script>
import Operator from './Operator'
import go from 'gojs'
export default {
  components: {
    Operator
  },
  data() {
    return {
      myPalette: null,
      myPalette2: null,
      myPalette3: null
    };
  },
  mounted() {
    const $GO = go.GraphObject.make;
    this.myPalette = $GO(go.Palette, "myPaletteDiv", {
      autoScrollRegion: 0,  //拖拽区域，防止出现滚动条
      hasVerticalScrollbar: false,
      hasHorizontalScrollbar: false
    });
    this.myPalette2 = $GO(go.Palette, "myPaletteDiv2", {
      autoScrollRegion: 0,  
      hasVerticalScrollbar: false,
      hasHorizontalScrollbar: false
    });
    this.myPalette3 = $GO(go.Palette, "myPaletteDiv3", {
      autoScrollRegion: 0,
      hasVerticalScrollbar: false,
      hasHorizontalScrollbar: false
    });
    this.myPalette.nodeTemplate =
      $GO(go.Node, "Horizontal",{selectionAdorned: false},
        $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
          new go.Binding("text", "value"))
      );
    this.myPalette.model.nodeDataArray = [
      {
        key: "11",
        name: "Reader_ES",
        value: "Reader_ES",
        topArray: [],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        from: true,
        to: false
      },
      {
        key: "12",
        name: "Reader_Hive",
        value: "Reader_Hive",
        topArray: [],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        from: true,
        to: false
      },
      {
        key: "13",
        name: "Reader_MySQL",
        value: "Reader_MySQL",
        topArray: [],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        from: true,
        to: false
      },
      {
        key: "14",
        name: "Reader_HDFS_TXT",
        value: "Reader_HDFS_TXT",
        topArray: [],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        from: true,
        to: false
      },
      {
        key: "15",
        name: "Reader_HDFS_JSON",
        value: "Reader_HDFS_JSON",
        topArray: [],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        from: true,
        to: false
      }
    ];
    this.myPalette2.nodeTemplate =
      $GO(go.Node, "Horizontal",{selectionAdorned: false},
        $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
          new go.Binding("text", "value"))
      );
    this.myPalette2.model.nodeDataArray = [
      {
        key: "22",
        name: "Writer_HDFS",
        value: "Writer_HDFS",
        topArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        bottomArray: [],
        from: false,
        to: true
      },
      {
        key: "22",
        name: "Writer_MySQL",
        value: "Writer_MySQL",
        topArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        bottomArray: [],
        from: false,
        to: true
      },
      {
        key: "33",
        name: "Writer_Hive",
        value: "Writer_Hive",
        topArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        bottomArray: [],
        from: false,
        to: true
      },
      {
        key: "44",
        name: "Writer_ES",
        value: "Writer_ES",
        topArray: [{ "portColor": "#0080ff", "portId": "bottom" }],
        bottomArray: [],
        from: false,
        to: true
      }
    ];
    this.myPalette3.nodeTemplate =
      $GO(go.Node, "Horizontal",{selectionAdorned: false},
        $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
          new go.Binding("text", "value"))
      );
    this.myPalette3.model.nodeDataArray = [
      {
        key: "31",
        name: "RowProcessor_Count",
        value: "RowProcessor_Count",
        topArray: [{ "portColor": "#0080ff", "portId": "top0" }],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom0" }],
        from: true,
        to: true
      },
      {
        key: "32",
        name: "RowProcessor_Distinct",
        value: "RowProcessor_Distinct",
        topArray: [{ "portColor": "#0080ff", "portId": "top0" }],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom0" }],
        from: true,
        to: true
      },
      {
        key: "33",
        name: "RowProcessor_Sort",
        value: "RowProcessor_Sort",
        topArray: [{ "portColor": "#0080ff", "portId": "top0" }],
        bottomArray: [{ "portColor": "#0080ff", "portId": "bottom0" }],
        from: true,
        to: true
      }
    ];
  },
  methods: {
    open1() {
        this.myPalette.rebuildParts();
        this.myPalette2.rebuildParts();
        this.myPalette3.rebuildParts();
      }
  }
};
</script>

<style lang="scss">
#process {
  border-top: 1px solid #e1e1e1;
  .leftOperate {
    width: 240px;
    position: absolute;
    margin-top: 10px;
    .el-menu-item, .el-submenu__title {
      height: 34px;
      line-height: 34px;
    }
    .nav-canvas {
      padding-left: 48px;
      #myPaletteDiv {
        width: 150px;
        height: 140px;
      }
      #myPaletteDiv2 {
        width: 110px;
        height: 114px;
      }
      #myPaletteDiv3 {
        width: 150px;
        height: 85px;
      }
    }
  }
  .operate {
    margin-left: 240px;
  }
}
</style>
