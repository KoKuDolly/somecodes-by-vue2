<template>
  <div>
    <div>element-table</div>
    <div class="element-body">
      <Table
        :data="tableData"
        @expand-change="toggleRowExpansion"
        ref="table"
      >
        <TableColumn
          type="expand"
        >
          <Table
            :data="variableTableData"
          >
            <template v-for="(item, index) in variableColumns">
              <TableColumn
                :key="index"
                :prop="item.key"
                :label="item.label"
              >
              </TableColumn>
            </template>
          </Table>
        </TableColumn>
        <template v-for="(item, index) in columns">
          <TableColumn
            :key="index"
            :prop="item.key"
            :label="item.label"
          >
          <template v-for="(childrenItem, childrenIndex) in item.children">
            <TableColumn
              :key="childrenIndex"
              :prop="childrenItem.key"
              :label="childrenItem.label"
            ></TableColumn>
            </template>
          </TableColumn>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn, Form, FormItem } from 'element-ui'
import { data, map } from './data/anotherData'

function generateArr ({data = {}}) {
  let arr = []
  Object.keys(data).forEach(v => {
    let value = data[v]
    if (v === 'offResultJson' || v === 'onResultJson' || v === 'uniformityResultJson') {
      arr = Object.keys(value)
    }
  })
  return arr.sort().filter(v => v !== 'elm' && v !== 'isRootInsert')
}

function generateObj (data) {
  let result = []
  data.forEach(v => {
    let arr = []
    Object.keys(v).forEach(key => {
      if (key === 'offResultJson') {
        arr[1] = v[key]
        arr[1] = Object.assign({name: '线下'}, arr[1])
        let keys = Object.keys(v[key])
        let keysObj = {}
        keys.forEach((v, i) => {
          keysObj[v] = v
        })
        keysObj = Object.assign({name: '变量英文名'}, keysObj)
        arr[0] = keysObj
      }
      if (key === 'onResultJson') {
        arr[2] = v[key]
        arr[2] = Object.assign({name: '线上'}, arr[2])
      }
      if (key === 'uniformityResultJson') {
        arr[3] = v[key]
        arr[3] = Object.assign({name: '一致性对比'}, arr[3])
      }
    })
    result.push(arr)
    v.sub = arr
  })
  return result
}

export default {
  name: 'element-table',
  components: {
    Table,
    TableColumn,
    Form,
    FormItem
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      columns: [],
      tableData: [],
      variableColumns: [],
      variableTableData: []
    }
  },
  methods: {
    init () {
      this.handleColumns()
      this.renderTable()
    },
    handleColumns () {
      let variableArr = generateArr({data: data.data.records[0]})
      variableArr.push(...variableArr.splice(variableArr.findIndex(v => v === 'point'), 1))
      let obj = {}

      variableArr.forEach((_key, i) => {
        obj[_key] = {
          cnName: '变量' + (i + 1),
          children: {
            on: '线上',
            off: '线下',
            uniformity: '一致性对比'
          }
        }
      })

      function generateColumns (obj = {}) {
        const keys = Object.keys(obj)
        return keys.map((v, i, a) => {
          const value = obj[v]
          if (value['children']) {
            return {
              label: value.cnName,
              key: v,
              children: generateColumns(value['children'])
            }
          } else {
            return {
              label: obj[v],
              key: v
            }
          }
        })
      }

      this.columns = generateColumns(map).filter(v => v.key !== 'offResultJson' && v.key !== 'onResultJson' && v.key !== 'uniformityResultJson')
      this.variableColumns = [{
        key: 'name',
        label: '类型'
      }].concat(generateColumns(obj))
    },
    renderTable () {
      generateObj(data.data.records)
      this.tableData = data.data.records
      // console.log(this.tableData)
    },
    toggleRowExpansion (row, expandedRows) {
      if (expandedRows.length > 1) {
        this.tableData.forEach(v => {
          if (v.id !== row.id) {
            this.$refs.table.toggleRowExpansion(v, false)
          }
        })
      }
      this.variableTableData = row.sub
    }
  }
}
</script>
<style lang="less">
  /* comments */
</style>
