import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({prod}) => {
    //Se encarga de hacer un map

    return (
        <div className='card' style={{width:'20rem'}}>
            <img className='card-img-top' src={prod.img} alt={prod.name} />
            <div className='card-body'>
                <p className='card-text'>{prod.name}</p>
            </div>
            <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver más</Link>
        </div>
        
    )
}

export default Item