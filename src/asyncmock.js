const articulos = [
    {id: "1", nombre: "Remera", precio: 3000, img: "../remera.jpg", idCart:"2" },
    {id: "2", nombre: "Camperita", precio: 10000, img:"../camperita.jpg", idCart:"3" },
    {id: "3", nombre: "Pantalon", precio: 5000, img:"../pantalon.jpg", idCart:"2" },
    {id: "4", nombre: "Buzos", precio: 12000,img: "../buzo.jpg", idCart:"3" },
];

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(articulos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = articulos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout(() => {
            const productosCategoria = articulos.filter(item => item.idCart === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}