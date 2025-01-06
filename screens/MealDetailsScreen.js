import { useContext, useLayoutEffect, useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetail'
import Subtitle from '../components/Details/Subtitle'
import List from '../components/Details/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'
function MealDetailsScreen({ route, navigation }) {
	const favoriteMealsCtx = useContext(FavoritesContext)
	const mealId = route.params.mealId
	const meal = MEALS.find((meal) => meal.id === mealId)

	const isMealFavorite = favoriteMealsCtx.ids.includes(mealId)

	function changeFavoriteStatushandler() {
		if (isMealFavorite) {
			favoriteMealsCtx.removeFavorite(mealId)
		} else {
			favoriteMealsCtx.addFavorite(mealId)
		}
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={isMealFavorite ? 'heart-sharp' : 'heart-outline'}
						size={24}
						color={'#e29362'}
						onPress={changeFavoriteStatushandler}
					/>
				)
			},
		})
	}, [navigation, changeFavoriteStatushandler])
	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				source={{ uri: meal.imageUrl }}
				style={styles.image}
			/>
			<Text style={styles.title}>{meal.title}</Text>
			<MealDetail
				duration={meal.duration}
				complexity={meal.complexity}
				affordability={meal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.outerView}>
				<View style={styles.innerView}>
					<Subtitle>Ingredients</Subtitle>
					<List selectedData={meal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List selectedData={meal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}
export default MealDetailsScreen

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 16,
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		padding: 16,
	},
	detailText: {
		color: 'white',
	},
	innerView: {
		width: '80%',
	},
	outerView: {
		alignItems: 'center',
	},
})
