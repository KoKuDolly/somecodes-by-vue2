<template>
  <div>
    <Transfer
      :data="getSourceData()"
      :target-keys="targetData"
      :list-style="listStyle"
      filterable
      @on-change="handleChange"
      :titles="titles"
    ></Transfer>
  </div>
</template>
<script>
export default {
  name: 'myTransfer',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.ruleVariariesData = [...this.data]
    this.titles = [...this.title]
  },
  watch: {
    data (n) {
      this.ruleVariariesData = [...n]
    },
    title (n) {
      this.titles = [...n]
    }
  },
  data () {
    return {
      listStyle: {
        width: '47%',
        height: '400px'
      },
      ruleVariariesData: [],
      targetData: [],
      titles: []
    }
  },
  methods: {
    getSourceData () {
      let mockData = []
      this.ruleVariariesData.forEach((item, index) => {
        mockData.push({
          key: index.toString(),
          label: `${item.dataSource}  ${item.variaNameCn}  ${item.variaNameEn}  ${item.relateNameEnVersion}  ${item.variariesStatus}`,
          disabled: false,
          description: ''
        })
      })
      return mockData
    },
    handleChange (n) {
      this.targetData = n
    }
  }
}
</script>
<style>
/* only */
</style>
