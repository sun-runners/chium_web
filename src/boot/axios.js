// Imports Section
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// Main Section
const instance = axios.create({})

// instance.defaults.baseURL = 'https://admin.chium.kr/api/'
instance.defaults.baseURL = 'http://127.0.0.1:9014/api/'
instance.defaults.timeout = 2500
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios = instance
Vue.prototype.$qs = qs
