import useHttp from '../../hooks/useHttp.js'
import classes from './Meals.module.css'
import MealItem from './MealItem'


const requestConfig = {}

const Meals = () => {
	const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, [])

	if (isLoading) {
		return <p className={classes.center}>Fetching meals ... </p>
	}

	return (
		<ul id={classes.meals}>
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	)
}

export default Meals
