# 背景

cbi-charts是基于vue和echarts构建的图表库。在传统的echarts图表开发中，每开发一个图表都需要进行数据转换，修改复杂的配置项，导致开发周期缓慢、图表风格不统一、维护麻烦且周期长等问题。为了解决这个痛点，使用cbi-charts，制定好对于前后端都相对友好的数据格式，配置好简单的配置项，便可以生成各种图表。

### 示例

<vuep template="#simple-toggle"></vuep>

<script v-pre type="text/x-template" id="simple-toggle">
<template>
  <div>
    <button @click="changeType">切换图表类型</button>
    <ve-chart :data="chartData" :settings="chartSettings"></ve-chart>
  </div>
</template>

<script>
  export default {
    data () {
      this.typeArr = ['line', 'histogram', 'pie']
      this.index = 0
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1月1日', '访问用户': 1523 },
            { '日期': '1月2日', '访问用户': 1223 },
            { '日期': '1月3日', '访问用户': 2123 },
            { '日期': '1月4日', '访问用户': 4123 },
            { '日期': '1月5日', '访问用户': 3123 },
            { '日期': '1月6日', '访问用户': 7123 }
          ]
        },
        chartSettings: { type: this.typeArr[this.index] }
      }
    },
    methods: {
      changeType: function () {
        this.index++
        if (this.index >= this.typeArr.length) { this.index = 0 }
        this.chartSettings = { type: this.typeArr[this.index] }
      }
    }
  }
</script>
</script>
