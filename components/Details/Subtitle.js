import { View, Text, StyleSheet } from 'react-native'
function Subtitle({ children }) {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}> {children}</Text>
		</View>
	)
}
export default Subtitle

const styles = StyleSheet.create({
	subtitleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: '#e8a378',
		padding: 8,
		marginVertical: 4,
		marginHorizontal: 38,
	},
	subtitle: {
		color: '#e29362',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
