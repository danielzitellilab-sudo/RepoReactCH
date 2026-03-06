import { useState, useEffect } from 'react';
import { getCategories } from '../firebase/db'
import NavBar from './NavBar'

function NavBarContainer(){
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		getCategories().then(items => setCategories(items))
	}, []);
	return categories ? <NavBar categories={categories} /> : <div>LOADING..</div>
}

export default NavBarContainer