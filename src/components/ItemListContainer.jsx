import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProducts, getProductsByCategory } from '../firebase/db';

function ItemListContainer ()
{
	const [products, setProducts] = useState([]);
	const {categoryName} = useParams();

	useEffect(() => {
		if(categoryName){
			getProductsByCategory(categoryName).then(items => setProducts(items))
		}
		else{
			getProducts().then(items => setProducts(items))
		}
	}, [categoryName]);
	return(
	    <ItemList items={products} categoryN = {categoryName}/>
	);
};

export default ItemListContainer;