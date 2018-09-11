<template>
  <Card class="variaries-add-con">
    <div class="list-header">
      <h3>变量组合</h3>
      <Form :label-width="150">
        <FormItem label="数据源">
          <CheckboxGroup>
            <Checkbox v-for="item in dataSource" :label="item.label" :key="item.label"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="数据产品支持的入参筛选">
          <Select placeholder="必填入参" style="width: 300px;" multiple filterable>
            <Option v-for="item in requiredParam" :key="item.value" :value="item.value">{{item.label}}</Option>
          </Select>
          <Select placeholder="非必填入参" style="width: 300px;" multiple filterable>
            <Option v-for="item in notRequiredParam" :key="item.value" :value="item.value">{{item.label}}</Option>
          </Select>
        </FormItem>
      </Form>
    </div>
    <div class="list-body">
      <my-transfer :data="ruleVariariesData"></my-transfer>
    </div>
  </Card>
</template>
<script>
import myTransfer from '@/views/Rule/components/common/my-transfer.vue'
import {dataSource} from '@/views/Rule/components/common/form_data.js'
import {requiredParam, notRequiredParam} from './data.js'
import {ruleVariariesData} from '@/views/Rule/components/common/table_data.js'
export default {
  name: 'variaries_add',
  components: {myTransfer},
  data () {
    return {
      dataSource,
      requiredParam,
      notRequiredParam,
      ruleVariariesData
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
/* only */
</style>
