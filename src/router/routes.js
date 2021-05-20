const routes = [
  {
    path: '/auth',
    redirect: 'auth/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Auth/Login/Index'), name: '로그인' },
      { path: 'sign_up/stepOne', component: () => import('pages/Auth/SignUp/StepOne.vue'), name: '회원가입' },
      { path: 'sign_up/stepTwo', component: () => import('pages/Auth/SignUp/StepTwo.vue'), name: '회원가입' },
      { path: 'sign_up/stepThree', component: () => import('pages/Auth/SignUp/StepThree.vue'), name: '회원가입' },
      { path: 'sign_up/stepFour', component: () => import('pages/Auth/SignUp/StepFour.vue'), name: '회원가입' },
      { path: 'sign_up/terms_condition/:condition_name', component: () => import('pages/Auth/SignUp/TermsCondition'), name: '' }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index'), name: 'home' },
      { path: 'home', redirect: '/' },
      { path: 'reservation', component: () => import('pages/Reservation/Index'), name: 'reservation' },
      { path: 'reservation/detail', component: () => import('pages/Reservation/Detail/Index'), name: 'reservation_detail', heading_name: '예약상세보기' },
      { path: 'search', component: () => import('pages/Search/Index'), name: 'search' },
      { path: 'my_page', component: () => import('pages/MyPage/Index'), name: 'my_page' },
      // Test
      { path: 'address', component: () => import('components/Address/Address'), name: 'address' }
    ]
  }, {
    path: '/request',
    redirect: '/request/waste',
    component: () => import('layouts/RequestEstimate.vue'),
    children: [
      { path: 'request_address', component: () => import('components/RequestEstimate/Common/Address/RequestAddress'), name: 'request_address'},
      { path: 'waste', component: () => import('pages/Request/Waste/Index.vue'), name: 'waste' },
      // step Two
      { path: 'waste/two/household', component: () => import('src/pages/Request/Waste/StepTwo/HouseholdWasteEnquiries.vue') },
      { path: 'waste/two/business', component: () => import('src/pages/Request/Waste/StepTwo/BusinessWasteEnquiries.vue') },
      { path: 'waste/two/construction', component: () => import('src/pages/Request/Waste/StepTwo/ConstructionWasteEnquiries.vue') },
      { path: 'waste/two/recycle', component: () => import('src/pages/Request/Waste/StepTwo/RecycleEnquiries.vue') },
      // step Three
      { path: 'waste/three/household', component: () => import('pages/Request/Waste/StepThree/HouseholdWasteEnquiries.vue') },
      { path: 'waste/three/business', component: () => import('pages/Request/Waste/StepThree/BusinessWasteEnquiries.vue') },
      { path: 'waste/three/construction', component: () => import('src/pages/Request/Waste/StepThree/ConstructionWasteEnquiries.vue') },
      { path: 'waste/three/recycle', component: () => import('src/pages/Request/Waste/StepThree/RecycleEnquiries.vue') },
      // step Four
      { path: 'waste/four/household', component: () => import('pages/Request/Waste/StepFour/HouseholdWasteEnquiries.vue') },
      { path: 'waste/four/business', component: () => import('pages/Request/Waste/StepFour/BusinessWasteEnquiries.vue') },
      { path: 'waste/four/construction', component: () => import('pages/Request/Waste/StepFour/ConstructionWasteEnquiries.vue') },
      { path: 'waste/four/recycle', component: () => import('src/pages/Request/Waste/StepFour/RecycleEnquiries.vue') },
      // step Five
      { path: 'waste/five/household', component: () => import('pages/Request/Waste/StepFive/HouseholdWasteEnquiries.vue') },
      { path: 'waste/five/business', component: () => import('pages/Request/Waste/StepFive/BusinessWasteEnquiries.vue') },
      { path: 'waste/five/construction', component: () => import('pages/Request/Waste/StepFive/ConstructionWasteEnquiries.vue') },
      { path: 'waste/five/recycle', component: () => import('src/pages/Request/Waste/StepFive/RecycleEnquiries.vue') },
      //  Six
      { path: 'waste/six/construction', component: () => import('pages/Request/Waste/StepSix/ConstructionWasteEnquiries.vue') },
      { path: 'waste/six/household', component: () => import('pages/Request/Waste/StepSix/HouseholdWasteEnquiries.vue') },
      { path: 'waste/six/business', component: () => import('pages/Request/Waste/StepSix/BusinessWasteEnquiries.vue') },

      //  Seven
      { path: 'waste/seven/construction', component: () => import('pages/Request/Waste/StepSeven/ConstructionWasteEnquiries.vue') },

      //   Eight
      { path: 'waste/eight/construction', component: () => import('pages/Request/Waste/StepEight/ConstructionWasteEnquiries.vue') },
      // step Final
      { path: 'waste/final/household', component: () => import('src/pages/Request/Waste/FinalStep/HouseholdWasteEnquiries.vue') },
      { path: 'waste/final/business', component: () => import('src/pages/Request/Waste/FinalStep/BusinessWasteEnquiries.vue') },
      { path: 'waste/final/construction', component: () => import('src/pages/Request/Waste/FinalStep/ConstructionWasteEnquiries.vue') },
      { path: 'waste/final/recycle', component: () => import('src/pages/Request/Waste/FinalStep/RecycleEnquiries.vue') },

      // demolition
      { path: 'demolition/one', component: () => import('pages/Request/Demolition/Index.vue'), name: 'demolition' },
      // step Two
      { path: 'demolition/two/interior', component: () => import('src/pages/Request/Demolition/StepTwo/interior.vue') },
      { path: 'demolition/two/building', component: () => import('src/pages/Request/Demolition/StepTwo/building.vue') },
      // step Three
      { path: 'demolition/three/interior', component: () => import('pages/Request/Demolition/StepThree/interior.vue') },
      { path: 'demolition/three/building', component: () => import('pages/Request/Demolition/StepThree/building.vue') },
      // step Four
      { path: 'demolition/four/interior', component: () => import('pages/Request/Demolition/StepFour/interior.vue') },
      { path: 'demolition/four/building', component: () => import('pages/Request/Demolition/StepFour/building.vue') },
       // step Five
      { path: 'demolition/five/interior', component: () => import('pages/Request/Demolition/StepFive/interior.vue') },
      { path: 'demolition/five/building', component: () => import('pages/Request/Demolition/StepFive/building.vue') },
      // step Six
      { path: 'demolition/six/interior', component: () => import('pages/Request/Demolition/StepSix/interior.vue') },
      { path: 'demolition/six/building', component: () => import('pages/Request/Demolition/StepSix/building.vue') },
      // step Seven
      { path: 'demolition/seven/interior', component: () => import('pages/Request/Demolition/StepSeven/interior.vue') },
      { path: 'demolition/seven/building', component: () => import('pages/Request/Demolition/StepSeven/building.vue') },
      // step Final
      { path: 'demolition/final/interior', component: () => import('pages/Request/Demolition/FinalStep/interior.vue') },
      { path: 'demolition/final/building', component: () => import('pages/Request/Demolition/FinalStep/building.vue') }
    ]
  }, {
    path: '/store',
    redirect: 'store/detail',
    component: () => import('layouts/StoreLayout'),
    children: [
      { path: 'detail', component: () => import('pages/Store/Index'), name: 'store_detail' },
      { path: 'review', component: () => import('pages/Store/Review/Index'), name: 'store_review' },
      { path: 'work', component: () => import('pages/Store/Work/Index'), name: 'store_work' },
      { path: 'inquiry', component: () => import('pages/Store/Inquiry/Index'), name: 'store_inquiry' },
      { path: 'inquiry/detail', component: () => import('pages/Store/Inquiry/Detail/Index'), name: 'store_inquiry_detail' }
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
    path: '/expert-signup',
    redirect: 'expert-signup/terms-condition',
    component: () => import('layouts/ExpertSignup'),
    children: [
      { path: 'terms-condition', component: () => import('pages/ExpertSignup/TermsCondition/Index'), name: 'terms_condition' },
      { path: 'company-information', component: () => import('pages/ExpertSignup/CompanyInformation/Index'), name: 'company_information' },
      { path: 'company-address', component: () => import('pages/ExpertSignup/CompanyAddress/Index'), name: 'company_address' },
      { path: 'service-area', component: () => import('pages/ExpertSignup/ServiceArea/Index'), name: 'service_area' },
      { path: 'representative-service', component: () => import('pages/ExpertSignup/RepresentativeService/Index'), name: 'representative_service' },
      { path: 'proof-company', component: () => import('pages/ExpertSignup/ProofCompany/Index'), name: 'proof_company' }
    ]
  },
  { path: '/expert-signup/registration-completed', component: () => import('pages/ExpertSignup/RegistrationCompleted/Index'), name: 'registration_completed' }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
