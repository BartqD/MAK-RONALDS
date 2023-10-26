import React from 'react'
import Meals from './components/Meals/Meals.jsx'
import Header from './components/Layout/header.jsx'
import {CartContextProvider} from './components/store/CartContext.jsx'

function App() {
	return (
		<CartContextProvider>
			<Header />
			<Meals />
		</CartContextProvider>
	)
}

export default App
