// 全局路由导航的命名必须为global.js结尾
import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
    let token = null;
    let passUrl = ['/', '/login', '/index', '/about', '/cardList', '/cardDetail', '/t1', '/t2'];
    if (!passUrl.includes(to.path)) {
        if (import.meta.client) {
            token = localStorage.getItem('token');
            ElMessage.error('请先登录');
            return navigateTo('/login');
        }
        // if (!token) {
        //     // ElMessage.error('请先登录');
        //     return navigateTo({
        //             path: '/login',
        //             query: {
        //                 code: '401',
        //                 msg: '请先登录',
        //             }
        //         }
        //     );
        // }
    }

});