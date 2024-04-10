import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../service/firebase'
const CheckOut = () => {
    const {cart,clear, cartTotal} = useContext(CartContext)
    const [ordenId, setOrdenId] = useState('')
    const [loading, setLoading] = useState(false)
    const {
    register,
    handleSubmit,
    formState:{errors},
    getValues
    } = useForm()

    const handleOrder = (data) => {
        setLoading(true)
        let orden = {
            user: {
                nombre: data.nombre,
                apellido: data.apellido,
                correo: data.email
            },
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db,"orders")
        addDoc(ventas,orden)
        .then((res) => {
            setOrdenId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    } 
if(loading){
    return <p>Cargando...</p>
}
  return (
    <div>
      {ordenId ? <p>Generaste con éxito tu solicitud, su número de seguimiento es: {ordenId}</p> : <div>
        <h2>CheckOut</h2>
        <form onSubmit={handleSubmit(handleOrder)}>
            <label >Nombre</label>
            <input type="text" className='form-control' name='nombre' {...register("nombre",{required:true, minLength: 2})}/>
            {errors?.nombre?.type === 'required' && <p>Nombre es requerido</p>}
            {errors?.nombre?.type === 'minLength' && <p>El nombre debe superar los 2 caracteres</p>}
            <label >Apellido</label>
            <input type="text" className='form-control' name='apellido' {...register("apellido",{required:true, minLength: 2})}/>
            {errors?.apellido?.type === 'required' && <p>Apellido es requerido</p>}
            {errors?.apellido?.type === 'minLength' && <p>El apellido debe superar los 2 caracteres</p>}
            <label>Email</label>
            <input type="email" className='form-control' name='email'{...register("email",{required:true, minLength: 8})}/>
            {errors?.email?.type === 'required' && <p>Email es requerido</p>}
            {errors?.email?.type === 'minLength' && <p>El email es demasiado corto</p>}
            <label>Confirmar Email</label>
            <input type="email" className='form-control' name='email2'{...register("email2",{required:true, minLength: 8, validate:{equalsMails: mails2 => mails2 === getValues().email}})}/>
            {errors?.email2?.type === 'required' && <p>El mail es requerido</p>}
            {errors?.email2?.type === 'minLength' && <p>El mail es demasiado corto</p>}
            {errors?.email2?.type === 'equalsMails' && <p>Los mails deben ser iguales</p>}
            <button className='btn btn-success'>Confirmar compra</button>
        </form>
      </div>}
    </div>
  )
}

export default CheckOut
