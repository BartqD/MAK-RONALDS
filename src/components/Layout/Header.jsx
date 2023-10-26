import React from 'react'
import { Fragment } from 'react'
import classes from './Header.module.css'
import logoImage from '../../assets/logo.png'

const Header = () => {
	return (
		<Fragment>
			<header id={classes['main-header']}>
				<div id={classes['title']}>
					<img
						src={logoImage}
						alt='Flattened hamburger'
					/>
					<h1>MAK RONALDS</h1>
				</div>
				<nav>
					<button>Cart (0)</button>
				</nav>
			</header>
		</Fragment>
	)
}

export default Header
