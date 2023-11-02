import Modal from '../Modal/Modal'
import { useContext } from 'react'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'
import currencyFormatter from '../Utilities/currencyFormatter'
import classes from './Checkout.module.css'
import Input from '../UI/Input'
import Button from '../UI/Button'
import useHttp from '../../hooks/useHttp'
import Error from '../UI/Error'

const requestConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
}

const Checkout = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)

	const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp('http://localhost:3000/orders', requestConfig)

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

	function handleClose() {
		userProgressCtx.hideCheckout()
	}

	function handleFinish() {
		userProgressCtx.hideCheckout()
		cartCtx.clearCart()
		clearData()
	}

	function handleSubmit(event) {
		event.preventDefault()

		const fd = new FormData(event.target)

		const customerData = Object.fromEntries(fd.entries())
		sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			})
		)
	}

	let actions = (
		<>
			<Button type='button' textOnly onClick={handleClose}>
				Close
			</Button>
			<Button>Submit Order</Button>
		</>
	)

	if (isSending) {
		actions = <span>Sending order data...</span>
	}

	if (data && !error) {
		return (
			<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
				<h2>Success!</h2>
				<p>Your order was submitted successfully.</p>
				<p className={classes['modal-actions']}>
					<Button onClick={handleFinish}>Okay</Button>
				</p>
			</Modal>
		)
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
				{error && <Error title='Falied to submit order' message={error}></Error>}
				<p className={classes['modal-actions']}>{actions}</p>
			</form>
		</Modal>
	)
}

export default Checkout
