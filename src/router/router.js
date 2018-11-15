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
      {path: 'G6', icon: 'logo-googleplus', title: 'G6', name: 'G6', component: () => import('@/views/AntV/G6/')}
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