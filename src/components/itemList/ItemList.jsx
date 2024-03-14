import React from 'react'
import Item from '../item/Item'
const ItemList = ({productos}) => {
    //Se encarga de hacer un map

    return (
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
        {productos.map((prod)=> 
           <Item key={prod.id} prod={prod}></Item>
        )}
        </div>
    )
}

export default ItemList