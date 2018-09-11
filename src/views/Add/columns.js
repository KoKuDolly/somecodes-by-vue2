export const dqColumns = [
  {
    type: 'selection',
    width: 60
  },
  {
    type: 'index',
    title: '序号',
    width: 60
  },
  {
    title: '产品名称',
    key: 'productName'
  },
  {
    title: '类别',
    key: 'feature',
    filters: [
      {
        label: '规则集',
        value: '1'
      },
      {
        label: '风险识别(评分)',
        value: '2'
      },
      {
        label: '基础数据',
        value: '3'
      }
    ],
    filterMultiple: false,
    filterMethod (value, row) {
      switch (+value) {
        case 1:
          return row.feature === 'ruleSet'
        case 2:
          return row.feature === 'fxsb'
        case 3:
          return row.feature === 'baseData'
      }
    }
  },
  {
    title: '产品代号',
    key: ''
  },
  {
    title: '产品版本',
    key: ''
  },
  {
    title: '类型',
    key: ''
  },
  {
    title: '开通总条数',
    key: ''
  }
]
