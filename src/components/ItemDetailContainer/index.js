import React from 'react'
import ItemDetail from '../ItemDetail';
import { useState, useEffect } from 'react'
import { customFetch } from '../../assets/customFetch';
import { productos } from '../../assets/productos';

const ItemDetailContainer = (producto) => {

    const [productoDetail,setProductoDetail] = useState();
    const [loading,setLoading] = useState(false);
    const itemRandom = parseInt(Math.random()*4);
    

    useEffect(() => {
        const pedido = new Promise((res,rej) => {
            setTimeout(() => {
                res(
                setLoading(true),
                setProductoDetail(productos[itemRandom])
                )
            },2000)
        })
      },[])

  return (
    <>
        {!loading && <div>cargando...</div>}
        {loading && <ItemDetail productoDetail = {productoDetail}/>}
    </>
  )
}

export default ItemDetailContainer