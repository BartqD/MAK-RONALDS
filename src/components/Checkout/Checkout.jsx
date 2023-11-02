import Modal from '../Modal/Modal'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
import currencyFormatter from '../Utilities/currencyFormatter'
import classes from './Checkout.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'

const Checkout = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

	function handleClose() {
		userProgressCtx.hideCheckout()
	}

	function handleSubmit(event) {
		event.preventDefault()

		const fd = new FormData(event.target)

		const customerData = Object.fromEntries(fd.entries())

		fetch('http://localhost:3000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			}),
		})
	}

	return (
		<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

				<Input label='Full Name' type='text' id='name' />
				<Input label='E-Mail Address' type='email' id='email' />
				<Input label='Street' type='text' id='street' />
				<div className={classes['control-row']}>
					<Input label='Postal Code' type='text' id='postal-code' />
					<Input label='City' type='text' id='city' />
				</div>

				<p className={classes['modal-actions']}>
					<Button type='button' textOnly onClick={handleClose}>
						Close
					</Button>
					<Button>Submit Order</Button>
				</p>
			</form>
		</Modal>
	)
}

export default Checkout
