import Main from '@/views/Main.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登陆'
  },
  component: () => import('@/views/login.vue')
}
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    }
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
  }
]

export const routers = [
  loginRouter,
  otherRouter,
  ...appRouter
]
