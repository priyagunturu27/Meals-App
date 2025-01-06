import { View, Text, StyleSheet } from 'react-native'

function MealDetail({ duration, complexity, affordability, textStyle }) {
	return (
		<View style={styles.details}>
			<Text style={[styles.detailText, textStyle]}>{duration}</Text>
			<Text style={[styles.detailText, textStyle]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[styles.detailText, textStyle]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	)
}
export default MealDetail

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},
	detailText: {
		marginHorizontal: 16,
		fontSize: 16,
	},
})
