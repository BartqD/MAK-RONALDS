import React from 'react'
import Meals from './components/Meals/Meals.jsx'
import Header from './components/Layout/header.jsx'
import {CartContextProvider} from './components/store/CartContext.jsx'
import { UserProgressContextProvider } from './components/store/UserProgressContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

function App() {
	return (
		<UserProgressContextProvider>
		<CartContextProvider>
			<Header />
			<Meals />
			<Cart/>
			<Checkout/>
		</CartContextProvider>
		</UserProgressContextProvider>
	)
}

export default App
