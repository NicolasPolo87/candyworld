export const products = [
    {id: 1, title:'caramelo', category: 'caramelos', description:'caramelitos de colores', price: 100, pictureUrl: 'https://www.c-ch.com/blog/wp-content/uploads/2019/03/caramelos-2-550-e1587145861507.png' , stock:'number'},
    {id: 2, title:'barras', category: 'chocolates', description:'barras varios sabores', price: 100, pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Dark_chocolate_bar.jpg/1024px-Dark_chocolate_bar.jpg' , stock:'number'},
    {id: 3, title:'paleta', category: 'caramelos', description:'paletas copadas', price: 100, pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Lollipop-Rainbox-Swirl.jpg' , stock:'number'},
    {id: 4, title:'gomitas', category: 'caramelos', description:'azucar gomosa cubierta de mas azucar', price: 100, pictureUrl: 'https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2017/05/443133.jpg' , stock:'number'},
    {id: 5, title:'bombones', category: 'chocolates', description:'rellenos de puro amor', price: 100, pictureUrl: 'http://blog.lacor.es/wp-content/uploads/2018/12/IMG_6642-750x500.jpg' , stock:'number'},

]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout (() => {
        return resolve (products);
    }, 2000)
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout (() => {
            return resolve (result);
        }, 2000)
    })

    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
        return resolve(results);
        }, 2000)
    })

    return promise
};