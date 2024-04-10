import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
const ItemDetailContainer = () => {
    const[productDetail, setProductDetail] = useState({})    
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()
    const [validateItem, setValidateItem] = useState(false)
    useEffect(() => {
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const referenciaAlDoc = doc(collectionProd,itemId)
      getDoc(referenciaAlDoc)
      .then((res) => {
        if(res.data()){
          setProductDetail({id: res.id, ...res.data()})
        }else {
          setValidateItem(true)
        }
        
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }, [])



    //MOCK VIEJO
    // useEffect(() => {
    // setLoading(true)
    // getOneProduct(itemId)
    // .then((res) => setProductDetail(res))
    //     .catch((error) => {
    //       setError(error)
    //     })
    //     .finally(() => {
    //       setLoading(false)
    //     })
    // },[])
    
    if(loading){
        return <h1>Cargando...</h1>
      }

      if(error){
        return <h1>Hubo un error, intente mas tarde</h1>
      }

    return (
      <div>
        {validateItem ? <p>El producto no existe</p> : <ItemDetail productDetail={productDetail}></ItemDetail>}
      </div>
    )
}

export default ItemDetailContainer