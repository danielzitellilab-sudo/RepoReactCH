import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import CartList from './CartList';

function CartContainer() {
  const { cartItems, addItem, removeItem, deleteItem, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <h4 className="text-muted">Cart is empty</h4>
        <Link to="/">
          <Button variant="outline-primary" className="mt-3">Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-4">Cart</h3>

      <CartList
        cartItems={cartItems}
        onAdd={addItem}
        onRemove={removeItem}
        onDelete={deleteItem}
      />

      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="outline-secondary" size="sm" onClick={clearCart}>
          Remove All Items
        </Button>
        <div className="text-end">
          <div className="fs-5 fw-bold">Total: ${totalPrice.toFixed(2)}</div>
          <Button variant="success" className="mt-2" onClick={() => navigate('/checkout')}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
