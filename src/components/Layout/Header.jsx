import React, { useContext } from 'react'
import { Fragment } from 'react'
import classes from './Header.module.css'
import logoImage from '../../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'


const Header = () => {
	const cartCtx = useContext(CartContext)
	const userProgressCtx = useContext(UserProgressContext)
	const quantity = cartCtx.items.reduce((totalNumberOfItems, item) => {
		return totalNumberOfItems + item.quantity
	}, 0)

const handleShowCart = () => { 
	userProgressCtx.showCart()

 }

	return (
		<Fragment>
			<header id={classes['main-header']}>
				<div id={classes['title']}>
					<img src={logoImage} alt='Flattened hamburger. Obraz autorstwa brgfx na Freepik' />
					<h1>MAK RONALD'S</h1>
				</div>
				<nav>
					<Button onClick={handleShowCart} textOnly>Cart ({quantity})</Button>
				</nav>
			</header>
		</Fragment>
	)
}

export default Header
