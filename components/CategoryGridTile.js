import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPress }) {
	return (
		<View style={styles.outerContainer}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.pressedButton : null,
				]}
				onPress={onPress}>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}
export default CategoryGridTile

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		borderRadius: 8,
		margin: 16,
		elevation: 6,
		height: 150,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
		backgroundColor: 'white',
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	pressedButton: {
		opacity: 0.5,
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
	},
})
