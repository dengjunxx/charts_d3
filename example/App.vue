<template>
  <div id="app">
    <div class="scatter-box">
      <div class="scatterExample1" style="height: 60vh"></div>
      <!--<div class="scatterExample2" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample3" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample4" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample5" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample6" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample7" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample8" style="height: 40vh;width: 30%"></div>-->
      <!--<div class="scatterExample9" style="height: 40vh;width: 30%"></div>-->
    </div>
    <div class="myMenu" v-show="myMenuIsShow" :style="{'top':myMenuTop+'px','left':myMenuLeft+'px'}"
         v-clickoutside="handleClickOutSide">
      <div class="preTags-box">
        <span class="title">预设标签</span>
        <div v-for="(item,index) in tags.preTags" :key="index" class="checkbox-item">
          <input
            @change="handleChecked"
            type="checkbox" :name="item.label" :value="item.label" v-model="item.isCheck"/>{{item.label}}
        </div>
      </div>
      <div class="selfTags-box">
        <span class="title">自定义标签</span>
        <div v-for="(item,index) in tags.selfTags" :key="index" class="selfTags-item">
          <span>{{item}}</span>
        </div>
      </div>
      <div class="addNewSelfTag">
        <div style="margin-bottom: 5px">
          新标签: <input type="text" name="fname" v-model="newSelfTagValue"/>
        </div>
        <button @click="handleClickAdd">新增自定义标签</button>
      </div>
    </div>
    <div class="myMenu" v-show="myMenuIsShow1" :style="{'top':myMenuTop1+'px','left':myMenuLeft1+'px'}">哈哈哈</div>
    <!--<div>-->
      <!--<span class="title">散点图</span>-->
      <!--<CbiScatterChart :data="scatterChartData" :settings="scatterChartSettings" :extend="scatterChartExtend"></CbiScatterChart>-->
    <!--</div>-->
    <div>
      <span class="title">柱状图</span>
      <CbiHistogramChart
        :height="height"
        :data="histogram.chartData"
        :settings="histogram.chartSettings"
        :extend="histogram.chartExtend"></CbiHistogramChart>
    </div>
    <div>
      <span class="title">堆叠图</span>
      <!--<CbiHistogramChart-->
      <!--:height="height"-->
      <!--:data="stack.chartData"-->
      <!--:settings="stack.chartSettings"-->
      <!--:extend="stack.chartExtend"></CbiHistogramChart>-->
      <CbiHistogram
        :height="height"
        :data="stack.chartData"
        :settings="stack.chartSettings"
        :extend="stack.chartExtend"></CbiHistogram>
    </div>
    <div>
      <span class="title">横柱图</span>
      <CbiBarChart
        :height="height"
        :data="bar.chartData"
        :settings="bar.chartSettings"
        :extend="bar.chartExtend"></CbiBarChart>
    </div>
    <div>
      <span class="title">折线图</span>
      <CbiLineChart
        :height="height"
        :data="line.chartData"
        :settings="line.chartSettings"
        :extend="line.chartExtend"></CbiLineChart>
    </div>
    <div>
      <span class="title">饼图</span>
      <!--:height="height"-->
      <CbiPieChart
        :data="pie.chartData"
        :settings="pie.chartSettings"
        :extend="pie.chartExtend"></CbiPieChart>
    </div>
    <div>
      <span class="title">仪表盘</span>
      <CbiGaugeChart
        :height="height"
        :data="gauge.chartData"
        :settings="gauge.chartSettings"
        :extend="gauge.chartExtend"></CbiGaugeChart>
    </div>
    <PercentStack :data="Percent.chartData" :settings="Percent.chartSettings" :extend="chartExtend"></PercentStack>
    <router-view/>
  </div>
</template>

<script>
  import {set} from 'utils-lite'
  import CbiHistogramChart from '../src/packages/histogram/index';
  import CbiBarChart from '../src/packages/bar/index';
  import CbiLineChart from '../src/packages/line/index';
  import CbiGaugeChart from '../src/packages/gauge/index';
  import CbiPieChart from '../src/packages/pie/index';
  import CbiScatterChart from '../src/packages/scatter/index';
  import PercentStack from '../src/packages/percentStack/index';
  import {CbiHistogram} from '../src/index.es'
  import echarts from 'echarts'
  import clickoutside from './components/clickoutside';

  export default {
    name: 'App',
    data: function () {
      this.chartSettings2 = {
        axisSite: {right: ['下单率']},
      };
      return {
        data1: {
          columns: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1', '18Q2', '18Q3', '18Q4', '19Q1', '19Q2'],
          dataList: [
            {
              name: 'Sow:>30%',
              value: [
                /*
                第一项：身份的随机数
                第二项：纵轴的财季
                第三项：BP值
                第四项：BP值（范围？）
                第五项...：简单的信息,比如客户名称，bpid等，顺序保固定
                * */
                [1, '17Q1', 9, '客户名称', 0.46, 18, 6,],
                [2, '17Q2', 11, '客户名称', 0.65, 34, 9,],
                [3, '17Q3', 7, '客户名称', 0.3, 14, 5,],
                [4, '18Q1', 7, '客户名称', 0.33, 16, 6,],
              ],
              color: '#dd4444',
            },
            {
              name: 'Sow:10%-30%',
              value: [],
              color: '#fec42c',
            },
            {
              name: 'Sow:<10%',
              value: [],
              color: '#80F1BE',
            },
          ],
        },
        myMenuTop: null,
        myMenuLeft: null,
        myMenuIsShow: false,
        myMenuTop1: null,
        myMenuLeft1: null,
        myMenuIsShow1: false,
        scatterExample1: null,
        scatterExample2: null,
        scatterExample3: null,
        scatterExample4: null,
        scatterExample5: null,
        scatterExample6: null,
        scatterExample7: null,
        scatterExample8: null,
        scatterExample9: null,
        scatterData: [
          [1, '17Q1', 9, 56, 0.46, 18, 6,],
          [2, '17Q2', 11, 21, 0.65, 34, 9,],
          [3, '17Q3', 7, 63, 0.3, 14, 5,],
          [4, '18Q1', 7, 29, 0.33, 16, 6,],
          [5, '17Q2', 24, 44, 0.76, 40, 16,],
          [6, '17Q4', 58, 90, 1.77, 68, 33,],
          [7, '17Q2', 49, 77, 1.46, 48, 27,],
          [8, '18Q1', 55, 80, 1.29, 59, 29,],
          [9, '17Q1', 216, 280, 4.8, 108, 64,],
          [10, '17Q3', 127, 216, 2.52, 61, 27,],
          [11, '18Q4', 19, 38, 0.57, 31, 15,],
          [12, '17Q1', 11, 40, 0.43, 21, 7,],
          [13, '17Q2', 38, 74, 1.04, 46, 22,],
          [14, '17Q3', 79, 120, 1.7, 75, 41,],
          [15, '17Q4', 63, 116, 1.48, 44, 26,],
          [16, '17Q2', 6, 29, 0.34, 13, 5,],
          [17, '18Q3', 66, 110, 1.54, 62, 31,],
          [18, '17Q1', 142, 192, 3.88, 93, 79,],
          [19, '17Q2', 31, 54, 0.96, 32, 14,],
          [20, '17Q4', 8, 17, 0.48, 23, 10,],
          [21, '17Q1', 15, 36, 0.61, 29, 13,],
          [22, '18Q4', 69, 114, 2.08, 73, 39,],
          [23, '17Q2', 73, 110, 2.43, 76, 48,],
          [24, '17Q4', 12, 30, 0.5, 32, 16,],
          [25, '17Q1', 27, 43, 1, 53, 22,],
          [26, '18Q2', 117, 157, 3.05, 92, 58,],
          [27, '17Q3', 185, 230, 4.09, 123, 69,],
          [28, '17Q1', 120, 186, 2.77, 91, 50,],
          [29, '17Q4', 96, 165, 2.76, 83, 41,],
          [30, '18Q2', 24, 60, 1.03, 50, 21,],
          [31, '17Q1', 5, 49, 0.28, 10, 6,]
        ],
        scatterData2: [
          [1, '17Q1', 45, 125, 0.82, 34, 23,],
          [2, '17Q2', 27, 78, 0.86, 45, 29,],
          [3, '18Q1', 60, 84, 1.09, 73, 27,],
          [4, '17Q4', 81, 121, 1.28, 68, 51,],
          [5, '17Q2', 77, 114, 1.07, 55, 51,],
          [6, '18Q3', 81, 121, 1.28, 68, 51,],
          [7, '17Q4', 77, 114, 1.07, 55, 51,],
          [8, '17Q1', 65, 78, 0.86, 51, 26,],
          [9, '17Q1', 33, 47, 0.64, 50, 17,],
          [10, '17Q1', 55, 80, 1.01, 75, 24,],
          [11, '18Q3', 81, 124, 1.03, 45, 24,],
          [12, '17Q4', 71, 142, 1.1, 62, 42,],
          [13, '17Q2', 69, 130, 1.28, 74, 50,],
          [14, '18Q3', 87, 131, 1.47, 84, 40,],
          [15, '17Q1', 80, 121, 1.3, 85, 37,],
          [16, '17Q1', 83, 167, 1.16, 57, 43,],
          [17, '17Q3', 43, 107, 1.05, 59, 37,],
          [18, '17Q4', 46, 89, 0.86, 64, 25,],
          [19, '17Q2', 71, 113, 1.17, 88, 31,],
          [20, '17Q4', 57, 91, 0.85, 55, 31,],
          [21, '17Q2', 63, 101, 0.9, 56, 41,],
          [22, '17Q3', 77, 119, 1.09, 73, 48,],
          [23, '18Q1', 62, 100, 1, 72, 28,],
          [24, '17Q4', 128, 172, 1.49, 97, 56,],
          [25, '17Q2', 45, 51, 0.74, 39, 17,],
          [26, '17Q4', 24, 38, 0.61, 47, 17,],
          [27, '17Q1', 24, 39, 0.59, 50, 19,],
          [28, '17Q2', 68, 96, 1.05, 79, 29,],
          [29, '17Q3', 143, 197, 1.66, 99, 51,],
          [30, '18Q4', 131, 174, 1.55, 108, 50,],
          [31, '17Q1', 143, 201, 1.39, 89, 53,]
        ],
        scatterData3: [
          [1, '17Q3', 37, 27, 1.163, 27, 13,],
          [2, '18Q4', 62, 71, 1.195, 60, 8,],
          [3, '17Q2', 38, 74, 1.363, 37, 7,],
          [4, '17Q1', 21, 36, 0.634, 40, 9,],
          [5, '17Q4', 42, 46, 0.915, 81, 13,],
          [6, '17Q2', 52, 69, 1.067, 92, 16,],
          [7, '17Q4', 30, 28, 0.924, 51, 2,],
          [8, '17Q1', 48, 74, 1.236, 75, 26,],
          [9, '17Q2', 85, 113, 1.237, 114, 27,],
          [10, '17Q1', 81, 104, 1.041, 56, 40,],
          [11, '17Q1', 39, 60, 0.964, 25, 11,],
          [12, '18Q4', 51, 101, 0.862, 58, 23,],
          [13, '17Q4', 69, 120, 1.198, 65, 36,],
          [14, '17Q3', 105, 178, 2.549, 64, 16,],
          [15, '17Q4', 68, 87, 0.996, 74, 29,],
          [16, '17Q2', 68, 97, 0.905, 51, 34,],
          [17, '17Q4', 27, 47, 0.592, 53, 12,],
          [18, '17Q1', 61, 97, 0.811, 65, 19,],
          [19, '17Q2', 71, 121, 1.374, 43, 18,],
          [20, '17Q3', 102, 182, 2.787, 44, 19,],
          [21, '17Q4', 50, 76, 0.717, 31, 20,],
          [22, '17Q2', 94, 140, 2.238, 68, 18,],
          [23, '18Q3', 77, 104, 1.165, 53, 7,],
          [24, '17Q4', 130, 227, 3.97, 55, 15,],
          [25, '17Q2', 84, 139, 1.094, 40, 17,],
          [26, '17Q3', 108, 137, 1.481, 48, 15,],
          [27, '17Q4', 48, 62, 1.619, 26, 3,],
          [28, '17Q1', 48, 68, 1.336, 37, 9,],
          [29, '17Q2', 92, 174, 3.29, 0, 13,],
          [30, '17Q3', 116, 188, 3.628, 101, 16,],
          [31, '17Q1', 50, 0, 1.383, 76, 11,]
        ],
        checkTagsList: [],
        tags: {
          preTags: [
            {label: '预设标签1', value: '预设标签1', isCheck: true},
            {label: '预设标签2', value: '预设标签2', isCheck: false},
            {label: '预设标签3', value: '预设标签3', isCheck: false},
          ],
          selfTags: [
            '土豪客户',
            '穷逼客户',
          ],
        },
        newSelfTagValue: '',
        scatterChartData:{
          columns: ['日期', '访问用户', '下单用户', '年龄'],
          rows: {
            '上海': [
              { '日期': 1, '访问用户': '17Q1', '年龄': 3, '下单用户': 1244 },
              { '日期': 23, '访问用户': '17Q2', '年龄': 6, '下单用户': 2344 },
              { '日期': 55, '访问用户': '17Q3', '年龄': 9, '下单用户': 3245 },
              { '日期': 45, '访问用户': '17Q4', '年龄': 12, '下单用户': 4355 },
              { '日期': 23, '访问用户': '17Q1', '年龄': 15, '下单用户': 4564 },
              { '日期': 78, '访问用户': '17Q2', '年龄': 20, '下单用户': 6537 }
            ],
            '北京': [
              { '日期': 112, '访问用户': '18Q1', '年龄': 3, '下单用户': 1244 },
              { '日期': 134, '访问用户': '18Q2', '年龄': 6, '下单用户': 2344 },
              { '日期': 156, '访问用户': '18Q3', '年龄': 15, '下单用户': 4564 },
              { '日期': 123, '访问用户': '18Q4', '年龄': 9, '下单用户': 3245 },
              { '日期': 167, '访问用户': '18Q1', '年龄': 12, '下单用户': 4355 },
              { '日期': 178, '访问用户': '18Q2', '年龄': 10, '下单用户': 3567 }
            ],
            '广州': [
              { '日期': 221, '访问用户': '17Q1', '年龄': 3, '下单用户': 1244 },
              { '日期': 234, '访问用户': '17Q2', '年龄': 6, '下单用户': 2344 },
              { '日期': 256, '访问用户': '17Q3', '年龄': 30, '下单用户': 3245 },
              { '日期': 267, '访问用户': '17Q4', '年龄': 12, '下单用户': 4355 },
              { '日期': 277, '访问用户': '17Q1', '年龄': 18, '下单用户': 4564 },
              { '日期': 289, '访问用户': '17Q2', '年龄': 30, '下单用户': 4850 }
            ]
        },
        },
        scatterChartSettings:{

        },
        scatterChartExtend:{
          xAxis: {
//            type: 'category',
//            type: 'log',
//              data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
//            interval:function (index,name) {
//
//            },
            min: 0,
            max: 300,
//            interval:2,
            boundaryGap: false,
            axisLine: {
              symbol: ['none', 'arrow']
            },
            splitLine: {
              show: true,
              lineStyle: {// 使用深浅的间隔色
                color: ['black', 'white', 'black', 'white', 'black', 'white', 'white']
              },
//              interval:function (index,value) {
//                console.log(index, value);
//                if(value<100&&index===26){
//                  return true
//                }
//                if(value >= 100&&value < 200&&index===52){
//                  return true
//                }
//                if(value>200&&index===78){
//                  return true
//                }
//              },
            },
            axisTick: {
              show: false,
//              interval:function (index,value) {
//                console.log(index, value);
//                if(value<100&&index===26){
//                  return true
//                }
//                if(value >= 100&&value < 200&&index===52){
//                  return true
//                }
//                if(value>200&&index===78){
//                  return true
//                }
//              },
            },
            axisLabel: {
              interval: function (index, value) {
                console.log(index, value);
                if (value < 100 && index === 14) {
                  return true
                }
                if (value >= 100 && value < 200 && index === 41) {
                  return true
                }
                if (value > 200 && index === 65) {
                  return true
                }
              },
              formatter: function (value, index) {
                console.log(value, 'value');
                console.log(index, 'index');
                if (value === 500) {
                  return 'R'
                }
                if (value === 1500) {
                  return 'D'
                }
                if (value === 2500) {
                  return 'A'
                }
//                if (value < 100) {
//                  return 'R'
//                }
//                if (value >= 100&&value < 200) {
//                  return 'D'
//                }
//                if (value >= 200) {
//                  return 'A'
//                }
//                return value
              },
              align: 'center'
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
            data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1', '18Q2', '18Q3', '18Q4', '19Q1', '19Q2'],
            show: true,
//            min:0,
//            max:300,
            //interval: 1,
            axisLabel: {
//              formatter: function (value, index) {
//                console.log(value,'value' );
//                if(value===0){
//                    return '17Q1'
//                }
////                console.log(index,'index');
////                if(value===0){
////                  return 'R'
////                }
//              },
//              align:'center'
            },
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLine: {
              symbol: ['none', 'arrow']
            },
            splitLine: {
              show: true,
              lineStyle: {// 使用深浅的间隔色
                color: ['black', 'black', 'white']
              },
              interval: function (index, value) {
                if (index % 4 === 1) { // 1,5,9   不知道为啥在0,4,8处显示的位置不会。
                  return true;
                }
                return false
              }
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 3,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
          ],
        },
        height: '35vh',
        bar: {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率',],
            rows: [
              {'日期': '1/1', '访问用户': '1393', '下单用户': '1093', '下单率': '32'},
              {'日期': '1/2', '访问用户': '3530', '下单用户': '3230', '下单率': '26'},
              {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
              {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
              {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
              {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 78}
            ]
          },
          chartSettings: {
            percentShow:true
          },
          extend: {}
        },
        stack: {
//          chartData: {
//            columns: [],
//            rows: []
//          },
          chartData: {
            columns: ["财年", "中小单", "大单",'小单','大大单'],
            rows: [{"财年": "2017", "大单": '1200', "中小单": '2400',"小单":'2100',}, {"财年": "2018", "大单": '2000', "小单":2100,"大大单":200},{"财年": "2019", "大单": 1000, "中小单": 3250.96,"小单":2100,"大大单":200}],
//            rows: [{"财年": "2017", "大单": 1200, "中小单": 2400,"小单":2100,}, {"财年": "2018", "大单": 2000, "中小单": 4250.96,"小单":2100,"大大单":200},{"财年": "2019", "大单": 1000, "中小单": 3250.96,"小单":2100,"大大单":200}],
          },
          chartSettings: {
            stack: {'user': ['大单', '中小单','大大单','小单']},
            percentShow:true
          },
          extend: {}
        },
        histogram: {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率',],
            rows: [
              {'日期': '1/1', '访问用户': '1393', '下单用户': '1093', '下单率': '0.32'},
              {'日期': '1/2', '访问用户': '3530', '下单用户': '3230', '下单率': '0.26'},
              {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76},
              {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49},
              {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323},
              {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78}
            ]
          },
          chartSettings: {
            axisSite: {right: ['下单率']},
            yAxisType: ['KMB', 'percent'],
            percentShow:true,
          },
          extend: {}
        },
        line: {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率',],
            rows: [
              {'日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 32},
              {'日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 26},
              {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
              {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
              {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
              {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 78}
            ]
          },
          chartSettings: {},
          chartExtend: {
            series: {
              markLine:{
                data:[
                  {name:'最大值',yAxis:900},//调markline，可回退
                ]
              }
            }
          }
        },
        pie: {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率',],
            rows: [
              {'日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 32},
              {'日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 26},
              {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
              {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
              {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
              {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 78}
            ]
          },
          chartSettings: {},
          extend: {}
        },
        gauge: {
          chartData: {
            columns: ['type', 'a', 'b', 'value'],
            rows: [
              {type: '速度', value: 80, a: 1, b: 2}
            ]
          },
          chartSettings: {
            type: 'gauge',
          },
          extend: {}
        },
        Percent: {
          chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率',],
            rows: [
              {'日期': '1/1', '访问用户': '3530', '下单用户': '4545', '下单率': '974'},
              {'日期': '1/2', '访问用户': '3530', '下单用户': '3230', '下单率': '26'},
//              {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
//              {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
//              {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
//              {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 78}
            ]
          },
          chartSettings: {},
          extend: {}
        },
        chartData3: {
          columns: ['日期', '访问用户'],
          rows: [
            {'日期': '1/1', '访问用户': 1393},
            {'日期': '1/2', '访问用户': 3530},
            {'日期': '1/3', '访问用户': 2923},
            {'日期': '1/4', '访问用户': 1723},
            {'日期': '1/5', '访问用户': 3792},
            {'日期': '1/6', '访问用户': 4593}
          ]
        },
        chartExtend: {},
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率',],
          rows: [
            {'日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 32},
            {'日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 26},
            {'日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 76},
            {'日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 49},
            {'日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 323},
            {'日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 78}
          ]
        },
        highCharts: null,
        chartData2: {
          columns: ['横轴', '小张', '小彭', '小潘'],
          rows: [
            {'横轴': '苹果', '小张': 1393, '小彭': 1093, '小潘': 132},
            {'横轴': '橘子', '小张': 3530, '小彭': 3230, '小潘': 226},
            {'横轴': '梨', '小张': 2923, '小彭': 2623, '小潘': 376},
            {'横轴': '葡萄', '小张': 1723, '小彭': 1423, '小潘': 249},
            {'横轴': '香蕉', '小张': 3792, '小彭': 3492, '小潘': 323},
          ]
        },
        testOptions2: {
          chart: {
            type: 'column'
          },
          title: {
            text: '百分比堆叠柱形图'
          },
          legend: {
            squareSymbol: true,
            symbolWidth: 20,
            symbolRadius: 3
          },
          tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
            '({point.percentage:.0f}%)<br/>',
            //:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting
            shared: true
          },
          xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
          },
          yAxis: {
            min: 0,
            title: {
              text: '水果消费总量'
            }
          },
          plotOptions: {
            column: {
              stacking: 'percent'
            }
          },
          series: [{
            name: '小张',
            data: [1125, 2313, 124, 1217, 232]
          }, {
            name: '小彭',
            data: [122, 322, 1213, 1222, 1231]
          }, {
            name: '小潘',
            data: [312, 1234, 124, 312, 125]
          }]
        },
        testOptions: {
          chart: {
            type: 'columnrange',
            inverted: true
          },
          title: {
            text: '每月温度变化范围'
          },
          subtitle: {
            text: '2009 挪威某地'
          },
          xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            title: {
              text: '温度 ( °C )'
            }
          },
          tooltip: {
            valueSuffix: '°C'
          },
          plotOptions: {
            columnrange: {
              dataLabels: {
                enabled: true,
                formatter: function () {
                  return this.y + '°C';
                }
              }
            }
          },
          legend: {
            enabled: false
          },
          series: [{
            name: '温度',
            data: [
              [-9.7, 9.4],
              [-8.7, 6.5],
              [-3.5, 9.4],
              [-1.4, 19.9],
              [0.0, 22.6],
              [2.9, 29.5],
              [9.2, 30.7],
              [7.3, 26.5],
              [4.4, 18.0],
              [-3.1, 11.4],
              [-5.2, 10.4],
              [-13.5, 9.8]
            ]
          }]
        },
      }
    },
    directives: {
      'clickoutside': clickoutside
    },
    methods: {
      handleClickAdd(){
        if (this.newSelfTagValue !== '') {
          this.tags.selfTags.push(this.newSelfTagValue);
          this.newSelfTagValue = '';
        }
      },
      handleChecked(val){
        console.log(val, 123);
      },
      handleClickOutSide(){
        console.log('handleClickOutSide');
        this.myMenuIsShow = false;
      },
      initScatterExample(){
        let chartDom1 = document.getElementsByClassName('scatterExample1')[0];
//        let chartDom2 = document.getElementsByClassName('scatterExample2')[0];
//        let chartDom3 = document.getElementsByClassName('scatterExample3')[0];
//        let chartDom4 = document.getElementsByClassName('scatterExample4')[0];
//        let chartDom5 = document.getElementsByClassName('scatterExample5')[0];
//        let chartDom6 = document.getElementsByClassName('scatterExample6')[0];
//        let chartDom7 = document.getElementsByClassName('scatterExample7')[0];
//        let chartDom8 = document.getElementsByClassName('scatterExample8')[0];
//        let chartDom9 = document.getElementsByClassName('scatterExample9')[0];
        this.scatterExample1 = echarts.init(chartDom1, null, {renderer: 'canvas'});
//        this.scatterExample2 = echarts.init(chartDom2, null, {renderer: 'canvas'});
//        this.scatterExample3 = echarts.init(chartDom3, null, {renderer: 'canvas'});
//        this.scatterExample4 = echarts.init(chartDom4, null, {renderer: 'canvas'});
//        this.scatterExample5 = echarts.init(chartDom5, null, {renderer: 'canvas'});
//        this.scatterExample6 = echarts.init(chartDom6, null, {renderer: 'canvas'});
//        this.scatterExample7 = echarts.init(chartDom7, null, {renderer: 'canvas'});
//        this.scatterExample8 = echarts.init(chartDom8, null, {renderer: 'canvas'});
//        this.scatterExample9 = echarts.init(chartDom9, null, {renderer: 'canvas'});
        let schema = [
          {name: 'date', index: 0, text: '日'},
          {name: 'AQIindex', index: 1, text: 'AQI指数'},
          {name: 'PM25', index: 2, text: 'PM2.5'},
          {name: 'PM10', index: 3, text: 'PM10'},
          {name: 'CO', index: 4, text: '一氧化碳（CO）'},
          {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
          {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
        ];
        let sum = function (m, n) {
          var num = Math.floor(Math.random() * (m - n) + n);
          return num;
        };
        this.scatterData.forEach((item) => {
          item.shift();
          item.unshift(sum(0, 100))
        });
        this.scatterData2.forEach((item) => {
          item.shift();
          item.unshift(sum(100, 200))
        });
        this.scatterData3.forEach((item) => {
          item.shift();
          item.unshift(sum(200, 300))
        });
        console.log(this.scatterData);
        let option1 = {
          color: [
            '#dd4444', '#fec42c', '#80F1BE'
          ],
          legend: {
            y: 'top',
            data: ['Sow:>30%', 'Sow:10%-30%', 'Sow:<10%'],
            textStyle: {
//              color: '#fff',
              fontSize: 16
            }
          },
          tooltip: {
            padding: 10,
//            triggerOn: 'click',
            show: !this.myMenuIsShow || !this.myMenuIsShow1,
            triggerOn: 'mousemove',
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
              var value = obj.value;
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
            }
          },
          xAxis: {
//            type: 'category',
//            type: 'log',
//              data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
//            interval:function (index,name) {
//
//            },
//            min: 0,
//            max: 300,
//            interval:2,
            boundaryGap: false,
            axisLine: {
              symbol: ['none', 'arrow']
            },
            splitLine: {
              show: true,
              lineStyle: {// 使用深浅的间隔色
                color: ['black', 'white', 'black', 'white', 'black', 'white', 'white']
              },
//              interval:function (index,value) {
//                console.log(index, value);
//                if(value<100&&index===26){
//                  return true
//                }
//                if(value >= 100&&value < 200&&index===52){
//                  return true
//                }
//                if(value>200&&index===78){
//                  return true
//                }
//              },
            },
            axisTick: {
              show: false,
//              interval:function (index,value) {
//                console.log(index, value);
//                if(value<100&&index===26){
//                  return true
//                }
//                if(value >= 100&&value < 200&&index===52){
//                  return true
//                }
//                if(value>200&&index===78){
//                  return true
//                }
//              },
            },
            axisLabel: {
              interval: function (index, value) {
                console.log(index, value);
                if (value < 100 && index === 14) {
                  return true
                }
                if (value >= 100 && value < 200 && index === 41) {
                  return true
                }
                if (value > 200 && index === 65) {
                  return true
                }
              },
//              min:0,
//              max:300,
              formatter: function (value, index) {
                console.log(value, 'value');
                console.log(index, 'index');
                if (value === 50) {
                  return 'R'
                }
                if (value === 150) {
                  return 'D'
                }
                if (value === 250) {
                  return 'A'
                }
//                if (value < 100) {
//                  return 'R'
//                }
//                if (value >= 100&&value < 200) {
//                  return 'D'
//                }
//                if (value >= 200) {
//                  return 'A'
//                }
//                return value
              },
              align: 'center'
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
            data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1', '18Q2', '18Q3', '18Q4', '19Q1', '19Q2'],
            show: true,
//            min:0,
//            max:300,
            //interval: 1,
            axisLabel: {
//              formatter: function (value, index) {
//                console.log(value,'value' );
//                if(value===0){
//                    return '17Q1'
//                }
////                console.log(index,'index');
////                if(value===0){
////                  return 'R'
////                }
//              },
//              align:'center'
            },
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLine: {
              symbol: ['none', 'arrow']
            },
            splitLine: {
              show: true,
              lineStyle: {// 使用深浅的间隔色
                color: ['black', 'black', 'white']
              },
              interval: function (index, value) {
                if (index % 4 === 1) { // 1,5,9   不知道为啥在0,4,8处显示的位置不会。
                  return true;
                }
                return false
              }
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 3,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
          ],
          series: [
            {
              name: 'Sow:>30%',
//              symbolSize: 20,
              data: this.scatterData,
              type: 'scatter'
            },
            {
              name: 'Sow:10%-30%',
//              symbolSize: 20,
              data: this.scatterData2,
              type: 'scatter'
            },
            {
              name: 'Sow:<10%',
//              symbolSize: 20,
              data: this.scatterData3,
              type: 'scatter'
            }
          ]
        };
        let option2 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            boundaryGap: true,
            axisLabel: {
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'D'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option3 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            boundaryGap: true,
            axisLabel: {
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'A'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option4 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'R'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: false
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: true,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option5 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'A'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option6 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'A'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option7 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'R'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: false
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: true,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option8 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'A'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        let option9 = {
          xAxis: {
//            type: 'category',
//            type: 'log',
            //  data:['R','D','A'],
//            data:[
////              {
////                value:'R',
////              },
//              {
//                value:'D',
//              },
////              {
////                value:'A',
////              },
//            ],
//            interval:1400,
            interval: function (index, name) {
              console.log(index, name);
            },
            axisTick: {
              show: false
            },
            boundaryGap: true,
            axisLabel: {
              show: false,
              formatter: function (value, index) {

//                console.log(index,'index');
                if (value === 0) {
                  return 'A'
                }
//                if(value<15){
//                  return 'R'
//                }else if(value>=15&&value<25){
//                    return 'D'
//                }else {
//                  return 'A'
//                }
              },
              align: 'center'
            },
            splitLine: {
              show: true
            },
//            splitArea:{
            //坐标轴区域
//                show:true
//            }
//            axisPointer:{
            //指针设置
//                show:true
//            }
          },
          yAxis: {
            type: 'category',
//              data:['>一年采购','一年内采购','三个月内采购'],
            show: false,
            splitLine: {
              show: false
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              show: false,
              dimension: 2,
              min: 0,
              max: 250,
              itemWidth: 30,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：PM2.5'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            },
            {
              left: 'right',
              bottom: '5%',
              show: false,
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 120,
              calculable: true,
              precision: 0.1,
              text: ['明暗：二氧化硫'],
              textGap: 30,
              textStyle: {
                color: '#fff'
              },
              inRange: {
                colorLightness: [1, 0.5]
              },
              outOfRange: {
                color: ['rgba(255,255,255,.2)']
              },
              controller: {
                inRange: {
                  color: ['#c23531']
                },
                outOfRange: {
                  color: ['#444']
                }
              }
            }
          ],
          series: [{
            symbolSize: 20,
            data: this.scatterData,
            type: 'scatter'
          }]
        };
        this.scatterExample1.setOption(option1)
//        this.scatterExample2.setOption(option2)
//        this.scatterExample3.setOption(option3)
//        this.scatterExample4.setOption(option4)
//        this.scatterExample5.setOption(option5)
//        this.scatterExample6.setOption(option6)
//        this.scatterExample7.setOption(option7)
//        this.scatterExample8.setOption(option8)
//        this.scatterExample9.setOption(option9)
      },
      addHeight(){
        this.height += 1;
      },
      axios(){
        return new Promise((rev, rej) => {
          setTimeout(() => {
            return rev(
              {
                columns: ["财年", "中小单", "大单"],
                rows: [{"财年": "2017", "大单": 0, "中小单": 240800.00}, {"财年": "2018", "大单": 0, "中小单": 425520.96}],
              }
            )
          }, 10)
        })

      },
      async getStackChartData(){
        let res = await this.axios();
        this.stack.chartData = res
      },
      showMenu(params){
        this.scatterExample1.dispatchAction({
          //点击右键，隐藏tooltips
          type: 'hideTip',
        });
        var tree = document.getElementsByClassName("scatterExample1")[0];
        tree.oncontextmenu = function () {
          return false;
        };
        this.myMenuTop = params.event.offsetY + 65;
        this.myMenuLeft = params.event.offsetX + 15;
        this.myMenuIsShow = true;
        console.log(params, 111);
        console.log(params.event.offsetX, params.event.offsetY, 'qqq');
      },
      handleClickCharts(params){
        this.scatterExample1.dispatchAction({
          //点击右键，隐藏tooltips
          type: 'hideTip',
        });
        this.myMenuTop1 = params.event.offsetY + 65;
        this.myMenuLeft1 = params.event.offsetX + 15;
        this.myMenuIsShow1 = true;
        console.log(params, 'handleClickCharts');
      },
      handleMouseOverCharts(){
//          if(this.myMenuIsShow||this.myMenuIsShow1){
//            this.scatterExample1.dispatchAction({
//              //点击右键，隐藏tooltips
//              type: 'hideTip',
//            });
//          }
      }
    },
    components: {
      CbiHistogramChart,
      PercentStack,
      CbiBarChart,
      CbiLineChart,
      CbiGaugeChart,
      CbiPieChart,
      CbiHistogram,
      CbiScatterChart
    },
    mounted() {
      this.initScatterExample();
      this.scatterExample1.on('contextmenu', this.showMenu);
      this.scatterExample1.on('click', this.handleClickCharts);
      this.scatterExample1.on('mouseover', this.handleMouseOverCharts);
//
//        this.getStackChartData();
//      this.loadTestHighCharts();
      // set(this.chartSettings, )
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .scatter-box {
    /*display: flex;*/
    position: relative;
  }

  /*.scatterExample2{*/
  /*position: absolute;*/
  /*left: 376px;*/
  /*}*/
  /*.scatterExample3{*/
  /*position: absolute;*/
  /*left: 752px;*/
  /*}*/
  /*.scatterExample4{*/
  /*position: absolute;*/
  /*top: -183px;*/
  /*}*/
  /*.scatterExample5{*/
  /*position: absolute;*/
  /*top: -183px;*/
  /*left: 376px;*/
  /*}*/
  /*.scatterExample6{*/
  /*position: absolute;*/
  /*top: -183px;*/
  /*left: 752px;*/
  /*}*/
  /*.scatterExample7{*/
  /*position: absolute;*/
  /*top: -366px;*/
  /*}*/
  /*.scatterExample8{*/
  /*position: absolute;*/
  /*top: -366px;*/
  /*left: 376px;*/
  /*}*/
  /*.scatterExample9{*/
  /*position: absolute;*/
  /*top: -366px;*/
  /*left: 752px;*/
  /*}*/
  .myMenu {
    min-width: 100px;
    min-height: 150px;
    padding: 10px 0;
    text-align: left;
    border: 1px solid #eeeeee;
    background-color: #fff;
    position: absolute;
  }

  .checkbox-item, .selfTags-item {
    margin-left: 8px;
    font-size: 14px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .selfTags-box, .preTags-box {

  }

  .preTags-box {
    padding: 0 20px;
  }

  .selfTags-box {
    border-top: 1px solid #333;
    padding: 10px 20px 0;
  }

  .addNewSelfTag {
    text-align: center;
    padding: 10px 20px 0;
  }
</style>
