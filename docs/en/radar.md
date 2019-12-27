# Radar

#### Example

<vuep template="#simple-radar"></vuep>

<script v-pre type="text/x-template" id="simple-radar">
<template>
  <ve-radar :data="chartData"></ve-radar>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### set dimension and measures

<vuep template="#set-measures-dimension"></vuep>

<script v-pre type="text/x-template" id="set-measures-dimension">
<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: ['date'],
        measures: ['cost', 'profit', 'growthRate'],
        dataType: { 'growthRate': 'percent' }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### measures alias

<vuep template="#change-measures-name"></vuep>

<script v-pre type="text/x-template" id="change-measures-name">
<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        labelMap: {
          'date': 'date',
          'cost': 'sales-1',
          'profit': 'sales-2',
          'growthRate': 'percent',
          'people': 'other'
        }
      }
      return {
        chartData: {
          columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
          rows: [
            { 'date': '01/01', 'cost': 1523, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/02', 'cost': 1223, 'profit': 1523, 'growthRate': 0.345, 'people': 100 },
            { 'date': '01/03', 'cost': 2123, 'profit': 1523, 'growthRate': 0.7, 'people': 100 },
            { 'date': '01/04', 'cost': 4123, 'profit': 1523, 'growthRate': 0.31, 'people': 100 },
            { 'date': '01/05', 'cost': 3123, 'profit': 1523, 'growthRate': 0.12, 'people': 100 },
            { 'date': '01/06', 'cost': 7123, 'profit': 1523, 'growthRate': 0.65, 'people': 100 }
          ]
        }
      }
    }
  }
</script>
</script>

#### settings

| attribute | description | type | remark |
| --- | --- | --- | --- |
| dimension | dimension of chart | string | default `columns[0]` |
| measures | measures of chart | array | defaut `[columns[1] ~ columns[columns.length - 1]]` |
| dataType | data type of measures | object | `'KMB'`, `'normal'`, `'percent'` |
| digit | digit of percent type data | number | default `2` |
| label | label of chart | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar.label) |
| itemStyle | item style of the inflection point of the lines | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar.itemStyle) |
| lineStyle | line style | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar.lineStyle) |
| areaStyle | area filling style | object | content reference [docs](http://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar.areaStyle)  |
