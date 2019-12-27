# 折线图

#### 示例

<vuep template="#api-test"></vuep>

<script type="text/x-template" id="api-test">
<template>
  <div>
    <span style="color: #409eff; font-weight: bold;">URL:</span>
    <input style="height: 25px;" placeholder="请输入api接口地址" size="medium" v-model="requestUrl"/>
     <el-select size="mini" style="width: 100px;" v-model="methodsTypeValue" placeholder="请选择">
            <el-option
              style="color: #000;"
              v-for="item in methodsTypeArr"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
     </el-select>
    <el-button size="mini" type="success" @click="request">请求</el-button>
    <el-select size="mini" style="width: 100px; float: right;" @change="changeChartType(chartTypeValue)" v-model="chartTypeValue" placeholder="请选择">
        <el-option
          v-for="item in typeArr"
          :key="item"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    <cbi-chart :settings="chartSettings" :data="chartData"></cbi-chart>
  </div>
</template>

<script>
  export default {
    data() {
      this.chartType='line'
      return {
        chartTypeValue: 'line',
        methodsTypeValue: 'GET',
        typeArr:[
          {
            value: 'line',
            label: '折线图'
          },
          {
            value: 'histogram',
            label: '柱状图'
          },
          {
             value: 'pie',
             label: '饼图'
          },
        ],
        methodsTypeArr:['GET', 'POST'],
        chartSettings: { type: this.chartType },
        requestUrl: 'http://',
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
    methods: {
      request(){
        if (this.requestUrl !== 'http://' && this.requestUrl) {
          if (this.methodsTypeValue === 'GET') {
             axios.get(this.requestUrl).then(res => {
                    console.log(res)
                    this.requestUrl = res.data.authorizations_url
              })
          } else if(this.methodsTypeValue === 'POST') {
              axios.post(this.requestUrl).then(res => {
                    console.log(res)
                    this.requestUrl = res.data.authorizations_url
              })
          }
        } else {
            this.$message.error('请填写正确的url')
        }
      },
      changeChartType(value){
        this.chartSettings.type = value
      }
    }
  }
</script>
</script>


#### 显示度量数值

<vuep template="#show-measures-value"></vuep>

<script v-pre type="text/x-template" id="show-measures-value">
<template>
  <cbi-line-chart :data="chartData" :extend="extend"></cbi-line-chart>
</template>

<script>
  export default {
    data () {
      this.extend = {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置横轴为连续的数值轴

<vuep template="#xAxis-type-value"></vuep>

<script v-pre type="text/x-template" id="xAxis-type-value">
<template>
  <cbi-line-chart :data="chartData" :settings="chartSettings"></cbi-line-chart>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: 'value'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '5', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '10', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '11', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### 设置横轴为连续的时间轴

<vuep template="#xAxis-type-date"></vuep>

<script v-pre type="text/x-template" id="xAxis-type-date">
<template>
  <cbi-line-chart :data="chartData" :settings="chartSettings"></cbi-line-chart>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        xAxisType: 'time'
      }
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '2018-01-01', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2018-01-02', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '2018-01-03', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '2018-01-05', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '2018-01-10', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '2018-01-20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | array | 默认columns第一项为维度 |
| measures | 度量 | array | 默认columns第二项起为度量 |
| xAxisType | 横轴的数据类型 | string | 可选值: category, value, time, log |
| yAxisType | 左右坐标轴数据类型 | array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | array | - |
| axisSite | 度量所在的轴 | object | 默认不在right轴的度量都在left轴 |
| stack | 堆叠选项 | object | - |
| area | 是否展示为面积图 | boolean | 默认为false |
| scale | 是否是脱离 0 值比例 | array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | array | - |
| max | 左右坐标轴最大值 | array | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置度量的别名，同时作用于提示框和图例 | object | - |
| legendName | 设置图表上方图例的别名 | object | - |

> 备注1. axisSite 可以设置 left 和 right，例如示例所示 `axisSite: { right: ['占比'] }` 即将占比的数据置于右轴上。

> 备注2. stack 用于将两数据堆叠起来，例如实例中所示`stack: { '销售额': ['成本', '利润'] }` 即将'成本', '利润'相应的数据堆叠在一起。

> 备注3. min和max的值可以直接设置为数字，例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`，此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。
