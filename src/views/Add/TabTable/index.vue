<template>
  <div>
    <span style="margin-right:20px;">已选<span style="padding:5px;">{{proNum}}</span>条</span>
    <span>可见策略范围</span>
    <RadioGroup v-model="range" @on-change="rangeChange">
      <Radio label="1">仅本角色</Radio>
      <Radio label="0" :disabled="proDis">本角色及上级</Radio>
      <Tooltip placement="right">
        <Icon type="ios-information"></Icon>
        <div slot="content">
          <p>根据子产品权限，</p>
          <p>该角色可见的策略范围</p>
        </div>
      </Tooltip>
    </RadioGroup>
    <Table :columns="dqColumns" :data="tableData" :loading="tableLoading" :height="tableHeight" @on-selection-change="selectChange" @on-filter-change="filterChange"/>
  </div>
</template>
<script>
export default {
  name: 'TabTable',
  props: {
    columns: Array,
    data: Array
  },
  watch: {
    columns (n, o) {
      this.dqColumns = [...n]
    },
    data (n, o) {
      const hasIdData = [...n]
      let temp = []
      let Id = ''
      hasIdData.forEach(item => {
        if (!item.name) {
          temp.push(item)
        } else {
          Id = item.name
        }
      })
      this.tableData = [...temp]
      this.TableId = Id
    }
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      TableId: 'DQ',
      proNum: 0,
      range: '1',
      proDis: true,
      dqColumns: [],
      tableData: [],
      tableLoading: false,
      tableHeight: 90,
      selection: []
    }
  },
  methods: {
    init () {
      this.dqColumns = [...this.columns]
      this.setTableData()
      this.getTableHeight()
    },
    setTableData () {
      const hasIdData = [...this.data]
      let temp = []
      let Id = ''
      hasIdData.forEach(item => {
        if (!item.name) {
          temp.push(item)
        } else {
          Id = item.name
        }
      })
      this.tableData = [...temp]
      this.TableId = Id
    },
    rangeChange () {
      this.$emit('typeSelectChange', this.selection, this.TableId, this.range)
    },
    selectChange (selection) {
      // console.log(selection)
      this.selection = JSON.parse(JSON.stringify(selection))
      const currNum = selection.length
      const totalNum = this.tableData.length
      this.proNum = currNum
      if (currNum === totalNum) {
        this.proDis = false
      } else {
        this.proDis = true
        this.range = '1'
      }
      this.$emit('typeSelectChange', this.selection, this.TableId, this.range)
    },
    filterChange (columns) {
      const {key, _filterChecked} = columns
      const maps = [
        {index: 1, value: 'ruleSet'},
        {index: 2, value: 'fxsb'},
        {index: 3, value: 'baseData'}
      ]
      let value = ''
      maps.forEach(item => {
        if (item.index === +_filterChecked[0]) {
          value = item.value
        }
      })
      const currNum = JSON.parse(JSON.stringify(this.tableData)).filter(item => item[key] === value).length
      const filterLen = _filterChecked.length
      if (filterLen) {
        if (currNum === 0) {
          this.tableHeight = 90
        }
        if (currNum > 0) {
          this.tableHeight = 48 * currNum + 40
        }
        if (currNum > 15) {
          this.tableHeight = 760
        }
      } else {
        this.getTableHeight()
      }
    },
    getTableHeight () {
      const tableDataNum = this.tableData.length
      if (tableDataNum === 0) {
        this.tableHeight = 90
      }
      if (tableDataNum > 0) {
        this.tableHeight = 48 * tableDataNum + 40
      }
      if (tableDataNum > 15) {
        this.tableHeight = 760
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
