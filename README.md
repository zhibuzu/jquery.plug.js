# jquery.plug.js

custom plugs extensions from jquery

## jquery.checkall.js
******
基于jquery的全选checkbox插件

**usage:**
```
$master.checkAll($slaves, options);
```

**jquery object:**
| 参数         | 说明           |
| ----------- |:-------------:| 
| $master     | 主checkbox对象 | 
| $slaves     | 附属checkbox组 | 

**options**

|参数 | 说明|
| ------|:-------:|
| onClick | 主checkbox 或 附属checkbox点击事件的回调函数|
|onMasterClick|主checkbox点击事件的回调函数|
|onSlavesClick|附属checkbox点击事件的回调函数|


- usage demo1
```
$("#checkall").checkAll("[name='checkitem']");
```

- usage demo2
```
$("#checkall").checkAll($("[name='checkitem']"));
```

- usage demo3
```
$("#checkall").checkAll("[name='checkitem']", {onClick: function (checkedSlaves) {
    // checkedSlaves: 返回已选中的附属checkbox组
}});
```

**在线运行演示**

[codepen run js](http://codepen.io/hujesse/pen/egdrWr)