/*
 * 公共的extend配置项
 * */
export default {
  legend: {
    type: 'scroll',
    bottom: 'bottom',
  },
  // yAxis: {
  //   axisLine: {
  //     show: true,
  //     lineStyle: {
  //       color: '#999'
  //     }
  //   },
  //   axisTick: {
  //     show: true,
  //     lineStyle: {
  //       color: '#999'
  //     }
  //   }
  // },
  tooltip: {
    axisPointer: {
      //鼠标悬停，显示柱型阴影,可选为：'line' | 'shadow'
      type: 'shadow'
    },
  },
  grid: {
    left: '15',
    right: '35',
    top: '35',
    bottom: '35',
    containLabel: true
  },
  // series: {
  //这个不能写在这里，构建后会报"需指定series的type"的警告;
  //   barMaxWidth: 30
  // }
}
