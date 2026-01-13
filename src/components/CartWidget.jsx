import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget (){
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={22} color="#fff" />
      <Badge bg="danger" pill className="ms-1">4</Badge>
    </div>
  );
};

export default CartWidget;