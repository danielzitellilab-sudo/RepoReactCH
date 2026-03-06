import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { saveOrder } from '../firebase/db';
import { Button, Form, Card, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError('Please complete all fields.');
      return;
    }
    setError(null);
    setLoading(true);

    const order = {
      buyer,
      items: cartItems.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: totalPrice,
      date: new Date().toISOString(),
    };

    try {
      const id = await saveOrder(order);
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError('Error saving order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Orden confirmada
  if (orderId) {
    return (
      <div className="container py-5 text-center">
        <h3 className="fw-bold text-success mb-3">¡Order confirmed!</h3>
        <p className="text-muted">Your order ID is:</p>
        <h5 className="fw-bold mb-4">{orderId}</h5>
        <Link to="/"><Button variant="outline-primary">Back to store</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h3 className="fw-bold mb-4">Checkout</h3>

      {/* Resumen */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h6 className="fw-bold mb-3">Order summary</h6>
          {cartItems.map(item => (
            <div key={item.id} className="d-flex justify-content-between mb-1 small">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </Card.Body>
      </Card>

      {/* Formulario */}
      <Card className="shadow-sm">
        <Card.Body>
          <h6 className="fw-bold mb-3">Your info</h6>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={buyer.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={buyer.phone}
              onChange={handleChange}
              placeholder="+54 11 ..."
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" onClick={handleSubmit} disabled={loading}>
              {loading ? <Spinner size="sm" animation="border" /> : 'Confirm order'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Checkout;
