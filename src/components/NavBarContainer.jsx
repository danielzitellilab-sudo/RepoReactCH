import { useState, useEffect } from 'react';
import NavBar from './Navbar'

function NavBarContainer(){
	const [categories, setCategories] = useState([]);
	const urlCats = 'https://dummyjson.com/products/categories';
	useEffect(() => {
		fetch(urlCats).then(res => res.json()).then(data => setCategories(data))}, []
	);
	console.log(categories);
	return categories ? <NavBar categories={categories} /> : <div>LOADING..</div>
}

export default NavBarContainer