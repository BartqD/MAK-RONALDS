import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import Button from '../UI/Button'
import CartContext from '../store/CartContext'

const MealItem = ({meal}) => {
	const cartCtx=useContext(CartContext)
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	function handleAddMealToCart  () {
		cartCtx.addItem(meal)
	}

	return (
		<li className={classes['meal-item']}>
			<article>
				<img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
				<div>
					<h3>{meal.name}</h3>
					<p className={classes['meal-item-price']}>{formatter.format(meal.price)}</p>
					<p className={classes['meal-item-description']}>{meal.description}</p>
				</div>
				<p className={classes['meal-item-actions']}>
					<Button onClick={handleAddMealToCart}>Add to Cart</Button>
				</p>
			</article>
		</li>
	)
}

export default MealItem
