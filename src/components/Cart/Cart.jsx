import React from 'react'
import Modal from '../Modal/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/CartContext'
import  currencyFormatter  from '../Utilities/currencyFormatter'
import Button from '../UI/Button'
import { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'

const Cart = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)
	const cartTotal = cartCtx.items.reduce((totalSum, item) => totalSum + item.quantity * item.price, 0)
	console.log(cartTotal)

	const handleCloseCart = () => {
		userProgressCtx.hideCart()
		console.log(userProgressCtx.progress)
	}

	return (
		<Modal className={classes.cart} open={userProgressCtx.progress === 'cart'} >
			<h2>Your cart</h2>
			<ul>
				{cartCtx.items.map(item => 
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				)}
			</ul>
			<p className={classes['cart-total']}>{currencyFormatter.format(cartTotal)}</p>
			<p className={classes['modal-actions']}>
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				<Button onClick={handleCloseCart}>Go to Checkout</Button>
			</p>
		</Modal>
	)
}

export default Cart
