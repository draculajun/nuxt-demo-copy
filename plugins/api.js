// 确定baseURL及拦截器
export default defineNuxtPlugin({
    setup() {
        const api = $fetch.create({
            baseURL: useRuntimeConfig().public.baseURL,
            onRequest({request, options, error}) {
                options.body = jsonToFormData(options.body);
                // if (session.value?.token) {
                const headers = options.headers ||= {}
                headers.channel = `11`
                headers.cid = `10992`
                headers.utoken = `Y3FnYWQ3NThoY2hhbW1icnZ1dTAxNzIxODA0NDQ0NTI5MTA5MDA3`
                // if (Array.isArray(headers)) {
                //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
                // } else if (headers instanceof Headers) {
                //     headers.set('Authorization', `Bearer ${session.value?.token}`)
                // } else {
                //     headers.Authorization = `Bearer ${session.value?.token}`
                // }
                // headers.Authorization = `Bearer TESTTOKEN`;
                // }
            },
            async onResponseError({response}) {
                console.log(response)
                // if (response.status === 401) {
                //     await nuxtApp.runWithContext(() => navigateTo('/login'))
                // }

                // if (!response.response.ok) {
                //     response.response._data = {
                //         code: -1,
                //         data: null,
                //         message: errorMsg,
                //     }
                // } else {
                //     if (response.response._data && response.response._data.code == 200) {

                //     }
                // }
            }
        })

        return {
            provide: {
                api
            }
        }
    }
})