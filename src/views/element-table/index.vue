<template>
  <div>
    <div>element-table</div>
    <div class="element-body">
      <Table
        :data="tableData"
      >
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
import { Table, TableColumn } from 'element-ui'
import { data, map } from './data/data'
export default {
  name: 'element-table',
  components: {
    Table,
    TableColumn
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      tableData: data.data.records,
      columns: []
    }
  },
  methods: {
    init () {
      this.handleColumns()
      this.renderTable()
    },
    renderTable () {
      function generateTableData (data = []) {
        return data.map((v, i, a) => {
          const keys = Object.keys(v)
          const extendArr = keys.map((vv, vi, va) => {
            if (v[vv] instanceof Object) {
              return {...v[vv]}
            }
          })
          let obj = {}
          extendArr.forEach(v => {
            obj = {...obj, ...v}
          })

          let result = {...v, ...obj}
          return result
        })
      }

      this.tableData = generateTableData(data.data.records)
      // 从多层对象中，选择对应键，组成新数组，多层对象的子属性必须是children
      function mapToFlat (obj = {}) {
        return obj.data.map((v, i, a) => {
          if (v[obj.children]) {
            return mapToFlat({
              data: v[obj.children],
              children: 'children',
              key: 'key'
            })
          } else {
            return v[obj.key]
          }
        })
      }
      // 将多维数组打平成一维数组
      function flatArr (arr) {
        return arr.reduce(function (pre, cur) {
          if (!Array.isArray(cur)) {
            return [...pre, cur]
          } else {
            return [...pre, ...flatArr(cur)]
          }
        }, [])
      }

      let flatColoumns = flatArr(mapToFlat({
        data: this.columns,
        children: 'children',
        key: 'key'
      }))

      let arr = flatColoumns.map(v => ({[v]: v}))
      let obj = {}
      arr.forEach(v => {
        obj = {...obj, ...v}
      })
      this.tableData = [obj].concat(this.tableData)
    },
    handleColumns () {
      function generateMap (data = {}, map = {}) {
        const keys = Object.keys(data)
        keys.forEach((v, i, a) => {
          const value = data[v]
          if (value instanceof Object) {
            let obj = {}
            Object.keys(value).sort().forEach((v, i, a) => {
              obj[v] = '变量' + (i + 1)
            })
            map[v].children = obj
          }
        })
      }

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

      generateMap(data.data.records[0], map)

      this.columns = generateColumns(map)
    }
  }
}
</script>
<style lang="less">
  /* comments */
</style>
