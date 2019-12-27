import CbiBar from '../bar'
import CbiHistogram from '../histogram'
import CbiPercentStack from '../percentStack'
import CbiLine from '../line'
import CbiPie from '../pie'
import CbiRing from '../ring'
import CbiWaterfall from '../waterfall'
import CbiFunnel from '../funnel'
import CbiRadar from '../radar'
import CbiChart from '../chart'
import CbiMap from '../map'
// import CbiBmap from '../bmap'
// import CbiAmap from '../amap'
import CbiSankey from '../sankey'
// import CbiHeatmap from '../heatmap'
import CbiScatter from '../scatter'
import CbiCandle from '../candle'
import CbiGauge from '../gauge'
import CbiTree from '../tree'
import CbiLiquidfill from '../liquidfill'
import CbiWordcloud from '../wordcloud'

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
  // CbiBmap,
  // CbiAmap,
  CbiSankey,
  // CbiHeatmap,
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

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
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
  // CbiBmap,
  // CbiAmap,
  CbiSankey,
  CbiScatter,
  CbiCandle,
  CbiGauge,
  CbiTree,
  CbiLiquidfill,
  CbiWordcloud,
  install
}
