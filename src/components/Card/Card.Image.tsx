import React from 'react'
import { StyleSheet } from 'react-native'
import { StarFunctionComponent } from '../../helpers'
import Image, { ImageProps } from '../Image'

type CardImageProps = ImageProps

export const CardImage: StarFunctionComponent<CardImageProps> = ({
	style,
	...props
}) => <Image style={StyleSheet.flatten([styles.image, style])} {...props} />

const styles = StyleSheet.create({
	image: {
		height: 150,
	},
})

CardImage.displayName = 'Card.Image'
