import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
    function formatearPesoArgentino(amount) {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
      }
      
  return (
    <div>
      <h3>Detalle de: {productDetail.name}</h3>
      <img src={productDetail.img} alt={productDetail.name} />
      <p>{productDetail.description}</p>
      <p>{formatearPesoArgentino(productDetail.price)}</p>
      <ItemCount stock={productDetail.stock}></ItemCount>
    </div>
  )
}

export default ItemDetail
