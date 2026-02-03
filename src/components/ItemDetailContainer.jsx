import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlPr = `https://dummyjson.com/products/${id}`;
    
    fetch(urlPr)
      .then(res => res.json())
      .then(data => {
        console.log('Producto:', data)
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setItem(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!item) return <div className="text-center py-5">No Product</div>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;