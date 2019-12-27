import 'echarts-amap'
import { amap } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiAmapChart',
  data () {
    this.chartHandler = amap
    return {}
  }
})
