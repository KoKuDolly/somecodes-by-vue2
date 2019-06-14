import Main from '@/views/Main.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登陆'
  },
  component: () => import('@/views/login.vue')
}

export const locking = {
  path: '/locking',
  name: 'locking',
  component: () => import('@/views/main-components/lock-screen/components/locking-page.vue')
}

export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {path: 'home', title: '首页', name: 'home_index', component: () => import('@/views/home/home.vue')},
    {path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/')}
  ]
}

export const appRouter = [
  {
    path: '/AntV',
    name: 'AntV',
    title: 'AntV',
    icon: 'logo-buffer',
    component: Main,
    children: [
      {path: 'G2', icon: 'logo-googleplus', title: 'G2', name: 'G2', component: () => import('@/views/AntV/G2/')},
      {path: 'G6', icon: 'logo-googleplus', title: 'G6', name: 'G6', component: () => import('@/views/AntV/G6/')},
      {path: 'canvas', icon: 'logo-googleplus', title: 'canvas', name: 'canvas', component: () => import('@/views/Canvas/')},
      {path: 'eslint', icon: 'logo-googleplus', title: 'eslint', name: 'eslint', component: () => import('@/views/Eslint/')}
    ]
  },
  {
    path: '/Mock',
    name: 'Mock',
    title: 'Mock',
    icon: 'logo-buffer',
    component: Main,
    children: [
      {path: 'mock-index', icon: 'logo-googleplus', title: 'Mock', name: 'mockIndex', component: () => import('@/views/Mock/'), children: []}
    ]
  },
  {
    path: '/element-components',
    name: 'element-components',
    title: 'elements',
    icon: 'logo-buffer',
    component: Main,
    children: [
      {
        path: 'table-one',
        icon: 'logo-googleplus',
        title: 'table-one',
        name: 'tableOne',
        component: () => import('@/views/element-table/table-one'),
        children: []
      },
      {
        path: 'table-two',
        icon: 'logo-googleplus',
        title: 'table-two',
        name: 'tableTwo',
        component: () => import('@/views/element-table/table-two'),
        children: []
      },
      {
        path: 'table-three',
        icon: 'logo-googleplus',
        title: 'table-three',
        name: 'tableThree',
        component: () => import('@/views/element-table/table-three'),
        children: []
      }
    ]
  },
  {
    path: '/multipleView',
    name: 'multipleView',
    title: 'multipleView',
    icon: 'logo-buffer',
    component: Main,
    children: [
      {
        path: 'more',
        icon: 'logo-googleplus',
        title: 'multipleView_more',
        name: 'multipleView_more',
        components: {
          default: () => import('@/views/multipleView/components/a.vue'),
          b: () => import('@/views/multipleView/components/a.vue'),
          c: () => import('@/views/multipleView/components/c.vue')
        },
        children: []
      }
    ]
  },
  {
    path: '/Rule',
    name: 'Rule',
    title: 'Rule',
    icon: 'logo-buffer',
    redirect: '/Rule/Rules',
    component: Main,
    children: [
      {
        path: 'Rules',
        icon: 'logo-googleplus',
        title: 'Rules',
        redirect: '/Rule/Rules/Rules_index',
        name: 'Rules_home',
        component: () => import('@/views/Rule/index.vue'),
        children: [
          {
            path: 'Rules_index',
            title: 'Rules_index',
            name: 'Rules_home',
            component: () => import('@/views/Rule/components/index.vue')
          },
          {
            path: 'variaries_add',
            title: 'variaries_add',
            name: 'variaries_add',
            component: () => import('@/views/Rule/components/Create/index.vue')
          }
        ]
      }
    ]
  }
]

export const routers = [
  loginRouter,
  otherRouter,
  ...appRouter,
  locking
]
