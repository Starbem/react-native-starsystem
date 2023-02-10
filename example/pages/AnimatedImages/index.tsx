import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { AnimatedImage, Button, Animations } from '../../../src'
import img from '../../../src/helpers/images/stepOne.png'

const AnimatedImages = () => {
	const [animation, setAnimation] = useState<Animations>('fadeIn')

	return (
		<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
			<AnimatedImage
				source={img}
				style={{ width: 200, height: 400, resizeMode: 'contain' }}
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

export default AnimatedImages
