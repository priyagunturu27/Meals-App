import { useLayoutEffect } from 'react'

import { MEALS } from '../data/dummy-data'
import { CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/Meals/MealsList'

function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId

	const meals = MEALS.filter((meal) => {
		return meal.categoryIds.indexOf(catId) >= 0
	})

	useLayoutEffect(() => {
		const catogeryTitle = CATEGORIES.find((cat) => cat.id === catId).title

		navigation.setOptions({ title: catogeryTitle })
	}, [catId, navigation])

	return <MealsList items={meals} />
}
export default MealsOverviewScreen
