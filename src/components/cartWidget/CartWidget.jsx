import { PiShoppingCartLight } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return(
    <>
        <PiShoppingCartLight fontSize={"1.5rem"}/>
        <Badge bg="danger">3</Badge>
    </>
    )
}
export default CartWidget