import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetail from '../MealDetail'
function MealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation()
	function pressHandler() {
		navigation.navigate('Meal Details', { mealId: id })
	}

	return (
		<View style={styles.rootContainer}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? styles.pressedButton : null)}
				onPress={pressHandler}>
				<View style={styles.innerContainer}>
					<View>
						<Image
							source={{ uri: imageUrl }}
							style={styles.image}
						/>
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetail
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	)
}
export default MealItem

const styles = StyleSheet.create({
	rootContainer: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.55,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	pressedButton: {
		opacity: 0.5,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
		margin: 8,
	},
})
