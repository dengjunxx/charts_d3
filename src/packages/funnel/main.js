import { itemPoint } from '../../constants'
import { getFormated } from '../../utils'

function getFunnelTooltip (dataType, digit) {
  return {
    trigger: 'item',
    formatter (item) {
      let tpl = []
      tpl.push(itemPoint(item.color))
      tpl.push(`${item.name}: ${getFormated(item.data.realValue, dataType, digit)}`)
      return tpl.join('')
    }
  }
}

function getFunnelLegend (args) {
  const { data, legendName } = args
  return {
    data,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function getFunnelSeries (args) {
  const {
    dimension,
    measures,
    rows,
    sequence,
    ascending,
    label,
    labelLine,
    itemStyle,
    filterZero,
    useDefaultOrder
  } = args
  let series = { type: 'funnel' }
  let innerRows = rows.sort((a, b) => {
    return sequence.indexOf(a[dimension]) - sequence.indexOf(b[dimension])
  })

  if (filterZero) {
    innerRows = innerRows.filter(row => {
      return row[measures]
    })
  }

  let falseFunnel = false
  innerRows.some((row, index) => {
    if (index && row[measures] > innerRows[index - 1][measures]) {
      falseFunnel = true
      return true
    }
  })

  const step = 100 / innerRows.length

  if (falseFunnel && !useDefaultOrder) {
    series.data = innerRows.slice().reverse().map((row, index) => ({
      name: row[dimension],
      value: (index + 1) * step,
      realValue: row[measures]
    }))
  } else {
    series.data = innerRows.map(row => ({
      name: row[dimension],
      value: row[measures],
      realValue: row[measures]
    }))
  }

  if (ascending) series.sort = 'ascending'
  if (label) series.label = label
  if (labelLine) series.labelLine = labelLine
  if (itemStyle) series.itemStyle = itemStyle
  return series
}

export const funnel = (outerColumns, outerRows, settings, extra) => {
  const columns = outerColumns.slice()
  const rows = outerRows.slice()
  const {
    dataType = 'normal',
    dimension = columns[0],
    sequence = rows.map(row => row[dimension]),
    digit = 2,
    ascending,
    label,
    labelLine,
    legendName = {},
    itemStyle,
    filterZero,
    useDefaultOrder
  } = settings
  const { tooltipVisible, legendVisible } = extra
  let measures
  if (settings.measures) {
    measures = settings.measures
  } else {
    let measuresTemp = columns.slice()
    measuresTemp.splice(columns.indexOf(dimension), 1)
    measures = measuresTemp[0]
  }

  const tooltip = tooltipVisible && getFunnelTooltip(dataType, digit)
  const legend = legendVisible && getFunnelLegend({ data: sequence, legendName })
  const series = getFunnelSeries({
    dimension,
    measures,
    rows,
    sequence,
    ascending,
    label,
    labelLine,
    itemStyle,
    filterZero,
    useDefaultOrder
  })
  const options = { tooltip, legend, series }
  return options
}
