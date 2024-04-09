import { PiShoppingCartLight } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {
    const {cart, cartQuantity} = useContext(CartContext)
    return(
    <>
        <div style={{display: 'felx'}}>
        {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        <PiShoppingCartLight fontSize={"1.5rem"}/>
        </div>
        
    </>
    )
}
export default CartWidget