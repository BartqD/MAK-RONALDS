import React, { useEffect, useState } from 'react'
import classes from './Meals.module.css'
import MealItem from './MealItem'

const Meals = () => {
	const [loadedMeals, setLoadedMeals] = useState([])

useEffect(()=>{
    async function fetchMeals() {
		const response = await fetch('http://localhost:3000/meals')

		if (!response.ok) {
		}

		const meals = await response.json()

        setLoadedMeals(meals)
	}
    fetchMeals()
}, [])

	return( <ul id={classes.meals}>{loadedMeals.map((meal)=>(<MealItem key={meal.id} meal={meal}/>))}</ul>)
}

export default Meals
