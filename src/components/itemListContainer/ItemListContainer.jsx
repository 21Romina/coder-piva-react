import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
function ItemListContainer({greeting}) {
      const [productos, setProducts] = useState([])

      const [error, setError] = useState(false)
      const [loading, setLoading] = useState(false)
      const {categoryId} = useParams()

      useEffect(() => {
        setLoading(true)
        getProducts()
        .then((res) => {
          if(categoryId){
           res = res.filter(prod => prod.category === categoryId)
          }
          setProducts(res)
        })
        .catch((error) => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
      },[categoryId])

      if(loading){
        return <h1>Cargando...</h1>
      }

      if(error){
        return <h1>Hubo un error, intente mas tarde</h1>
      }

      
      return (
        <div>
          <h1>{greeting}</h1>
          <ItemList productos={productos}></ItemList>
        </div>
      )
     
      }

export default ItemListContainer
