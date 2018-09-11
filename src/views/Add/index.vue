<template>
  <div class="router-body">
    <PBreadcrumb></PBreadcrumb>
    <div class="router-body-inner">
      <div class="list-header">
        <h3>基本信息</h3>
        <Form ref="formRole" :model="formRole" :rules="ruleForm" :label-width="150">
          <FormItem label="角色名称" prop="roleName">
            <Input type="text" style="width:300px;" placeholder="请输入20个字符以内,中/英/数字,不可重复" v-model="formRole.roleName" />
          </FormItem>
          <FormItem label="角色状态">
            <RadioGroup style="width:300px;" v-model="formRole.roleStatus">
              <Radio label="1">启用</Radio>
              <Radio label="0">禁用</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="页面权限设置">
            <Role-Tree :data="formRole.pageAuth" @treeSelect="typeTreeSelect"></Role-Tree>
          </FormItem>
          <FormItem label="分配资源">
            <Checkbox v-model="formRole.resource">分配子产品</Checkbox>
            <Tooltip placement="right">
              <Icon type="ios-information"></Icon>
              <div slot="content">
                <p>若未勾选，则默认该角色的产品资源</p>
                <p>与主管理员角色的子产品资源一致。</p>
              </div>
            </Tooltip>
          </FormItem>
          <FormItem v-if="formRole.resource">
            <Tabs type="card" :animated="false">
              <TabPane label="贷前管理购买产品">
                <Tab-Table :columns="dqColumns" :data="tableDQData" @typeSelectChange="selectChange"></Tab-Table>
              </TabPane>
              <TabPane label="验证管理购买产品">
                <Tab-Table :columns="dqColumns" :data="tableYZData" @typeSelectChange="selectChange"></Tab-Table>
              </TabPane>
              <TabPane label="贷中管理购买产品">
                <Tab-Table :columns="dqColumns" :data="tableDZData" @typeSelectChange="selectChange"></Tab-Table>
              </TabPane>
            </Tabs>
          </FormItem>
          <FormItem label="是否具有分配资源权限">
            <RadioGroup style="width:300px;" v-model="formRole.resourceAuth">
              <Radio label="1">是</Radio>
              <Radio label="0">否</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="formSubmit">确认</Button>
            <Button @click="() => {this.$router.go(-1)}">返回</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import { PBreadcrumb } from '@bairong/jax'
import {dqColumns} from './columns'
import TabTable from './TabTable/'
import RoleTree from './RoleTree/'
import {tableDQData, tableYZData, tableDZData} from './data/table_data'

export default {
  name: 'RoleListAdd',
  components: {PBreadcrumb, TabTable, RoleTree},
  computed: {
    ...mapGetters('roleList', ['getAllResourceTreeArr'])
  },
  watch: {
    getAllResourceTreeArr (current, previous) {
      this.formRole.pageAuth = current
    }
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      formRole: {
        roleName: '',
        roleStatus: '1',
        pageAuth: [],
        resource: false,
        resourceData: {
          'DQ': [],
          'YZ': [],
          'DZ': []
        },
        resourceAuth: '1'
      },
      ruleForm: {
        roleName: [
          {required: true, message: '请输入角色名称', trigger: 'blur'},
          {pattern: /^([A-z]|\d|[^\000-\255]){1,20}$/, message: '输入格式有误', trigger: 'blur'}
        ]
      },
      // /^([A-z\d\u4e00-\u9fa5]){1,20}$/
      dqColumns: dqColumns,
      tableDQData: [],
      tableYZData: [],
      tableDZData: [],
      selectAuth: '',
      roleListName: 'add'
    }
  },
  methods: {
    ...mapActions('roleList', ['getAllResourceTree', 'addRole', 'editRole']),
    init () {
      this.deliverData()
    },
    deliverData () {
      const name = this.$route.name
      switch (name) {
        case 'add':
          this.roleListName = 'add'
          this.getAllResourceTree()
          this.handleTabTableData()
          break
        case 'edit':
          this.roleListName = 'edit'
          this.getAllResourceTree()
          this.handleTabTableData()
          break
        case 'check':
          this.roleListName = 'check'
          this.getAllResourceTree()
          this.handleTabTableData()
          break
      }
    },
    handleParams () {
      let param = JSON.parse(JSON.stringify(this.formRole))
      param.pageAuth = this.selectAuth
      return param
    },
    typeTreeSelect (selectIdArr) {
      const selectId = selectIdArr.toString()
      this.selectAuth = selectId
    },
    validateForm () {
      let flag = false
      this.$refs['formRole'].validate(valid => {
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    },
    formSubmit () {
      const isOk = this.validateForm()
      const param = this.handleParams()
      const name = this.roleListName
      if (isOk) {
        if (!param.pageAuth.length) {
          this.$Message.success('请至少勾选一个权限!')
          return false
        }
        name === 'add' ? this.addRole(param) : this.editRole(param)
      } else {
        this.$Message.error('角色名称输入有误!')
      }
    },
    selectChange (selection, id, range) {
      // console.log(selection, id, range)
      let param = JSON.parse(JSON.stringify(selection))
      param.push({range})
      switch (id) {
        case 'DQ':
          this.formRole.resourceData.DQ = param
          break
        case 'YZ':
          this.formRole.resourceData.YZ = param
          break
        case 'DZ':
          this.formRole.resourceData.DZ = param
          break
      }
    },
    handleTabTableData () {
      this.tableDQData = [{name: 'DQ'}, ...tableDQData]
      this.tableYZData = [{name: 'YZ'}, ...tableYZData]
      this.tableDZData = [{name: 'DZ'}, ...tableDZData]
    }
    // return {};
  }
};
</script>
<style lang="less" scoped>

</style>
