import { Button } from 'react-bootstrap';

function CartItem({ item, onAdd, onRemove, onDelete }) {
  return (
    <tr className="align-middle">
      <td>
        <div className="d-flex align-items-center gap-3">
          <img
            src={item.image_url}
            alt={item.name}
            style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 6 }}
          />
          <div>
            <div className="fw-semibold">{item.name}</div>
            <small className="text-muted">{item.brand}</small>
          </div>
        </div>
      </td>

      <td className="text-center">${item.price}</td>

      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Button variant="outline-secondary" size="sm" onClick={() => onRemove(item.id)}>−</Button>
          <span className="fw-bold" style={{ minWidth: 24 }}>{item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onAdd(item, 1)}
            disabled={item.quantity >= item.stock}
            title={item.quantity >= item.stock ? 'Sin stock disponible' : ''}
          >+</Button>
        </div>
        <small className="text-muted">Stock: {item.stock}</small>
      </td>

      <td className="text-center fw-bold text-danger">
        ${(item.price * item.quantity).toFixed(2)}
      </td>

      <td className="text-center">
        <Button variant="outline-danger" size="sm" onClick={() => onDelete(item.id)}>✕</Button>
      </td>
    </tr>
  );
}

export default CartItem;
