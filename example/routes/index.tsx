import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// Pages
import Initial from '../pages/Initial'
import Buttons from '../pages/Buttons'
import AnimatedImages from '../pages/AnimatedImages'
import AnimatedTexts from '../pages/AnimatedTexts'
import AnimatedViews from '../pages/AnimatedViews'

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
				<Stack.Screen name="AnimatedImages" component={AnimatedImages} />
				<Stack.Screen name="AnimatedTexts" component={AnimatedTexts} />
				<Stack.Screen name="AnimatedViews" component={AnimatedViews} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
