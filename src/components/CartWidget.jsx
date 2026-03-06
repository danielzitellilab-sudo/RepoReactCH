import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: 'none' }}>
      <div className="d-flex align-items-center">
        <FaShoppingCart size={22} color="#fff" />
        {totalItems > 0 && (
          <Badge bg="danger" pill className="ms-1">{totalItems}</Badge>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;
