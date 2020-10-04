const routes = [
  {
    path: '/auth', redirect: 'auth/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Auth/Login/Index'), name: '로그인' },
      { path: 'sign_up/:step', component: () => import('pages/Auth/SignUp/Index'), name: '회원가입' },
      { path: 'sign_up/terms_condition/:condition_name', component: () => import('pages/Auth/SignUp/TermsCondition'), name: '' },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'home', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'reservation', component: () => import('pages/Reservation/Index'), name: 'reservation' },
      { path: 'reservation/detail', component: () => import('pages/Reservation/Detail/Index'), name: 'reservation_detail', heading_name: '예약상세보기' },
      { path: 'search', component: () => import('pages/Search/Index'), name: 'search' },
      { path: 'my_page', component: () => import('pages/MyPage/Index'), name: 'my_page' },
      { path: 'store', redirect: 'store/detail'},
      { path: 'store/detail', component: () => import('pages/Store/Index'), name: 'store_detail' },
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
      { path: 'due-date', component: () => import('pages/RequestEstimate/DueDate/Index'), name: 'due_date' },
      { path: 'picture-space', component: () => import('pages/RequestEstimate/PictureSpace/Index'), name: 'picture_space' },
      { path: 'complete-estimate', component: () => import('pages/RequestEstimate/CompleteEstimate/Index'), name: 'complete_estimate' }
    ]
  },
  { path: '/my-account', component: () => import('pages/MyPage/MyAccount/Index'), name: 'my_account' },
  { path: '/my-account/phone-change', component: () => import('pages/MyPage/MyAccount/CellPhoneChange/Index'), name: 'account_phone_change' },
  { path: '/interested-company', component: () => import('pages/MyPage/InterestedCompany/Index'), name: 'interested_company' },
  { path: '/company-inquire', component: () => import('pages/MyPage/Inquire/Index'), name: 'company_inquire' },
  { path: '/work-schedule', component: () => import('pages/MyPage/WorkSchedule/Index'), name: 'work_schedule' },
  { path: '/notice', component: () => import('pages/MyPage/Notice/Index'), name: 'notice' },
  { 
    path: '/expert-signup', redirect: 'expert-signup/terms-condition', 
    component: () => import('layouts/ExpertSignup'),
    children: [
      { path: 'terms-condition', component: () => import('pages/ExpertSignup/TermsCondition/Index'), name: 'terms_condition' },
      { path: 'company-information', component: () => import('pages/ExpertSignup/CompanyInformation/Index'), name: 'company_information' },
      { path: 'company-address', component: () => import('pages/ExpertSignup/CompanyAddress/Index'), name: 'company_address' },
      { path: 'service-area', component: () => import('pages/ExpertSignup/ServiceArea/Index'), name: 'service_area' },
      { path: 'representative-service', component: () => import('pages/ExpertSignup/RepresentativeService/Index'), name: 'representative_service' },
      { path: 'proof-company', component: () => import('pages/ExpertSignup/ProofCompany/Index'), name: 'proof_company' },
    ]
  },
  { path: '/expert-signup/registration-completed', component: () => import('pages/ExpertSignup/RegistrationCompleted/Index'), name: 'registration_completed' },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
