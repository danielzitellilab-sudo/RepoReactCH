import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function ItemListContainer ()
{
	const [products, setProducts] = useState([]);
	const {categoryName} = useParams();

	useEffect(() => {
		const urlBase = 'https://dummyjson.com/products';
		const urlCat = `https://dummyjson.com/products/category/${categoryName}`;

		fetch(categoryName ? urlCat : urlBase).then(res => res.json()).then(data => setProducts(data.products))}, [categoryName]
	);
	return(
	    <ItemList items={products} categoryN = {categoryName}/>
	);
};

export default ItemListContainer;