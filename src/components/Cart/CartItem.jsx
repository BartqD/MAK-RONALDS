import classes from './CartItem.module.css'
import currencyFormatter from '../Utilities/currencyFormatter.js'
import { useContext } from 'react'


const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
	return (
		<li className={classes['cart-item']}>
			<p>
				{name} - {quantity} x {currencyFormatter.format(price)}{' '}
			</p>
			<p className={classes['cart-item-actions']}>
				<button onClick={onDecrease}>-</button>
				<button>{quantity}</button>
				<button onClick={onIncrease}>+</button>
			</p>
		</li>
	)
}

export default CartItem
