import { View, Text, StyleSheet } from 'react-native'

function List({ selectedData }) {
	return selectedData.map((data) => (
		<View
			key={data}
			style={styles.rootContainer}>
			<Text style={styles.text}>{data}</Text>
		</View>
	))
}
export default List

const styles = StyleSheet.create({
	rootContainer: {
		borderRadius: 10,
		borderWidth: 2,
		paddingHorozontal: 6,
		paddingVertical: 6,
		backgroundColor: '#da9974',
		marginHorizontal: 32,
		marginVertical: 6,
	},
	text: {
		fontSize: 12,
		color: '#110d0a',
		textAlign: 'center',
	},
})
