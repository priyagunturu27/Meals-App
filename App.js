import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import FavoritesContextProvider from './store/context/favorites-context'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavoritesScreen from './screens/FavoritesScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: 'white',
				sceneContainerStyle: { backgroundColor: '#3f2f25' },
				drawerContentStyle: { backgroundColor: '#3f2f25' },
				drawerActiveTintColor: '#3f2f25',
				drawerActiveBackgroundColor: '#e08a55',
				drawerInactiveTintColor: 'white',
			}}>
			<Drawer.Screen
				name='categories'
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ size, color }) => {
						return (
							<Ionicons
								name='list'
								size={size}
								color={color}
							/>
						)
					},
				}}
			/>
			<Drawer.Screen
				name='favorites'
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ size, color }) => {
						return (
							<Ionicons
								name='heart-sharp'
								size={size}
								color={color}
							/>
						)
					},
				}}
			/>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<FavoritesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: '#351401' },
							headerTintColor: 'white',
							contentStyle: { backgroundColor: '#3f2f25' },
						}}>
						<Stack.Screen
							name='Meals Categories'
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Meals Overview Screen'
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name='Meal Details'
							component={MealDetailsScreen}
							options={{ title: 'About the Meal' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</FavoritesContextProvider>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 60,
	},
})
