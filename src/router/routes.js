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
    ]
  },
  {
    path: '/request', redirect: '/request/waste',
    component: () => import('layouts/RequestEstimate.vue'),
    children: [
      { path: 'waste', component: () => import('pages/Request/Waste/Index.vue'), name: 'waste'},
      // step Two
      { path: 'waste/two/household', component: () => import('pages/Request/Waste/StepTwo/household.vue') },
      { path: 'waste/two/workplace', component: () => import('pages/Request/Waste/StepTwo/workplace.vue') },
      { path: 'waste/two/construction', component: () => import('pages/Request/Waste/StepTwo/construction.vue') },
      // step Three
      { path: 'waste/three/household', component: () => import('pages/Request/Waste/StepThree/household.vue') },
      { path: 'waste/three/workplace', component: () => import('pages/Request/Waste/StepThree/workplace.vue') },
      { path: 'waste/three/construction', component: () => import('pages/Request/Waste/StepThree/construction.vue') },
      // step Four
      { path: 'waste/four/household', component: () => import('pages/Request/Waste/StepFour/household.vue') },
      { path: 'waste/four/workplace', component: () => import('pages/Request/Waste/StepFour/workplace.vue') },
      { path: 'waste/four/construction', component: () => import('pages/Request/Waste/StepFour/construction.vue') },
      // step Final
      { path: 'waste/final/household', component: () => import('pages/Request/Waste/FinalStep/household.vue') },
      { path: 'waste/final/workplace', component: () => import('pages/Request/Waste/FinalStep/workplace.vue') },
    ]
  },
  { 
    path: '/store', redirect: 'store/detail', 
    component: () => import('layouts/StoreLayout'),
    children: [
      { path: 'detail', component: () => import('pages/Store/Index'), name: 'store_detail' },
      { path: 'review', component: () => import('pages/Store/Review/Index'), name: 'store_review' },
      { path: 'work', component: () => import('pages/Store/Work/Index'), name: 'store_work' },
      { path: 'inquiry', component: () => import('pages/Store/Inquiry/Index'), name: 'store_inquiry' },
      { path: 'inquiry/detail', component: () => import('pages/Store/Inquiry/Detail/Index'), name: 'store_inquiry_detail' },
    ]
  },
  { path: '/store/review/detailed', component: () => import('pages/Store/Review/ReviewDetailed/Index'), name: 'store_review_detailed' },
  { path: '/store/review/photos', component: () => import('pages/Store/Review/ReviewPhotos/Index'), name: 'store_review_photos' },
  { path: '/store/company/detail', component: () => import('pages/Store/CompanyDetail/Index'), name: 'store_company_detail' },
  { path: '/store/company/report', component: () => import('pages/Store/CompanyReport/Index'), name: 'store_company_report' },
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
