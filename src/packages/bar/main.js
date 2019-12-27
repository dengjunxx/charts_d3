import {itemPoint,percentMaker} from '../../constants'
import {getFormated, getStackMap, getPercentStackTooltipFormated} from '../../utils'
import {set, get, cloneDeep} from 'utils-lite'
// default opacity of bar while dim-axis type is 'value'
const VALUE_AXIS_OPACITY = 0.5

function getBarDimAxis(args) {
  const {innerRows, dimAxisName, dimension, axisVisible, dimAxisType, dims} = args
  return dimension.map(item => ({
    type: 'category',
    name: dimAxisName,
    nameLocation: 'middle',
    nameGap: 22,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#999'
      }
    },
    data: dimAxisType === 'value'
      ? getValueAxisData(dims)
      : innerRows.map(row => row[item]),
    axisLabel: {
      formatter (v) {
        return String(v)
      }
    },
    show: axisVisible
  }))
}

function getValueAxisData(dims) {
  const max = Math.max.apply(null, dims)
  const min = Math.min.apply(null, dims)
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}

function getBarMeaAxis(args) {
  const {
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max,
    isPercentStack,
    axisSite
  } = args
  const meaAxisBase = {
    type: 'value',
    // axisTick: {
    //   show: false
    // },
    splitLine: {
      show: axisSite.right || axisSite.top ? false : true,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#999'
      }
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#999'
      }
    },
    show: axisVisible
  };
  let meaAxis = [];
  let cont = axisSite.right || axisSite.top ? 2 : 1;
  for (let i = 0; i < cont; i++) {
    if (meaAxisType[i]) {
      meaAxis[i] = Object.assign({}, meaAxisBase, {
        axisLabel: {
          formatter (val) {
            if (isPercentStack && i === 0) {
              return getFormated(val / 100, meaAxisType[i], digit)
            } else {
              return getFormated(val, meaAxisType[i], digit)
            }
          }
        }
      })
    } else {
      meaAxis[i] = Object.assign({}, meaAxisBase)
    }
    meaAxis[i].name = meaAxisName[i] || ''
    meaAxis[i].scale = scale[i] || false
    meaAxis[i].min = min[i] || null
    meaAxis[i].max = max[i] || null
  }
  return meaAxis
}

function getBarTooltip(args) {
  const {axisSite, isHistogram, meaAxisType, digit, labelMap, percentShow} = args
  let secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  if (labelMap) {
    secondAxis = secondAxis.map(item => {
      return labelMap[item] === undefined ? item : labelMap[item]
    })
  }
  return {
    trigger: 'axis',
    // formatter (items) {
    //   let tpl = []
    //   let sum;
    //   if (percentShow) {
    //     sum = items.reduce(function (pre, cur) {
    //       return pre + cur.value
    //     }, 0)
    //   }
    //   tpl.push(`${items[0].name}<br>`)
    //   items.forEach(item => {
    //     let percent;
    //     if (percentShow) percent = ((item.value / sum) * 100).toFixed(0)
    //     const seriesName = item.seriesName
    //     const type = ~secondAxis.indexOf(seriesName)
    //       ? meaAxisType[1]
    //       : meaAxisType[0]
    //     tpl.push(itemPoint(item.color))
    //     tpl.push(`${seriesName}: `)
    //     tpl.push(getFormated(item.value, type, digit))
    //     if (percentShow) tpl.push(`(${percent}%)`)
    //     tpl.push('<br>')
    //   })
    //   return tpl.join('')
    // }
    formatter (items) {
      let tpl = []
      let sum;
      if (percentShow) {
        sum = items.reduce(function (pre, cur) {
          //有可能少某一项，所以求和时跳过某一项
          if(cur.value){
            return pre + cur.value
          }else {
            return pre + 0
          }
        }, 0)
      }
      tpl.push(`${items[0].name}<br>`)
      items.forEach(item => {
        let percent;
        if (percentShow) percent = ((item.value / sum) * 100).toFixed(2)
        // if (percentShow) percent = Math.round(((item.value / sum) * 100))
        const seriesName = item.seriesName
        const type = ~secondAxis.indexOf(seriesName)
          ? meaAxisType[1]
          : meaAxisType[0]
        tpl.push(`
                  <div style="min-width: 50px;overflow: hidden">
                      <span style="float: left">${itemPoint(item.color)}${seriesName}：</span>
                      <span style="float: right">${getFormated(item.value, type, digit)}${percentMaker(percentShow,percent)}</span>
                  </div>
                  `)
      })
      return tpl.join('')
    }
  }
}

function getPercentStackTooltip(args) {
  const {axisSite, isHistogram, meaAxisType, digit, labelMap, percentShow, innerRows, measures} = args
  let secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  if (labelMap) {
    secondAxis = secondAxis.map(item => {
      return labelMap[item] === undefined ? item : labelMap[item]
    })
  }
  const seriesTemp = {}
  measures.forEach(item => {
    seriesTemp[item] = []
  })
  innerRows.forEach(row => {
    measures.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  let arr = [];
  for (let key in seriesTemp) {
    arr.push(seriesTemp[key])
  }
  return {
    trigger: 'axis',
    // formatter (items) {
    //   let tpl = []
    //   let sum;
    //   if (percentShow) {
    //     sum = items.reduce(function (pre, cur) {
    //       return pre + cur.value
    //     }, 0)
    //   }
    //   tpl.push(`${items[0].name}<br>`)
    //   items.forEach(item => {
    //     let percent;
    //     if (percentShow) percent = ((item.value / sum) * 100).toFixed(0)
    //     const seriesName = item.seriesName
    //     const type = ~secondAxis.indexOf(seriesName)
    //       ? meaAxisType[1]
    //       : meaAxisType[0]
    //     tpl.push(itemPoint(item.color))
    //     tpl.push(`${seriesName}: `)
    //     tpl.push(getPercentStackTooltipFormated(arr[item.componentIndex][item.dataIndex], type, digit))
    //     tpl.push(`(${item.value}%)`)
    //     // item.value==="NaN"?tpl.push(`(0%)`):tpl.push(`(${item.value}%)`)
    //     tpl.push('<br>')
    //   })
    //   return tpl.join('')
    // }
    formatter (items) {
      let tpl = []
      let sum;
      if (percentShow) {
        sum = items.reduce(function (pre, cur) {
          return pre + cur.value
        }, 0)
      }
      tpl.push(`${items[0].name}<br>`)
      items.forEach(item => {
        let percent;
        if (percentShow) percent = ((item.value / sum) * 100).toFixed(0)
        const seriesName = item.seriesName
        const type = ~secondAxis.indexOf(seriesName)
          ? meaAxisType[1]
          : meaAxisType[0]
        tpl.push(`
                  <div style="min-width: 50px;overflow: hidden">
                      <span style="float: left">${itemPoint(item.color)}${seriesName}：</span>
                      <span style="float: right">${getPercentStackTooltipFormated(arr[item.componentIndex][item.dataIndex], type, digit)}${percentMaker(true,item.value)}</span>
                  </div>
                  `)
      })
      return tpl.join('')
    }
  }
}

function getValueData(seriesTemp, dims) {
  const max = Math.max.apply(null, dims)
  const min = Math.min.apply(null, dims)
  const result = []
  for (let i = min; i <= max; i++) {
    const index = dims.indexOf(i)
    if (~index) {
      result.push(seriesTemp[index])
    } else {
      result.push(null)
    }
  }
  return result
}

function getBarSeries(args) {
  const {
    innerRows,
    measures,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine = [],
    dimAxisType,
    barGap,
    opacity,
    dims
  } = args
  let series = []
  const seriesTemp = {}
  const secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  const secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  const stackMap = stack && getStackMap(stack)
  measures.forEach(item => {
    seriesTemp[item] = []
  })
  innerRows.forEach(row => {
    measures.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  series = Object.keys(seriesTemp).map((item, index) => {
    seriesTemp[item]=seriesTemp[item].map(item1=>{
      //把非数字类型的转化为数字类型
      return parseFloat(item1)
    })
    const data = dimAxisType === 'value'
      ? getValueData(seriesTemp[item], dims)
      : seriesTemp[item]
    const seriesItem = {
      name: labelMap[item] != null ? labelMap[item] : item,
      type: ~showLine.indexOf(item) ? 'line' : 'bar',
      barMaxWidth: 30,
      data,
      [secondDimAxisIndex]: ~secondAxis.indexOf(item) ? '1' : '0'
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    if (label) seriesItem.label = label
    if (itemStyle) seriesItem.itemStyle = itemStyle

    let itemOpacity = opacity || get(seriesItem, 'itemStyle.normal.opacity')
    if (dimAxisType === 'value') {
      seriesItem.barGap = barGap
      seriesItem.barCategoryGap = '1%'
      if (itemOpacity == null) itemOpacity = VALUE_AXIS_OPACITY
    }

    if (itemOpacity != null) {
      set(seriesItem, 'itemStyle.normal.opacity', itemOpacity)
    }
    return seriesItem
  })

  return series.length ? series : false
}

function getPercentStackSeries(args) {
  const {
    innerRows,
    measures,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine = [],
    dimAxisType,
    barGap,
    opacity,
    dims
  } = args
  let series = []
  const seriesTemp = {}
  const secondAxis = isHistogram
    ? axisSite.right || []
    : axisSite.top || []
  const secondDimAxisIndex = isHistogram ? 'yAxisIndex' : 'xAxisIndex'
  const stackMap = stack && getStackMap(stack)
  measures.forEach(item => {
    seriesTemp[item] = []
  })
  innerRows.forEach(row => {
    measures.forEach(item => {
      seriesTemp[item].push(row[item])
    })
  })
  function getSum(data, index) {
    let arr = []
    data.forEach((item) => {
      if(parseFloat(item[index])){
        arr.push(parseFloat(item[index]))
      }
    })
    return arr.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }

  function getPercentData(data, arr) {
    return data.map((item, index) => {
      if(Math.floor((parseFloat(item) / getSum(arr, index)) * 10000) / 100){
        return (Math.floor((parseFloat(item) / getSum(arr, index)) * 10000) / 100).toFixed(2)
      }else {
        return 0
      }
    })
  }

  let arr = [];
  for (let key in seriesTemp) {
    arr.push(seriesTemp[key])
  }
  series = Object.keys(seriesTemp).map((item, index) => {
    const data = dimAxisType === 'value'
      ? getValueData(seriesTemp[item], dims)
      : seriesTemp[item]
    const seriesItem = {
      name: labelMap[item] != null ? labelMap[item] : item,
      type: ~showLine.indexOf(item) ? 'line' : 'bar',
      data: getPercentData(data, arr),
      barMaxWidth: 30,
      stack: '广告',
      label: {
        normal: {
          //在柱子上显示原数据，默认不展示
          formatter: function (params) {
            return arr[index][params.dataIndex];
          },
          // show: true,
          // position: 'inside'
        }
      },
      [secondDimAxisIndex]: ~secondAxis.indexOf(item) ? '1' : '0'
    }

    if (stack && stackMap[item]) seriesItem.stack = stackMap[item]

    if (label) seriesItem.label = label
    if (itemStyle) seriesItem.itemStyle = itemStyle

    let itemOpacity = opacity || get(seriesItem, 'itemStyle.normal.opacity')
    if (dimAxisType === 'value') {
      seriesItem.barGap = barGap
      seriesItem.barCategoryGap = '1%'
      if (itemOpacity == null) itemOpacity = VALUE_AXIS_OPACITY
    }

    if (itemOpacity != null) {
      set(seriesItem, 'itemStyle.normal.opacity', itemOpacity)
    }
    return seriesItem
  })

  return series.length ? series : false
}

function getLegend(args) {
  const {measures, labelMap, legendName} = args
  if (!legendName && !labelMap) return {data: measures}
  const data = labelMap
    ? measures.map(item => (labelMap[item] == null ? item : labelMap[item]))
    : measures
  return {
    data,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function getDims(rows, dimension) {
  return rows.map(row => row[dimension[0]])
}

export const bar = (columns, rows, settings, extra) => {
  const innerRows = cloneDeep(rows)
  const {
    axisSite = {},
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2,
    dataOrder = false,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    legendName = {},
    labelMap = {},
    label,
    itemStyle,
    showLine,
    barGap = '-100%',
    opacity,
    //是否显示百分比
    percentShow = false,
  } = settings
  const {tooltipVisible, legendVisible} = extra
  let measures = columns.slice()
  if (axisSite.top && axisSite.bottom) {
    measures = axisSite.top.concat(axisSite.bottom)
  } else if (axisSite.bottom && !axisSite.right) {
    measures = axisSite.bottom
  } else if (settings.measures) {
    measures = settings.measures
  } else {
    measures.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.xAxisType || ['normal', 'normal']
  const dimAxisType = settings.yAxisType || 'category'
  const meaAxisName = settings.xAxisName || []
  const dimAxisName = settings.yAxisName || ''
  const isHistogram = false

  if (dataOrder) {
    const {label, order} = dataOrder
    if (!label || !order) {
      console.warn('Need to provide name and order parameters')
    } else {
      innerRows.sort((a, b) => {
        if (order === 'desc') {
          return a[label] - b[label]
        } else {
          return b[label] - a[label]
        }
      })
    }
  }
  const dims = getDims(innerRows, dimension)

  const legend = legendVisible && getLegend({measures, labelMap, legendName})
  const yAxis = getBarDimAxis({
    innerRows,
    dimAxisName,
    dimension,
    axisVisible,
    dimAxisType,
    dims
  })
  const xAxis = getBarMeaAxis({
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max,
    axisSite
  })
  const series = getBarSeries({
    innerRows,
    measures,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine,
    dimAxisType,
    dimension,
    barGap,
    opacity,
    dims
  })
  const tooltipParams = {axisSite, isHistogram, meaAxisType, digit, labelMap, percentShow}
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = {legend, yAxis, series, xAxis, tooltip}
  return options
}

export const histogram = (columns, rows, settings, status) => {
  const innerRows = cloneDeep(rows)
  const {
    axisSite = {},
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2,
    dataOrder = false,
    //5.31发现问题，此处默认如果设置成[true,true],堆叠图会有问题
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    labelMap = {},
    legendName = {},
    label,
    itemStyle,
    showLine,
    barGap = '-100%',
    opacity,
    percentShow = false
  } = settings

  if (dataOrder) {
    const {label, order} = dataOrder
    if (!label || !order) {
      console.warn('Need to provide name and order parameters')
    } else {
      innerRows.sort((a, b) => {
        if (order === 'desc') {
          return a[label] - b[label]
        } else {
          return b[label] - a[label]
        }
      })
    }
  }

  const {tooltipVisible, legendVisible} = status
  let measures = columns.slice()
  if (axisSite.left && axisSite.right) {
    measures = axisSite.left.concat(axisSite.right)
  } else if (axisSite.left && !axisSite.right) {
    measures = axisSite.left
  } else if (settings.measures) {
    measures = settings.measures
  } else {
    measures.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.yAxisType || ['normal', 'normal']
  const dimAxisType = settings.xAxisType || 'category'
  const meaAxisName = settings.yAxisName || []
  const dimAxisName = settings.xAxisName || ''
  const isHistogram = true
  const dims = getDims(innerRows, dimension)

  const legend = legendVisible && getLegend({measures, labelMap, legendName})
  const xAxis = getBarDimAxis({
    innerRows,
    dimAxisName,
    dimension,
    axisVisible,
    dimAxisType,
    dims
  })
  const yAxis = getBarMeaAxis({
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max,
    axisSite,//5.28新增，目的是判断是否显示双y轴
  });
  const series = getBarSeries({
    innerRows,
    measures,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine,
    dimAxisType,
    dimension,
    barGap,
    opacity,
    dims
  })
  const tooltipParams = {axisSite, isHistogram, meaAxisType, digit, labelMap, percentShow}
  const tooltip = tooltipVisible && getBarTooltip(tooltipParams)
  const options = {legend, yAxis, series, xAxis, tooltip}
  return options
}

export const percentStack = (columns, rows, settings, status) => {
  const innerRows = cloneDeep(rows)
  const {
    axisSite = {},
    dimension = [columns[0]],
    stack = {},
    axisVisible = true,
    digit = 2,
    dataOrder = false,
    scale = [false, false],
    min = [null, null],
    max = [null, null],
    labelMap = {},
    legendName = {},
    label,
    itemStyle,
    showLine,
    barGap = '-100%',
    opacity,
    percentShow = false
  } = settings

  if (dataOrder) {
    const {label, order} = dataOrder
    if (!label || !order) {
      console.warn('Need to provide name and order parameters')
    } else {
      innerRows.sort((a, b) => {
        if (order === 'desc') {
          return a[label] - b[label]
        } else {
          return b[label] - a[label]
        }
      })
    }
  }

  const {tooltipVisible, legendVisible} = status
  let measures = columns.slice()
  if (axisSite.left && axisSite.right) {
    measures = axisSite.left.concat(axisSite.right)
  } else if (axisSite.left && !axisSite.right) {
    measures = axisSite.left
  } else if (settings.measures) {
    measures = settings.measures
  } else {
    measures.splice(columns.indexOf(dimension[0]), 1)
  }
  const meaAxisType = settings.yAxisType || ['percent', 'normal']
  const dimAxisType = settings.xAxisType || 'category'
  const meaAxisName = settings.yAxisName || []
  const dimAxisName = settings.xAxisName || ''
  const isHistogram = true
  const dims = getDims(innerRows, dimension)

  const legend = legendVisible && getLegend({measures, labelMap, legendName})
  const xAxis = getBarDimAxis({
    innerRows,
    dimAxisName,
    dimension,
    axisVisible,
    dimAxisType,
    dims
  })
  const yAxis = getBarMeaAxis({
    meaAxisName,
    meaAxisType,
    axisVisible,
    digit,
    scale,
    min,
    max,
    axisSite,
    isPercentStack: true
  })
  const series = getPercentStackSeries({
    innerRows,
    measures,
    stack,
    axisSite,
    isHistogram,
    labelMap,
    itemStyle,
    label,
    showLine,
    dimAxisType,
    dimension,
    barGap,
    opacity,
    dims
  })
  const tooltipParams = {axisSite, isHistogram, meaAxisType, digit, labelMap, percentShow, innerRows, measures}
  const tooltip = tooltipVisible && getPercentStackTooltip(tooltipParams)
  const options = {legend, yAxis, series, xAxis, tooltip}
  return options
};

/*5.28
 * 百分比堆叠图默认左轴显示的百分比,不用另外设置yType为percent
 * 线图，柱图，条形图默认显示网格线，但如果设置了axisSite的right或top的话，不显示
 * 线图，柱图，条形图默认显示X轴线，且轴刻度颜色默认为#999
 * 6.20numerify KMB改为大写K,B
 * */
