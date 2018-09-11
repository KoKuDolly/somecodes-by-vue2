<template>
  <div>
    <Tabs type="card" :animated="false">
      <TabPane label="规则变量">
        <tab-page-content :columns="ruleVariaColumns" :data="ruleVariariesData" :id="'rulevaria'"></tab-page-content>
      </TabPane>
      <TabPane label="规则">
        <tab-page-content :columns="ruleColumns" :data="ruleData" :id="'rule'"></tab-page-content>
      </TabPane>
      <TabPane label="规则集">
        <tab-page-content :columns="ruleSetColumns" :data="ruleSetData" :id="'ruleset'"></tab-page-content>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import tabPageContent from '@/views/Rule/components/TabPage/tab-page-content.vue'
import {ruleVariaColumns, ruleColumns, ruleSetColumns} from '@/views/Rule/components/common/columns.js'
import {ruleVariariesData, ruleData, ruleSetData} from '@/views/Rule/components/common/table_data.js'
export default {
  name: 'rule_index',
  components: {tabPageContent},
  data () {
    return {
      ruleVariaColumns,
      ruleVariariesData,
      ruleColumns,
      ruleData,
      ruleSetColumns,
      ruleSetData
    }
  },
  methods: {}
}
</script>
<style lang="less">
/* only comments */
</style>
