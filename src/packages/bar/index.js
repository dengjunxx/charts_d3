import 'echarts/lib/chart/bar'
import { bar } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiBarChart',
  data () {
    this.chartHandler = bar
    return {}
  }
})
