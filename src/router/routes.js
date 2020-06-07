
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'home', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'search', component: () => import('pages/Search/Index'), name: 'search' },
      { path: 'mypage', component: () => import('pages/MyPage/Index'), name: 'myPage' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
