import { PiShoppingCartLight } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({counter}) => {
    return(
    <>
        <div style={{display: 'felx'}}>
        <PiShoppingCartLight fontSize={"1.5rem"}/>
        <Badge bg="danger">{counter}</Badge>
        </div>
        
    </>
    )
}
export default CartWidget