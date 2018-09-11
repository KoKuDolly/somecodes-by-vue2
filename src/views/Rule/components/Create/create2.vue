<template>
  <Card class="variaries-add-con">
    <div class="list-header">
      <h3>选择变量</h3>
      <Form :label-width="150">
        <FormItem label="已上线变量">
        </FormItem>
        <FormItem label="已选数据产品">
          <Input style="width: 200px;"/>
          <Icon type="md-add" class="icon-style"/>
        </FormItem>
      </Form>
    </div>
    <div class="list-body">
      <my-transfer :data="ruleVariariesData" :title="title"></my-transfer>
    </div>
  </Card>
</template>
<script>
import myTransfer from '@/views/Rule/components/common/my-transfer.vue'
import {ruleVariariesData} from '@/views/Rule/components/common/table_data.js'
export default {
  name: 'variaries_add',
  components: {myTransfer},
  data () {
    return {
      ruleVariariesData,
      title: ['变量选择列表', '已选变量']
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
/* only */
</style>
