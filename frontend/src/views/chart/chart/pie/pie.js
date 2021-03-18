import { hexColorToRGBA } from '@/views/chart/chart/util'

export function basePieOption(chart_option, chart) {
  // 处理shape attr
  let customAttr = {}
  if (chart.customAttr) {
    customAttr = JSON.parse(chart.customAttr)
    if (customAttr.color) {
      chart_option.color = customAttr.color.colors
    }
  }
  // 处理data
  if (chart.data) {
    chart_option.title.text = chart.title
    if (chart.data.series.length > 0) {
      chart_option.series[0].name = chart.data.series[0].name
      const valueArr = chart.data.series[0].data
      for (let i = 0; i < valueArr.length; i++) {
        const y = {
          name: chart.data.x[i],
          value: valueArr[i]
        }
        y.itemStyle = {
          color: hexColorToRGBA(customAttr.color.colors[i % 9], customAttr.color.alpha)
        }
        y.type = 'pie'
        chart_option.series[0].data.push(y)
      }
    }
  }
  // console.log(chart_option);
  return chart_option
}

