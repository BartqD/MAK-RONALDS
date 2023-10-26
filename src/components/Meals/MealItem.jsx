import React from 'react'
import classes from './MealItem.module.css'

const MealItem = props => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	return (
		<li className={classes['meal-item']}>
			<article>
				<img src={`http://localhost:3000/${props.image}`} alt={props.name} />
				<div>
					<h3>{props.name}</h3>
					<p className={classes['meal-item-price']}>{formatter.format(props.price)}</p>
					<p className={classes['meal-item-description']}>{props.description}</p>
				</div>
                <p className={classes['meal-item-actions']}>
                    <button>Add to Cart</button>
                </p>
			</article>
		</li>
	)
}

export default MealItem
