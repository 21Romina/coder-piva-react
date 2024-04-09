import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
const ItemDetail = ({productDetail}) => {
    function formatearPesoArgentino(amount) {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
      }
      const [purchase, setPurchase] = useState(false) 
      const {addItem, itemQuantity} = useContext(CartContext)

      const onAdd = (cantidad) => {
        addItem(productDetail,cantidad)
        setPurchase(true);
      }

      const stockInCart = itemQuantity(productDetail.id)
      
  return (
    <div>
      <h3>Detalle de: {productDetail.name}</h3>
      <img src={productDetail.img} alt={productDetail.name} />
      <p>{productDetail.description}</p>
      <p>{formatearPesoArgentino(productDetail.price)}</p>
      {purchase 
      ? <Link className='btn btn-success' to='/cart'>Ir al carrito</Link> 
      : <ItemCount stock={productDetail.stock - stockInCart} onAdd={onAdd}></ItemCount>}
    </div>
  )
}

export default ItemDetail
