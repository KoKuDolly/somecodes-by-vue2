<template>
  <div>
      <canvas width="600" height="400" id="line"></canvas>
      <canvas width="600" height="400" id="cake"></canvas>
  </div>
</template>
<script>
import { LineChart } from './line.js'
import { PieChart } from './pie.js'
export default {
  name: 'home',
  data() {
    return {
      /* 假设一组  基于坐标轴的 */
      line: [
        { x: 100, y: 80 },
        { x: 200, y: 120 },
        { x: 300, y: 250 },
        { x: 400, y: 340 },
        { x: 500, y: 230 }
      ],
      cake: [
        {
          title: '15-20岁',
          num: 13
        },
        {
          title: '20-25岁',
          num: 20
        },
        {
          title: '25-30岁',
          num: 9
        },
        {
          title: '30-35岁',
          num: 6
        },
        {
          title: '35-40岁',
          num: 15
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      new LineChart('line').init(this.line)
      new PieChart('cake').init(this.cake)
    }
  }
}
</script>
<style lang="less">
canvas {
  display: block;
}
</style>
