import { useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(product, quantity = 1) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      }
      return [...prev, { ...product, quantity: Math.min(quantity, product.stock) }];
    });
  }

  function removeItem(productId) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (!existing) return prev;
      if (existing.quantity === 1) return prev.filter(item => item.id !== productId);
      return prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }

  function deleteItem(productId) {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, deleteItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
