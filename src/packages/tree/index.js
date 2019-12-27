import 'echarts/lib/chart/tree'
import { tree } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiTreeChart',
  data () {
    this.chartHandler = tree
    return {}
  }
})
