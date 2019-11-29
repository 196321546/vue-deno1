<template>
  <div id="canvasDiv">
    <div class="canvasDiv">
      <div class="toolbar">
        <div class="clearfix">
          <div class="tool-right fl">
            <div class="tool-ul">
              <ul class="clearfix">
                <li><span class="icons save btn-json" title="保存" @click="operate('save')"></span></li>
                <li><span class="line"></span></li>
                <li class="scale-li" title="画布比例" @click="operate('scale')">
                  <span class="scale-num">{{ scaleNum }}</span>
                  <span class="icons-down"></span>
                  <ul class="scale-num-list" v-show="numList">
                    <li value="1.5" @click="liNum(1.5)">150%</li>
                    <li value="1.25" @click="liNum(1.25)">125%</li>
                    <li value="1" @click="liNum(1)">100%</li>
                    <li value="0.75" @click="liNum(0.75)">75%</li>
                    <li value="0.5" @click="liNum(0.5)">50%</li>
                  </ul>
                </li>
                <li><span class="line"></span></li>
                <li><span class="icons narrow" title="缩小" @click="operate('narrow')"></span></li>
                <li><span class="icons enlarge" title="放大" @click="operate('enlarge')"></span></li>
                <li><span class="line"></span></li>
                <li><span class="icons back" title="撤销" @click="operate('back')"></span></li>
                <li><span class="icons forword" title="反撤销" @click="operate('forword')"></span></li>
                <li><span class="line"></span></li>
                <li><span class="icons delete" title="删除" @click="operate('delete')"></span></li>
                <li><span class="line"></span></li>
                <li><span class="icons reset" title="清空画布" @click="operate('reset')"></span></li>
              </ul>
            </div>
          </div>
          <div class="retract" @click="toggle">
            <span class="icon-retract"></span>
          </div>
        </div>
      </div>
      <div id="myDiagramDiv"></div>
    </div>
    <div class="configDiv" v-show="showFlag">
      <ConfigItem></ConfigItem>
    </div>
  </div>
</template>

<script>
import go from 'gojs'
import ConfigItem from '../common/Config'
export default {
  components: {
    ConfigItem
  },
  data() {
    return {
      myDiagram: null,
      showFlag: true,
      numList: false,
      scaleNum: "100%",
    }
  },
  mounted() {
    const $GO = go.GraphObject.make;
    this.myDiagram = $GO(go.Diagram, "myDiagramDiv", 
        { 
            "undoManager.isEnabled": true,
            validCycle: go.Diagram.CycleNotDirected,
            allowHorizontalScroll: false,
            allowVerticalScroll: false 
        });
      
      function CustomLink() {
        go.Link.call(this);
      };
      go.Diagram.inherit(CustomLink, go.Link);

      CustomLink.prototype.findSidePortIndexAndCount = function (node, port) {
        var nodedata = node.data;
        if (nodedata !== null) {
          var portdata = port.data;
          var side = port._side;
          var arr = nodedata[side + "Array"];
          var len = arr.length;
          for (var i = 0; i < len; i++) {
            if (arr[i] === portdata) return [i, len];
          }
        }
        return [-1, len];
      };

      CustomLink.prototype.computeEndSegmentLength = function (node, port, spot, from) {
        var esl = go.Link.prototype.computeEndSegmentLength.call(this, node, port, spot, from);
        var other = this.getOtherPort(port);
        if (port !== null && other !== null) {
          var thispt = port.getDocumentPoint(this.computeSpot(from));
          var otherpt = other.getDocumentPoint(this.computeSpot(!from));
          if (Math.abs(thispt.x - otherpt.x) > 20 || Math.abs(thispt.y - otherpt.y) > 20) {
            var info = this.findSidePortIndexAndCount(node, port);
            var idx = info[0];
            var count = info[1];
            if (port._side == "top" || port._side == "bottom") {
              if (otherpt.x < thispt.x) {
                return esl + 4 + idx * 8;
              } else {
                return esl + (count - idx - 1) * 8;
              }
            } else {  // left or right
              if (otherpt.y < thispt.y) {
                return esl + 4 + idx * 8;
              } else {
                return esl + (count - idx - 1) * 8;
              }
            }
          }
        }
        return esl;
      };

      CustomLink.prototype.hasCurviness = function () {
        if (isNaN(this.curviness)) return true;
        return go.Link.prototype.hasCurviness.call(this);
      };

      CustomLink.prototype.computeCurviness = function () {
        if (isNaN(this.curviness)) {
          var fromnode = this.fromNode;
          var fromport = this.fromPort;
          var fromspot = this.computeSpot(true);
          var frompt = fromport.getDocumentPoint(fromspot);
          var tonode = this.toNode;
          var toport = this.toPort;
          var tospot = this.computeSpot(false);
          var topt = toport.getDocumentPoint(tospot);
          if (Math.abs(frompt.x - topt.x) > 20 || Math.abs(frompt.y - topt.y) > 20) {
            if ((fromspot.equals(go.Spot.Left) || fromspot.equals(go.Spot.Right)) &&
              (tospot.equals(go.Spot.Left) || tospot.equals(go.Spot.Right))) {
              var fromseglen = this.computeEndSegmentLength(fromnode, fromport, fromspot, true);
              var toseglen = this.computeEndSegmentLength(tonode, toport, tospot, false);
              var c = (fromseglen - toseglen) / 2;
              if (frompt.x + fromseglen >= topt.x - toseglen) {
                if (frompt.y < topt.y) return c;
                if (frompt.y > topt.y) return -c;
              }
            } else if ((fromspot.equals(go.Spot.Top) || fromspot.equals(go.Spot.Bottom)) &&
              (tospot.equals(go.Spot.Top) || tospot.equals(go.Spot.Bottom))) {
              var fromseglen = this.computeEndSegmentLength(fromnode, fromport, fromspot, true);
              var toseglen = this.computeEndSegmentLength(tonode, toport, tospot, false);
              var c = (fromseglen - toseglen) / 2;
              if (frompt.x + fromseglen >= topt.x - toseglen) {
                if (frompt.y < topt.y) return c;
                if (frompt.y > topt.y) return -c;
              }
            }
          }
        }
        return go.Link.prototype.computeCurviness.call(this);
      };

      // 创建上下文菜单按钮的函数:
      function makeButton(text, action, visiblePredicate) {
        return $GO("ContextMenuButton",
          $GO(go.TextBlock, text), { click: action },
          visiblePredicate ? new go.Binding("visible", "", function (o, e) { return o.diagram ? visiblePredicate(o, e) : false; }).ofObject() : {});
      }

      const myDiagram2 = this.myDiagram;
      // 添加端口
      function addPort(side) {
        myDiagram2.startTransaction("addPort");
        myDiagram2.selection.each(function (node) {
          if (!(node instanceof go.Node)) return;
          var i = 0;
          while (node.findPort(side + i.toString()) !== node) i++;
          var name = side + i.toString();
          var arr = node.data[side + "Array"];
          if (arr) {
            var newportdata = {
              portId: name,
              portColor: '#0080ff'
            };
            myDiagram2.model.insertArrayItem(arr, -1, newportdata);
          }
        });
        myDiagram2.commitTransaction("addPort");
      }
      // 删除端口
      function removePort(port) {
        myDiagram2.startTransaction("removePort");
        var pid = port.portId;
        var arr = port.panel.itemArray;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].portId === pid) {
            myDiagram2.model.removeArrayItem(arr, i);
            break;
          }
        }
        myDiagram2.commitTransaction("removePort");
      }

      var nodeMenu =  
        $GO("ContextMenu",
          $GO(go.Shape,{ strokeWidth: 0, height: 0, stretch: go.GraphObject.Horizontal }),
          makeButton("添加入口",function (e,obj) { addPort("top"); }),
          makeButton("删除端口",function (e,obj) { removePort(obj.part.adornedObject); })
        );

      var portSize = new go.Size(8, 8);  //端口大小

      var panelMenu =
        $GO("ContextMenu",
          $GO(go.Shape,
            { strokeWidth: 0, height: 0, stretch: go.GraphObject.Horizontal }),
          makeButton("复制算子",
            function (e, obj) { e.diagram.commandHandler.copySelection(); }),
          makeButton("删除算子",
            function (e, obj) { e.diagram.commandHandler.deleteSelection(); }),
        );

      this.myDiagram.nodeTemplate =
          $GO(go.Node, "Table",
            {
              locationObjectName: "BODY",
              locationSpot: go.Spot.Center,
              selectionObjectName: "BODY",
              contextMenu: panelMenu
            },
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            $GO(go.Panel, "Auto",
              {
                row: 1, column: 1, name: "BODY",
                stretch: go.GraphObject.Fill,
                fromMaxLinks: 1,  //最多一条线离开该端口
                toMaxLinks: 1   //最多一条线进入该端口
              },
              $GO(go.Shape, "Rectangle",
                {
                  fill: "#46a3ff", stroke: null, strokeWidth: 0, width: 130, height: 40,
                  minSize: new go.Size(100, 40),
                },
                new go.Binding("fromLinkable", "from"),
                new go.Binding("toLinkable", "to")
              ),
              $GO(go.TextBlock,
                {
                  margin: 10, textAlign: "center", font: "14px  Segoe UI,sans-serif",
                  stroke: "white", editable: false
                },
                new go.Binding("text", "name").makeTwoWay())
            ),
            $GO(go.Panel, "Horizontal",
              new go.Binding("itemArray", "topArray"),
              {
                row: 0, column: 1,
                itemTemplate:
                  $GO(go.Panel,
                    {
                      _side: "top",
                      fromSpot: go.Spot.Top,
                      toSpot: go.Spot.Top,
                      fromLinkable: false,   //允许输入，不允许输出
                      toLinkable: true,
                      cursor: "pointer",
                      contextMenu: nodeMenu,
                      fromMaxLinks: 0,
                      toMaxLinks: 1
                    },
                    new go.Binding("portId", "portId"),
                    $GO(go.Shape, "Rectangle",
                      {
                        stroke: null, strokeWidth: 0,
                        desiredSize: portSize,
                        margin: new go.Margin(0, 1)
                      },
                      new go.Binding("fromLinkable", "from"),
                      new go.Binding("toLinkable", "to"),
                      new go.Binding("fill", "portColor"))
                  )
              }
            ),
            $GO(go.Panel, "Horizontal",
              new go.Binding("itemArray", "bottomArray"),
              {
                row: 2, column: 1,
                itemTemplate:
                  $GO(go.Panel,
                    {
                      _side: "bottom",
                      fromSpot: go.Spot.Bottom,
                      toSpot: go.Spot.Bottom,
                      fromLinkable: true,  //允许输出，不允许输入
                      toLinkable: false,
                      cursor: "pointer",
                      toMaxLinks: 0
                    },
                    new go.Binding("portId", "portId"),
                    $GO(go.Shape, "Rectangle",
                      {
                        stroke: null, strokeWidth: 0,
                        desiredSize: portSize,
                        margin: new go.Margin(0, 1)
                      },
                      new go.Binding("fill", "portColor"),
                      new go.Binding("fromLinkable", "from"),
                      new go.Binding("toLinkable", "to"))
                  )
              }
            ),
            $GO(go.Panel, "Horizontal",
              new go.Binding("itemArray", "midArray"),
              {
                row: 2, column: 1,
                itemTemplate:
                  $GO(go.Panel,
                    {
                      _side: "mid",
                      fromSpot: go.Spot.Bottom,
                      toSpot: go.Spot.Top,
                      fromLinkable: true,
                      toLinkable: true,
                      cursor: "pointer",
                      contextMenu: nodeMenu,
                      toMaxLinks: 1
                    },
                    new go.Binding("portId", "portId"),
                    $GO(go.Shape, "Rectangle",
                      {
                        stroke: null, strokeWidth: 0,
                        desiredSize: portSize,
                        margin: new go.Margin(0, 1)
                      },
                      new go.Binding("fill", "portColor"),
                      new go.Binding("fromLinkable", "from"),
                      new go.Binding("toLinkable", "to"))
                  )
              }
            )
          )

      this.myDiagram.linkTemplate =
        $GO(CustomLink,
          {
            routing: go.Link.Normal,
            corner: 4,
            curve: go.Link.JumpGap,
            reshapable: true,
            resegmentable: true,
            relinkableFrom: true,
            relinkableTo: true,
          },
          new go.Binding("points").makeTwoWay(),
          $GO(go.Shape, { stroke: "#ccc", strokeWidth: 2 }),
          $GO(go.Shape,  // 连接箭头
            { toArrow: "standard", strokeWidth: 0, fill: "#ccc" }),
        );

      this.myDiagram.contextMenu =
        $GO("ContextMenu",
          makeButton("粘贴",
            function (e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.lastInput.documentPoint); },
            function (o) { return o.diagram.commandHandler.canPasteSelection(); }),
          makeButton("撤销",
            function (e, obj) { e.diagram.commandHandler.undo(); },
            function (o) { return o.diagram.commandHandler.canUndo(); }),
          $GO(go.Shape,
            { strokeWidth: 0, height: 0, stretch: go.GraphObject.Horizontal }),
          makeButton("回撤",
            function (e, obj) { e.diagram.commandHandler.redo(); },
            function (o) { return o.diagram.commandHandler.canRedo(); })
        );

      this.myDiagram.model.class = "go.GraphLinksModel";
      this.myDiagram.model.copiesArrays = true;
      this.myDiagram.model.copiesArrayObjects = true;
      this.myDiagram.model.linkFromPortIdProperty = "fromPort";
      this.myDiagram.model.linkToPortIdProperty = "toPort";
          
      // this.myDiagram.addDiagramListener("ObjectSingleClicked", function(e){
      //   var dataName = e.subject.part.data.name;
      //   if(dataName == 'Reader_ES') {
      //     this.configShow = 'reader_es';
      //   }else if(dataName == 'Reader_Hive') {
      //     this.configShow = 'reader_hive';
      //   }else if(dataName == 'Reader_MySQL') {
      //     this.configShow = 'reader_mysql';
      //   }else if(dataName == 'Reader_HDFS_TXT') {
      //     this.configShow = 'reader_txt';
      //   }else if(dataName == 'Reader_HDFS_JSON') {
      //   }else if(dataName == 'Writer_HDFS') {
      //   }else if(dataName == 'Writer_MySQL') {
      //   }else if(dataName == 'Writer_Hive') {
      //   }else if(dataName == 'Writer_ES') {
      //   }else if(dataName == 'RowProcessor_Count') {
      //   }else if(dataName == 'RowProcessor_Distinct') {
      //   }else if(dataName == 'RowProcessor_Sort') {
      //   }
      // })    
  },
  methods: {
    operate(attrs) {
      if(attrs == 'save') {
        console.log(JSON.parse(this.myDiagram.model.toJson()));
      }else if(attrs == 'scale') {
        if(this.numList == true) {
          this.numList = false;
        }else {
          this.numList = true;
        }
      }else if(attrs == 'narrow') {
        this.myDiagram.scale -= 0.1;
      }else if(attrs == 'enlarge') {
        this.myDiagram.scale += 0.1;
      }else if(attrs == 'delete') {
        this.myDiagram.commandHandler.deleteSelection();
      }else if(attrs == 'back') {
        this.myDiagram.undoManager.undo();
      }else if(attrs == 'forword') {
        this.myDiagram.undoManager.redo();
      }else if(attrs == 'reset') {
        if(confirm("您确定要清空画布吗？")){
          this.myDiagram.clear();
        }
      }
    },
    liNum(num) {
      if(num == 1.5) {
        this.myDiagram.scale = 1.5;
        this.scaleNum = '150%';
      }else if(num == 1.25) {
        this.myDiagram.scale = 1.25;
        this.scaleNum = '125%';
      }else if(num == 1) {
        this.myDiagram.scale = 1;
        this.scaleNum = '100%';
      }else if(num == 0.75) {
        this.myDiagram.scale = 0.75;
        this.scaleNum = '75%';
      }else if(num == 0.5) {
        this.myDiagram.scale = 0.5;
        this.scaleNum = '50%';
      }
    },
    toggle() {
      if(this.showFlag == true) {
        this.showFlag = false;
      }else {
        this.showFlag = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#canvasDiv {
  display: flex;
  background-color: #f1f3f7;
  border-bottom: 1px solid #e2e6ed;
  .canvasDiv {
    flex: 1;
    background-color: #fff;
    margin-left: 20px;
    margin-right: 20px;
    padding: 23px;
    height: 830px;
  #myDiagramDiv {
    height: 760px;
    background: url(../../assets/images/small/bg.png);
  }
  .toolbar {
    padding-bottom: 10px;
    position: relative;
    .tool-right {
      height: 38px;
      .tool-ul ul > li {
        float: left;
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .icons {
          padding: 10px 14px;
          width: 16px;
          height: 16px;
          cursor: pointer;
          transition: all 0.2s linear;
          &:hover {
            background-color: #f1f1f1;
          }
        }
        .save {
          background: url(../../assets/images/small/preservation.png) no-repeat center center;
        }
        .narrow {
          background: url(../../assets/images/small/shrink.png) no-repeat center center;
        }
        .enlarge {
          background: url(../../assets/images/small/magnify.png) no-repeat center center;
        }
        .back {
          background: url(../../assets/images/small/annul.png) no-repeat center center;
        }
        .forword {
          background: url(../../assets/images/small/withdraw.png) no-repeat center center;
        }
        .pigment {
          background: url(../../assets/images/small/pigment.png) no-repeat center center;
        }
        .delete {
          background: url(../../assets/images/small/delete.png) no-repeat center center;
        }
        .reset {
          background: url(../../assets/images/small/reset.png) no-repeat center center;
        }
        .line {
          width: 1px;
          height: 26px;
          background-color: #dddddd;
          margin: 5px 10px 0 10px;
        }
      }
      .tool-ul .scale-li {
        position: relative;
        cursor: pointer;
        color: #333333;
        &:hover {
          background-color: #f1f1f1;
        }
        .scale-num-list {
          position: absolute;
          top: 39px;
          left: -4px;
          background-color: #fdfdfd;
          border: 1px solid #f1f1f1;
          z-index: 999;
          li {
            width: 59px;
            height: 30px;
            line-height: 30px;
            padding-left: 12px;
            user-select: none;
            &:hover {
              background-color: #f1f1f1;
            }
          }
        }
      }
      .tool-ul .scale-num {
        padding: 10px 0 10px 10px;
        width: 40px;
        user-select: none;
      }
      .tool-ul .icons-down {
        width: 8px;
        height: 8px;
        background: url(../../assets/images/small/down-arror.png) no-repeat center center;
        padding: 10px;
        margin-left: -10px;
      }
    }
    .retract {
      padding: 9px 10px;
      cursor: pointer;
      position: absolute;
      top: 3px;
      right: 20px;
      .icon-retract {
        display: inline-block;
        width: 18px;
        height: 16px;
        background: url(../../assets/images/small/retract.png) no-repeat center center;
      }
    }
  }
}
}
</style>


