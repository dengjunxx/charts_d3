import 'echarts/extension/bmap/bmap'
import { bmap } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'CbiBmapChart',
  data () {
    this.chartHandler = bmap
    return {}
  }
})
