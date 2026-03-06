import { Table } from 'react-bootstrap';
import CartItem from './CartItem';

function CartList({ cartItems, onAdd, onRemove, onDelete }) {
  return (
    <Table responsive hover>
      <thead className="table-dark">
        <tr>
          <th>Product</th>
          <th className="text-center">Price</th>
          <th className="text-center">Qty</th>
          <th className="text-center">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default CartList;
