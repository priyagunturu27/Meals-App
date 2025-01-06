import { Text } from 'react-native'
import MealsList from '../components/Meals/MealsList'
import { FavoritesContext } from '../store/context/favorites-context'
import { useContext } from 'react'
import { MEALS } from '../data/dummy-data'
function FavoritesScreen() {
	const MealsFavoriteCtx = useContext(FavoritesContext)

	const favoriteItems = MEALS.filter((meal) =>
		MealsFavoriteCtx.ids.includes(meal.id)
	)

	return <MealsList items={favoriteItems} />
}
export default FavoritesScreen
