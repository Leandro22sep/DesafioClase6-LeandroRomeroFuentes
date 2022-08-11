const Item = ({producto}) => {
    return(
        <>
            <div>{producto.nombre}</div>
            <img src={producto.imagen} alt={producto.nombre} />
            <div>${producto.precio}</div>
            <button>Ver detalle</button>
        </>
    )
}
export default Item