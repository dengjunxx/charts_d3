import CbiBar from './packages/bar'
import CbiHistogram from './packages/histogram'
import CbiPercentStack from './packages/percentStack'
import CbiLine from './packages/line'
import CbiPie from './packages/pie'
import CbiRing from './packages/ring'
import CbiWaterfall from './packages/waterfall'
import CbiFunnel from './packages/funnel'
import CbiRadar from './packages/radar'
import CbiChart from './packages/chart'
import CbiMap from './packages/map'
import CbiBmap from './packages/bmap'
import CbiAmap from './packages/amap'
import CbiSankey from './packages/sankey'
import CbiHeatmap from './packages/heatmap'
import CbiScatter from './packages/scatter'
import CbiCandle from './packages/candle'
import CbiGauge from './packages/gauge'
import CbiTree from './packages/tree'
import CbiLiquidfill from './packages/liquidfill'
import CbiWordcloud from './packages/wordcloud'

const components = [
  CbiBar,
  CbiHistogram,
  CbiPercentStack,
  CbiLine,
  CbiPie,
  CbiRing,
  CbiWaterfall,
  CbiFunnel,
  CbiRadar,
  CbiChart,
  CbiMap,
  CbiBmap,
  CbiAmap,
  CbiSankey,
  CbiHeatmap,
  CbiScatter,
  CbiCandle,
  CbiGauge,
  CbiTree,
  CbiLiquidfill,
  CbiWordcloud,
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  CbiBar,
  CbiHistogram,
  CbiPercentStack,
  CbiRing,
  CbiLine,
  CbiPie,
  CbiWaterfall,
  CbiFunnel,
  CbiRadar,
  CbiChart,
  CbiMap,
  CbiBmap,
  CbiAmap,
  CbiSankey,
  CbiHeatmap,
  CbiScatter,
  CbiCandle,
  CbiGauge,
  CbiTree,
  CbiLiquidfill,
  CbiWordcloud,
  install
}
