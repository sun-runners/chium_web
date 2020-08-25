const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'home', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'reservation', component: () => import('pages/Reservation/Index'), name: 'reservation' },
      { path: 'reservation/detail', component: () => import('pages/Reservation/Detail/Index'), name: 'reservation_detail' },
      { path: 'search', component: () => import('pages/Search/Index'), name: 'search' },
      { path: 'my_page', component: () => import('pages/MyPage/Index'), name: 'my_page' },
      { path: 'store', component: () => import('pages/Store/Index'), name: 'store' },
      { path: 'store/review', component: () => import('pages/Store/Review/Index'), name: 'store_review' },
      { path: 'store/work', component: () => import('pages/Store/Work/Index'), name: 'store_work' },
      { path: 'store/inquiry', component: () => import('pages/Store/Inquiry/Index'), name: 'store_inquiry' },
      { path: 'store/inquiry/detail', component: () => import('pages/Store/Inquiry/Detail/Index'), name: 'store_inquiry_detail' },
    ]
  },
  { 
    path: '/request-estimate', redirect: 'request-estimate/space-type', 
    component: () => import('layouts/RequestEstimate'),
    children: [
      { path: 'space-type', component: () => import('pages/RequestEstimate/SpaceType/Index'), name: 'space_type' },
      { path: 'floor-space', component: () => import('pages/RequestEstimate/FloorSpace/Index'), name: 'floor_space' },
      { path: 'work-type', component: () => import('pages/RequestEstimate/WorkType/Index'), name: 'work_type' },
      { path: 'due-date', component: () => import('pages/RequestEstimate/DueDate/Index'), name: 'due_date' }
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
