<template>
  <div id="mountNode"></div>
</template>
<script>
import { Chart } from '@antv/g2'

export default {
  name: '',
  mounted () {
    this.drawg2()
  },
  data () {
    return {
      g2Data: [
        { feature: 'Battery', value: 0.22, phone: 'iPhone' },
        { feature: 'Brand', value: 0.28, phone: 'iPhone' },
        { feature: 'Contract', value: 0.29, phone: 'iPhone' },
        { feature: 'Design', value: 0.17, phone: 'iPhone' },
        { feature: 'Internet', value: 0.22, phone: 'iPhone' },
        { feature: 'Large', value: 0.02, phone: 'iPhone' },
        { feature: 'Price', value: 0.21, phone: 'iPhone' },
        { feature: 'Smartphone', value: 0.5, phone: 'iPhone' },
        { feature: 'Battery', value: 0.27, phone: 'Samsung' },
        { feature: 'Brand', value: 0.16, phone: 'Samsung' },
        { feature: 'Contract', value: 0.35, phone: 'Samsung' },
        { feature: 'Design', value: 0.13, phone: 'Samsung' },
        { feature: 'Internet', value: 0.2, phone: 'Samsung' },
        { feature: 'Large', value: 0.13, phone: 'Samsung' },
        { feature: 'Price', value: 0.35, phone: 'Samsung' },
        { feature: 'Smartphone', value: 0.38, phone: 'Samsung' },
        { feature: 'Battery', value: 0.26, phone: 'Nokia Smartphone' },
        { feature: 'Brand', value: 0.1, phone: 'Nokia Smartphone' },
        { feature: 'Contract', value: 0.3, phone: 'Nokia Smartphone' },
        { feature: 'Design', value: 0.14, phone: 'Nokia Smartphone' },
        { feature: 'Internet', value: 0.22, phone: 'Nokia Smartphone' },
        { feature: 'Large', value: 0.04, phone: 'Nokia Smartphone' },
        { feature: 'Price', value: 0.41, phone: 'Nokia Smartphone' },
        { feature: 'Smartphone', value: 0.3, phone: 'Nokia Smartphone' }
      ]
    }
  },
  methods: {
    drawg2() {
      const chart = new Chart({
        container: 'mountNode',
        autoFit: false,
        width: 600,
        height: 300
      })

      chart.data(this.g2Data)
      // chart.coordinate('polar')

      chart.legend({
        position: 'right-bottom'
      })

      // chart.interval().position('genre*sold')

      // chart.area().position('feature*value').color('phone').shape('phone', ['circle', 'square', 'triangle']).size(6)

      // chart
      //   .area()
      //   .position('feature*value')
      //   .color('phone').adjust('stack')
      // chart
      //   .line()
      //   .position('feature*value')
      //   .color('phone').adjust('stack')
      // chart
      //   .point()
      //   .position('feature*value')
      //   .color('phone')
      //   .shape('circle').adjust('stack')

      chart.facet('rect', {
        fields: [null, 'phone'],
        rowTitle: {
          style: {
            textAlign: 'start',
            fontSize: 12
          }
        },
        eachView(view) {
          view.area().position('feature*value')
          view.line().position('feature*value')
          view
            .point()
            .position('feature*value')
            .shape('circle')
        }
      })

      chart.render()
    }
  }
}
</script>
<style lang="less">
</style>
