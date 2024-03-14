import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const[productDetail, setProductDetail] = useState({})    
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(() => {
    setLoading(true)
    getOneProduct(itemId)
    .then((res) => setProductDetail(res))
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    },[])
    
    if(loading){
        return <h1>Cargando...</h1>
      }

      if(error){
        return <h1>Hubo un error, intente mas tarde</h1>
      }

    return (
        <ItemDetail productDetail={productDetail}></ItemDetail>  
    )
}

export default ItemDetailContainer