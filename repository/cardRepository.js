const cardRepository = (fetch) => ({
    page: function (body) {
        return fetch('/v1/order/card/getUserCardPackage', {
            method: 'POST',
            body,
        })
    },

    getUserCardPackageRcardInfo: function (body) {
        return fetch('/v1/order/card/getUserCardPackageRcardInfo', {
            method: 'POST',
            body,
        })
    },
})

export default cardRepository;