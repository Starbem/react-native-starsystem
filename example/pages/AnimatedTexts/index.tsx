import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { AnimatedText, Button, Animations, colors } from '../../../src'

const AnimatedTexts = () => {
	const [animation, setAnimation] = useState<Animations>('fadeIn')

	return (
		<ScrollView
			contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
		>
			<AnimatedText
				style={{
					fontSize: 22,
					textAlign: 'center',
					color: colors.secondary,
					marginBottom: 20,
				}}
				animation={animation}
				useNativeDriver
			>
				Your text here
			</AnimatedText>
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

export default AnimatedTexts
