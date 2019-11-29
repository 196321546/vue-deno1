
  
{
  // 创建上下文菜单按钮的函数:
  function makeButton(text, action, visiblePredicate) {
    return $GO("ContextMenuButton",
      $GO(go.TextBlock, text), { click: action },
      visiblePredicate ? new go.Binding("visible", "", function (o, e) { return o.diagram ? visiblePredicate(o, e) : false; }).ofObject() : {});
  }

  var nodeMenu =  
    $GO("ContextMenu",
      $GO(go.Shape,
        { strokeWidth: 0, height: 0, stretch: go.GraphObject.Horizontal }),
      makeButton("添加入口",
        function (e, obj) { addPort("top"); }),
      makeButton("删除端口",
        function (e, obj) { removePort(obj.part.adornedObject); }),
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

  myDiagram.nodeTemplate =
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

  myDiagram.linkTemplate =
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

  myDiagram.contextMenu =
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

  //拖拽列表区域
  var myPalette = $GO(go.Palette, "myPaletteDiv", {
    autoScrollRegion: 0,  //拖拽区域，防止出现滚动条
    hasVerticalScrollbar: false,
    hasHorizontalScrollbar: false
  });

  //拖拽列表区域
  var myPalette2 = $GO(go.Palette, "myPaletteDiv2", {
    autoScrollRegion: 0,  //拖拽区域，防止出现滚动条
    hasVerticalScrollbar: false,
    hasHorizontalScrollbar: false
  });

  //拖拽列表区域
  var myPalette3 = $GO(go.Palette, "myPaletteDiv3", {
    autoScrollRegion: 0,  //拖拽区域，防止出现滚动条
    hasVerticalScrollbar: false,
    hasHorizontalScrollbar: false
  });

  myPalette.nodeTemplate =
    $GO(go.Node, "Horizontal",
      {
        selectionAdorned: false,  //去掉装饰
      },
      // $GO(go.Shape,
      //     { width: 14, height: 14, fill: "white" },
      //     new go.Binding("fill", "color")),
      $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
        new go.Binding("text", "value"))
    );

  myPalette.model.nodeDataArray = [
    {
      key: "11",
      name: "Reader_ES",
      value: "Reader_ES",
      topArray: [],
      bottomArray: [{ "portColor": "#0080ff", "portId": "bottom" }],  //portId 节点上端口对象的标识符  空字符串表示唯一端口
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

  myPalette2.nodeTemplate =
    $GO(go.Node, "Horizontal",
      {
        selectionAdorned: false,  //去掉装饰
      },
      $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
        new go.Binding("text", "value"))
    );

  myPalette2.model.nodeDataArray = [
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

  myPalette3.nodeTemplate =
    $GO(go.Node, "Horizontal",
      {
        selectionAdorned: false  
      },
      $GO(go.TextBlock, { stroke: "#333", font: "normal 14px sans-serif" },
        new go.Binding("text", "value"))
    );

  myPalette3.model.nodeDataArray = [
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

  myDiagram.model.class = "go.GraphLinksModel";
  myDiagram.model.copiesArrays = true;
  myDiagram.model.copiesArrayObjects = true;
  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";




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

// 添加端口
function addPort(side) {
  myDiagram.startTransaction("addPort");
  myDiagram.selection.each(function (node) {
    // skip any selected Links
    if (!(node instanceof go.Node)) return;
    // compute the next available index number for the side
    var i = 0;
    while (node.findPort(side + i.toString()) !== node) i++;
    // now this new port name is unique within the whole Node because of the side prefix
    var name = side + i.toString();
    // get the Array of port data to be modified
    var arr = node.data[side + "Array"];
    if (arr) {
      // create a new port data object
      var newportdata = {
        portId: name,
        portColor: '#0080ff'
        // portColor: go.Brush.randomColor()
      };
      // and add it to the Array of port data
      myDiagram.model.insertArrayItem(arr, -1, newportdata);
    }
  });
  myDiagram.commitTransaction("addPort");
}
// 删除端口
function removePort(port) {
  myDiagram.startTransaction("removePort");
  var pid = port.portId;
  var arr = port.panel.itemArray;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].portId === pid) {
      myDiagram.model.removeArrayItem(arr, i);
      break;
    }
  }
  myDiagram.commitTransaction("removePort");
}
// 移除所有端口
function removeAll(port) {
  myDiagram.startTransaction("removePorts");
  var nodedata = port.part.data;
  var side = port._side;  // there are four property names, all ending in "Array"
  myDiagram.model.setDataProperty(nodedata, side + "Array", []);  // an empty Array
  myDiagram.commitTransaction("removePorts");
}