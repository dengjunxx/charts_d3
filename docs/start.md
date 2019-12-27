

# 开始使用

### npm安装

```
暂不支持npm安装的方式
```

### 完整引入
-----

```js
// main.js
import Vue from 'vue'
import CbiCharts from 'cbi-charts.min.js'
import 'cbi-charts.min.css'

Vue.use(CbiCharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 按需引入
-----

cbi-charts的每种图表组件，单独打包到了lib文件夹了

按需引入对应关系如下:

| 图表 | 组件 |
| --- | --- |
| 公共JS | cbi-charts.common.js |
| 公共CSS | cbi-charts.min.css |
| 全部图表 | charts.min.js |
| 折线图 | CbiLineChart.js |
| 条形图(横向) | CbiBarChart.js |
| 柱状图(纵向) | CbiHistogramChart.js |
| 饼图 | CbiPieChart.js |
| 环图 | CbiRingChart.js |
| 漏斗图 | CbiFunnelChart.js |
| 瀑布图 | CbiWaterfallChart.js |
| 雷达图 | CbiRadarChart.js |
| 地图 | CbiMapChart.js |
| 桑基图 | CbiSankeyChart.js |
| 散点图 | CbiScatterChart.js |
| K线图 | CbiCandleChart.js |
| 仪表盘 | CbiGaugeChart.js |
| 树图 | CbiTreeChart.js |
| 百度地图 | CbiBmapChart.js |
| 高德地图 | CbiAmapChart.js |

使用时，可以直接将单个图表引入到项目中
```js
import 'cbi-charts.common.js'          // 公共chuck，引入单个图表前需引入公共包
import CbiBarChart from 'CbiBarChart'  // 单个图表chuck
import 'cbi-charts.min.css'            // 引入样式

Vue.component(CbiBarChart.name, CbiBarChart)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 创建图表

