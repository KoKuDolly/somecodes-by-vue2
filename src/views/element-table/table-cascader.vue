<!--
 * @Descripttion:
 * @version:
 * @Author: jiajun.qin
 * @Date: 2020-01-07 20:32:32
 * @LastEditors  : jiajun.qin
 * @LastEditTime : 2020-01-07 20:48:01
 -->
<template>
  <div>
    <Row>
      <Col :span="10">
        <Table>
          <TableColumn></TableColumn>
        </Table>
      </Col>
      <Col :span="10">
        <Table>
          <TableColumn></TableColumn>
        </Table>
      </Col>
    </Row>
    <Row>
      <Col :span="10">
        <Table>
          <TableColumn></TableColumn>
        </Table>
      </Col>
      <Col :span="10">
        <Table>
          <TableColumn></TableColumn>
        </Table>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Table, TableColumn, Form, FormItem, Row, Col } from 'element-ui'
export default {
  name: 'table-cascader',
  components: {
    Table,
    TableColumn,
    Form,
    FormItem,
    Row,
    Col
  }
}
</script>
<style lang="less">

</style>
