import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { AnimatedView, Button, Animations, colors } from '../../../src'

const AnimatedViews = () => {
	const [animation, setAnimation] = useState<Animations>('fadeIn')

	return (
		<ScrollView
			contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
		>
			<AnimatedView
				style={{
					width: 200,
					height: 200,
					backgroundColor: colors.secondary,
					borderRadius: 10,
					marginBottom: 20,
				}}
				animation={animation}
				useNativeDriver
			/>
			<View>
				<Button
					title="BounceInLeft"
					onPress={() => setAnimation('bounceInLeft')}
					type="clear"
				/>
				<Button
					title="BounceInRight"
					onPress={() => setAnimation('bounceInRight')}
					type="clear"
				/>
				<Button
					title="FadeInUp"
					onPress={() => setAnimation('fadeInUp')}
					type="clear"
				/>
				<Button
					title="FadeInDown"
					onPress={() => setAnimation('fadeInDown')}
					type="clear"
				/>
				<Button
					title="Tada"
					onPress={() => setAnimation('tada')}
					type="clear"
				/>
			</View>
		</ScrollView>
	)
}

export default AnimatedViews
