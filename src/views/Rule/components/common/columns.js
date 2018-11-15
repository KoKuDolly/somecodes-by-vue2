export const ruleVariaColumns = [
  {
    type: 'index',
    width: 60
  },
  {
    title: '规则变量中文名称',
    key: 'variaNameCn',
    minWidth: 200
  },
  {
    title: '规则变量英文名称',
    sortable: true,
    key: 'variaNameEn',
    minWidth: 200
  },
  {
    title: '数据源',
    key: 'dataSource',
    minWidth: 120
  },
  {
    title: '依赖产品中文名称',
    key: 'relateNameCn',
    minWidth: 200
  },
  {
    title: '依赖产品英文名称  版本号',
    key: 'relateNameEnVersion',
    minWidth: 200
  },
  {
    title: '变量状态',
    key: 'variariesStatus',
    minWidth: 120
  },
  {
    title: '引用次数',
    key: 'quoteNum',
    sortable: true,
    minWidth: 120
  },
  {
    title: '操作',
    minWidth: 200
  }
]

export const ruleColumns = [
  {
    type: 'index',
    width: 60
  },
  {
    title: '规则名称',
    key: 'ruleName',
    sortable: true
  },
  {
    title: '依赖规则变量的中文名称',
    sortable: true,
    key: 'relateRuleNameCn'
  },
  {
    title: '依赖规则变量的英文名称',
    key: 'relateRuleNameEn'
  },
  {
    title: '所属规则集',
    key: 'ruleSet'
  },
  {
    title: '规则状态',
    key: 'ruleStatus',
    sortable: true
  },
  {
    title: '规则权重',
    key: 'rueWeight',
    sortable: true
  },
  {
    title: '操作'
  }
]

export const ruleSetColumns = [
  {
    type: 'index',
    width: 60
  },
  {
    title: '业务大类',
    key: 'businessCategory',
    sortable: true
  },
  {
    title: '业务类型',
    key: 'businessType'
  },
  {
    title: '规则集中文名称',
    key: 'ruleSetNameCn'
  },
  {
    title: '规则集英文名称',
    key: 'ruleSetNameEn'
  },
  {
    title: '版本号',
    key: 'version'
  },
  {
    title: '依赖规则名称',
    key: 'relateRuleName'
  },
  {
    title: '依赖数据产品',
    key: 'relateDataPro'
  },
  {
    title: '规则集状态',
    key: 'ruleSetStatus'
  },
  {
    title: '操作'
  }
]

export default {
  ruleVariaColumns,
  ruleColumns,
  ruleSetColumns
}
