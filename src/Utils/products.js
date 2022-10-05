const products = [
    {id: 1, name:'caramelo', description:'string', stock:'number'},
    {id: 1, name:'chocolate', description:'string', stock:'number'},
    {id: 1, name:'paleta', description:'string', stock:'number'},
    {id: 1, name:'gomitas', description:'string', stock:'number'}
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout (() => {
        return resolve (products);
    }, 2000)
    })

    return promise
};

export const getProducts = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout (() => {
            return resolve (result);
        }, 2000)
    })

    return promise
};