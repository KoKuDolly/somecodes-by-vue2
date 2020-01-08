<!--
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2020-01-07 20:32:32
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-09 00:01:05
 -->
<template>
  <div class="cascader-container">
    <Row justify="space-between" type="flex">
      <Col :span="10">
        <div class="grid-content">
          <div class="title">1-1</div>
          <div class="form">
            <Input v-model="filterVarias.lt">
              <Button slot="append" icon="el-icon-search"></Button>
            </Input>
          </div>
          <div class="table">
            <Table :data="ltTableData" max-height='400' :highlight-current-row='true' stripe>
              <TableColumn prop="id">
                <template slot-scope="scope">
                  <Radio v-model="radio.lt" :label="scope.row.id" @change="handleltRadioChange($event, scope.row)"/>
                </template>
              </TableColumn>
              <TableColumn prop="index" label="index"></TableColumn>
              <TableColumn prop="name" label="name"></TableColumn>
              <TableColumn prop="gender" label="gender"></TableColumn>
              <TableColumn prop="action" label="action"></TableColumn>
            </Table>
          </div>
        </div>
        <div class="grid-content">
          <div class="title">2-1</div>
          <div class="form">
            <Input v-model="filterVarias.lb">
              <Button slot="append" icon="el-icon-search"></Button>
            </Input>
          </div>
          <div class="table">
            <Table
              :data="lbTableData"
              max-height='400'
              :highlight-current-row='true'
              stripe
              ref="lbTable"
              @selection-change="handlelbSelectionChange"
            >
              <TableColumn type="selection"></TableColumn>
              <TableColumn prop="index" label="index"></TableColumn>
              <TableColumn prop="cnName" label="cnName"></TableColumn>
              <TableColumn prop="enName" label="enName"></TableColumn>
            </Table>
          </div>
        </div>
      </Col>
      <Col :span="2">
        <div class="operate-container">
          <Button type="primary" class="btn-add" @click="handleAdd">添加 &gt;&gt;</Button>
          <Button type="primary" class="btn-delete" @click="handleDelete">&lt;&lt; 删除</Button>
        </div>
      </Col>
      <Col :span="10">
        <div class="grid-content">
          <div class="title">1-2</div>
          <div class="form">
            <Input v-model="filterVarias.lb">
              <Button slot="append" icon="el-icon-search"></Button>
            </Input>
          </div>
          <div class="table">
            <Table :data="rtTableData" max-height='400' :highlight-current-row='true' stripe>
              <TableColumn prop="id">
                <template slot-scope="scope">
                  <Radio v-model="radio.rt" :label="scope.row.id" @change="handlertRadioChange($event, scope.row)"/>
                </template>
              </TableColumn>
              <TableColumn prop="index" label="index"></TableColumn>
              <TableColumn prop="name" label="name"></TableColumn>
              <TableColumn prop="gender" label="gender"></TableColumn>
              <TableColumn prop="action" label="action"></TableColumn>
            </Table>
          </div>
        </div>
        <div class="grid-content">
          <div class="title">2-2</div>
          <div class="form">
            <Input v-model="filterVarias.rb">
              <Button slot="append" icon="el-icon-search"></Button>
            </Input>
          </div>
          <div class="table">
            <Table
              :data="rbTableData"
              max-height='400'
              :highlight-current-row='true'
              stripe
              @selection-change="handlerbSelectionChange"
            >
              <TableColumn type="selection"></TableColumn>
              <TableColumn prop="index" label="index"></TableColumn>
              <TableColumn prop="cnName" label="cnName"></TableColumn>
              <TableColumn prop="enName" label="enName"></TableColumn>
            </Table>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Table, TableColumn, Form, FormItem, Row, Col, Button, Input, Radio } from 'element-ui'
// import { compareArr } from './util'
export default {
  name: 'table-cascader',
  components: {
    Table,
    TableColumn,
    Form,
    FormItem,
    Row,
    Col,
    Button,
    Input,
    Radio
  },
  data() {
    return {
      filterVarias: {
        lt: '',
        rt: '',
        lb: '',
        rb: ''
      },
      // 实际渲染数据
      ltTableData: [],
      rtTableData: [],
      lbTableData: [],
      rbTableData: [],
      // 单选 1-1 1-2
      radio: {
        lt: '',
        rt: ''
      },
      // 多选 2-1 2-2
      selection: {
        lb: '',
        rb: ''
      },
      // 选中的中间值
      save: {
        ltSelected: {},
        rtSelected: {},
        lbSelected: [],
        rbSelected: [],
        // 2-2 总数据
        rbAllData: [],
        // 1-1 表格的 index
        ltIndex: 0,
        // 1-2 表格的 index
        rtIndex: 0
      },
      // 每份数据中添加属性，唯一标识，例如 'flag'
      propertiesAdd: {
        ltTableData: [],
        rtTableData: [],
        lbTableData: [],
        rbTableData: []
      }
    }
  },
  created() {
    this.renderltTable()
  },
  methods: {
    // 四个表格渲染
    // 1-1 表格渲染
    renderltTable() {
      let data = []
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i,
          index: i,
          name: 'nan',
          gender: 22,
          action: 'dance'
        })
      }
      // 为后端数据添加唯一标识属性flag
      this.ltTableData = data.map((v, index) => {
        return { ...v, flag: index }
      })
      // console.log(this.ltTableData)
    },
    // 1-2 表格渲染
    renderrtTable() {},
    // 2-1 表格渲染
    renderlbTable(param) {
      const { id } = param
      let data = []
      for (let i = 0; i < 20; i++) {
        data.push({
          id: id + '-' + i,
          index: i,
          cnName: '中文名',
          enName: 'enName'
        })
      }
      // console.log(this.save.rbAllData, this.save.ltIndex)
      this.lbTableData = data.filter(v => {
        if (Array.isArray(this.save.rbAllData[this.save.ltIndex])) {
          return !this.save.rbAllData[this.save.ltIndex].map(v => v.id).includes(v.id)
        }
        return true
      })
    },
    // 2-2 表格渲染
    renderrbTable() {},
    // 四个表格的单选与多选操作
    // 1-1 表格单选
    handleltRadioChange(index, row) {
      console.log(index, row)
      this.save.ltSelected = row
      this.save.ltIndex = index
      const param = {...row}
      this.renderlbTable(param)
    },
    // 1-2 表格单选
    handlertRadioChange(index, row) {
      console.log(index, row)
      this.save.rtIndex = index
      this.save.rtSelected = row
      this.rbTableData = this.save.rbAllData[this.save.rtIndex]
    },
    // 2-1 表格多选
    handlelbSelectionChange(val) {
      console.log(val)
      this.save.lbSelected = val
    },
    // 2-2 表格多选
    handlerbSelectionChange(val) {
      this.save.rbSelected = val
    },
    // 添加
    handleAdd() {
      // 1-1 表格渲染
      // 2-1 表格渲染
      // 1-2 表格渲染
      // 2-2 表格渲染
      console.log(this.save)
      // 2-1 表格未选择，则添加无效
      if (this.save.lbSelected.length === 0) {
        return false
      }
      // 2-1
      this.lbTableData = this.lbTableData.filter(v => {
        return !this.save.lbSelected.map(v => v.id).includes(v.id)
      })
      // 1-1
      if (this.lbTableData.length === 0) {
        this.ltTableData = this.ltTableData.filter(v => {
          return v.id !== this.save.ltSelected.id
        })
      }
      // 1-2
      if (!this.rtTableData.map(v => v.id).includes(this.save.ltSelected.id)) {
        this.rtTableData.push(this.save.ltSelected)
        this.rtTableData = this.rtTableData.sort((a, b) => a.id - b.id)
      }

      // 2-2
      console.log(this.save.ltIndex)
      if (!Array.isArray(this.save.rbAllData[this.save.ltIndex])) {
        this.save.rbAllData[this.save.ltIndex] = []
      }
      this.save.rbAllData[this.save.ltIndex].push(...this.save.lbSelected)
      this.rbTableData = this.save.rbAllData[this.save.ltIndex].sort((a, b) => a.index - b.index)
    },
    // 删除
    handleDelete() {
      // 2-2 表格未选择，则删除无效
      if (this.save.rbSelected.length === 0) {
        return false
      }
      // 2-2
      this.rbTableData = this.rbTableData.filter(v => {
        return !this.save.rbSelected.map(v => v.id).includes(v.id)
      })
      // 1-1
      if (!this.ltTableData.map(v => v.id).includes(this.save.rtSelected.id)) {
        this.ltTableData.push(this.save.rtSelected)
        this.ltTableData = this.ltTableData.sort((a, b) => a.id - b.id)
      }
      // 1-2
      if (this.rbTableData.length === 0) {
        this.rtTableData = this.rtTableData.filter(v => {
          return v.id !== this.save.rtSelected.id
        })
      }
      // 2-1
      if (Array.isArray(this.save.rbAllData[this.save.rtIndex])) {
        this.save.rbAllData[this.save.rtIndex] = this.save.rbAllData[this.save.rtIndex].filter(v => {
          return !this.save.rbSelected.map(v => v.id).includes(v.id)
        })
      }
    }
  }
}
</script>
<style lang="less">
.cascader-container {
  background: #fff;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
}
.operate-container {
  position: absolute;
  width: 135px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
  text-align: center;
  .btn-delete {
    margin-top: 20px;
  }
  .el-button+.el-button {
    margin-left: 0px;
  }
}
.el-input {
  width: 300px;
}
.grid-content {
  border-radius: 4px;
  border: 1px solid #F5F7FA;
}
.el-table {
  min-height: 400px;
  // max-height: 400px;
}
.table {
  min-height: 400px;
}
</style>
