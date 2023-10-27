import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>Id: {id} </h3>
            <img src={img} alt={nombre} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt obcaecati cum ratione ad, error ut quo doloribus blanditiis esse autem officia id, quia delectus adipisci reprehenderit sapiente qui, dolorum recusandae quisquam assumenda aspernatur laboriosam consequatur architecto? Soluta esse incidunt provident minima dignissimos, at, odit delectus numquam nam aut in.
            </p>
        </div>  
    )    
}
    
export default ItemDetail