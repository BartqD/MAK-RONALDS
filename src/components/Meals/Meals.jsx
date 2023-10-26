import React, { useEffect, useState } from 'react'
import classes from './Meals.module.css'
import MealItem from './MealItem'

const Meals = (props) => {
	const [loadedMeals, setLoadedMeals] = useState([])

useEffect(()=>{
    async function fetchMeals() {
		const response = await fetch('http://localhost:3000/meals')

		if (!response.ok) {
		}

		const meals = await response.json()

        setLoadedMeals(meals)
		console.log(meals)
	}
    fetchMeals()
}, [])

	return( <ul id={classes.meals}>{loadedMeals.map(meal=><MealItem key={meal.id} name ={meal.name} description={meal.description} id={meal.id} image={meal.image} price={meal.price}/>)}</ul>)
}

export default Meals
