import axios from 'axios'
import Vue from 'vue'
import { BASE_URL } from '@/config'
import ViewUI from 'view-design';
Vue.use(ViewUI);
const instance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(function (config) {
    ViewUI.LoadingBar.start();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    ViewUI.LoadingBar.finish();
    return response;
}, function (error) {
    ViewUI.LoadingBar.error();
    return Promise.reject(error);
});
export default instance