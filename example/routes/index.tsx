import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// Pages
import Initial from '../pages/Initial'
import Buttons from '../pages/Buttons'

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Initial"
					component={Initial}
					options={{ headerTitle: 'StarSystem Components' }}
				/>
				<Stack.Screen name="Buttons" component={Buttons} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
