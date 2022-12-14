import React from 'react'

const ItemDetail = ({productoDetail}) => {
  return (
    <>
        <div>{productoDetail.nombre}</div>
        <img src={productoDetail.imagen} alt={productoDetail.nombre} />
        <div>${productoDetail.precio}</div>
        <div>Stock disponible:{productoDetail.stock}</div>
        <div>{productoDetail.detalle}</div>
    </>
  )
}

export default ItemDetail