import React from 'react'
import { StyleSheet, ImageProps } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { AnimatedProps } from '../../config/animations'

export const AnimatedImage: React.FC<AnimatedProps & ImageProps> = ({
	animation,
	duration,
	delay,
	direction,
	easing,
	useNativeDriver,
	...props
}) => {
	return (
		<Animatable.Image
			{...props}
			style={[styles.container, props.style]}
			animation={animation}
			duration={duration}
			delay={delay}
			direction={direction}
			easing={easing}
			useNativeDriver={useNativeDriver}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
})

AnimatedImage.displayName = 'AnimatedImage'
