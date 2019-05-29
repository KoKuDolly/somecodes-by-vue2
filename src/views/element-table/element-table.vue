<template>
  <div>
    <div>element-table</div>
    <div class="element-body">
      <Table
        :data="tableData"
      >
        <TableColumn
          type="expand"
        >
          <template slot-scope="props">
            <Form label-position="left">
              <template v-for="(item, index) in Object.keys(props.row.children)">
                <FormItem :key="index">
                  <span class="expand-title">{{'变量' + (index + 1) + '英文名：'}}</span><span>{{item}}</span>
                  <span class="expand-title">线上：</span><span>{{props.row.children[item].on ? props.row.children[item].on : '无结果'}}</span>
                  <span class="expand-title">线下：</span><span>{{props.row.children[item].off ? props.row.children[item].off : '无结果'}}</span>
                  <span class="expand-title">一致性对比：</span><span>{{props.row.children[item].uniformity ? props.row.children[item].uniformity : '无结果'}}</span>
                </FormItem>
              </template>
            </Form>
          </template>
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
  Object.keys(data).some(v => {
    let value = data[v]
    if (value instanceof Object) {
      arr = Object.keys(value)
    }
  })
  return arr.sort()
}

function generateObj (data, variableArr) {
  let arr = []
  data.forEach(v => {
    let obj = {}
    variableArr.forEach(_key => {
      obj[_key] = { on: '', off: '', uniformity: '' }
    })
    Object.keys(v).forEach(key => {
      if (key === 'offResultJson') {
        variableArr.forEach(_key => {
          obj[_key].off = v[key][_key]
        })
      }
      if (key === 'onResultJson') {
        variableArr.forEach(_key => {
          obj[_key].on = v[key][_key]
        })
      }
      if (key === 'uniformityResultJson') {
        variableArr.forEach(_key => {
          obj[_key].uniformity = v[key][_key]
        })
      }
    })
    obj = {children: {...obj}, ...v}
    arr.push(obj)
  })
  return arr
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
      const variableArr = generateArr({data: data.data.records[0]})

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

      this.columns = generateColumns(map)
      this.variableColumns = generateColumns(obj)
      console.log(this.columns, this.variableColumns)
    },
    renderTable () {
      // this.tableData = data.data.records
      const variableArr = generateArr({data: data.data.records[0]})
      // this.variableTableData = generateObj(data.data.records, variableArr)
      this.tableData = generateObj(data.data.records, variableArr)
      // console.log(this.tableData)
    }
  }
}
</script>
<style lang="less">
  /* comments */
  .expand-title {
    font-weight: bold;
  }
</style>
