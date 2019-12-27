import 'echarts/lib/chart/sankey'
import { sankey } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiSankeyChart',
  data () {
    this.chartHandler = sankey
    return {}
  }
})
