<template>
  <div>
    <div class="list-header clearfix">
      <div class="right header-edit">
        <!-- <Button :color="'blue'" icon="ios-create" style="color: green;">新建</Button>
        <Button color="blue" icon="md-cloud-upload" style="color: green;">批量上传</Button> -->
        <Button @click="() => this.$router.push({name: 'variaries_add'})">
          <Icon type="ios-create" :size="16" color="green"/>
          新建
        </Button>
        <Button v-if="id !== 'ruleset'">
          <Icon type="md-cloud-upload" :size="16" color="green" />
          批量上传
        </Button>
      </div>
      <div class="header-form">
        <Form :label-width="100" inline>
          <Row :gutter="10">
            <Col>
              <FormItem label="数据源">
                <my-select :data="dataSource"></my-select>
              </FormItem>
              <FormItem label="可编辑变量">
                <my-datePicker></my-datePicker>
              </FormItem>
            </Col>
            <Col>
              <FormItem label="数据产品版本">
                <my-select :data="dataProductVersion"></my-select>
              </FormItem>
              <FormItem label="搜索框">
                <my-search-input></my-search-input>
              </FormItem>
            </Col>
            <Col>
              <FormItem label="变量状态">
                <my-select :data="variariesStatus"></my-select>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    <div class="list-body">
      <Table :columns="tableColumns" :data="tableData" />
    </div>
  </div>
</template>
<script>
import mySelect from '@/views/Rule/components/common/my-select.vue'
import myDatePicker from '@/views/Rule/components/common/my-datePicker.vue'
import mySearchInput from '@/views/Rule/components/common/my-search-input.vue'
import {dataSource, dataProductVersion, variariesStatus} from '@/views/Rule/components/common/form_data.js'

export default {
  name: 'tabPageContent',
  components: {mySelect, myDatePicker, mySearchInput},
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      required: true
    }
  },
  watch: {
    columns (n) {
      this.tableColumns = [...n]
    },
    data (n) {
      this.tableData = [...n]
    },
    id (n) {
      console.log(n)
    }
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      dataSource,
      dataProductVersion,
      variariesStatus,
      tableColumns: [],
      tableData: []
    }
  },
  methods: {
    init () {
      this.tableColumns = [...this.columns]
      this.tableData = [...this.data]
      console.log(this.id)
    }
  }
}
</script>
<style lang="less">
/* only comments */
.header-edit {
  margin-right: 20px;
}

.header-form {
  margin-top: 20px;
}
</style>
