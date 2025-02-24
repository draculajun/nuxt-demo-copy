const digitalmallRepository = (fetch) => ({
    productPageList: function (body) {
        return fetch('/v1/product/product/getNewProducts', {
            method: 'POST',
            body,
        })
    },

    getUserCardPackage: function (body) {
        return fetch('/v1/order/card/getUserCardPackage', {
            method: 'POST',
            body,
        })
    },
})

export default digitalmallRepository;