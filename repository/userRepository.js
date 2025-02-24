const userRepository = (fetch) => ({
    list: function (body) {
        return fetch('/user/list', {
            method: 'POST',
            body,
        })
    },

    detail: function (id) {
        return fetch(`/user/${id}`, {
            method: 'GET',
        })
    },

    getMyAddrList: function (body) {
        return fetch('/v1/order/uorder/getMyAddrList', {
            method: 'POST',
            body,
        })
    },

})

export default userRepository;