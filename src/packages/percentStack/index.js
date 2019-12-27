
import 'echarts/lib/chart/bar'
import { percentStack } from '../bar/main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiPercentStackChart',
  data () {
    this.chartHandler = percentStack
    return {}
  }
})
