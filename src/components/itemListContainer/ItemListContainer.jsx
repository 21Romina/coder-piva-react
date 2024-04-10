import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'
import  {productos } from '../../mock/data'
function ItemListContainer({greeting}) {
      const [products, setProducts] = useState([])
      const [error, setError] = useState(false)
      const [loading, setLoading] = useState(false)
      const {categoryId} = useParams()

      useEffect(() => {
        setLoading(true)
        //traemos la coleccion
        const productCollection = categoryId ? query(collection(db, "productos"),where("category","==",categoryId)) : collection(db,"productos")
        //traer la data
        getDocs(productCollection)
        .then((res) => {
          const data = res.docs.map((doc) => {
            return{
              id: doc.id,
              ...doc.data()
            }
          })
          setProducts(data);
        })
        .catch((error) => console.log(error) )
        .finally(() => setLoading(false))
      }, [categoryId])
  //MOCK VIEJO SE PUEDE BORRAR
      // useEffect(() => {
      //   setLoading(true)
      //   getProducts()
      //   .then((res) => {
      //     if(categoryId){
      //      res = res.filter(prod => prod.category === categoryId)
      //     }
      //     setProducts(res)
      //   })
      //   .catch((error) => {
      //     setError(error)
      //   })
      //   .finally(() => {
      //     setLoading(false)
      //   })
      // },[categoryId])

      //function de subir dinamico a firebase despues se borra
      // const addData = () => {
      //   const collectionToAdd = collection(db,"productos")
      //   productos.map((item) => addDoc(collectionToAdd,item))
      // }

      if(loading){
        return <h1>Cargando...</h1>
      }

      if(error){
        return <h1>Hubo un error, intente mas tarde</h1>
      }

      
      return (
        <div>
          {/* <button onClick={addData}>UNICA VEZ</button> */}
          <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
          <ItemList productos={products}></ItemList>
        </div>
      )
     
      }

export default ItemListContainer
