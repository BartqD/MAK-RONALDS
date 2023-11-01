import React from 'react'
import Modal from '../Modal/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/CartContext'
import currencyFormatter from '../Utilities/currencyFormatter'
import Button from '../UI/Button'
import { useContext } from 'react'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

const Cart = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)
	const cartTotal = cartCtx.items.reduce((totalSum, item) => totalSum + item.quantity * item.price, 0)

	const handleCloseCart = () => {
		userProgressCtx.hideCart()
	}

	const handleShowCheckout =()=>{
		userProgressCtx.showCheckout()
	}

	return (
		<Modal className={classes.cart} open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart'? handleCloseCart : null}>
			<h2>Your cart</h2>
			<ul>
				{cartCtx.items.map(item => (
					<CartItem
						key={item.id}
						name={item.name}
						price={item.price}
						quantity={item.quantity}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item.id)}
					/>
				))}
			</ul>
			<p className={classes['cart-total']}>{currencyFormatter.format(cartTotal)}</p>
			<p className={classes['modal-actions']}>
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
			{ cartCtx.items.length > 0	? <Button onClick={handleShowCheckout}>Go to Checkout</Button>:null}
			</p>
		</Modal>
	)
}

export default Cart
