import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextProps,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native'
import { renderNode, StarFunctionComponent } from '../../helpers'

export type BadgeProps = {
	/** Style for the container. */
	containerStyle?: StyleProp<ViewStyle>
	/** Additional styling for badge (background) view component. */
	badgeStyle?: StyleProp<ViewStyle>
	/** Extra props for text component. */
	textProps?: TextProps
	/** Extra styling for icon component. */
	textStyle?: StyleProp<TextStyle>
	/** Text value to be displayed by badge, defaults to empty. */
	value?: React.ReactNode
	/** Function called when pressed on the badge. */
	onPress?: (...args: any[]) => any
	/** Custom component to replace the badge outer component. */
	Component?: typeof React.Component
	/** Determines color of the indicator. */
	status?:
		| 'primary'
		| 'primaryLight'
		| 'secondary'
		| 'secondaryLight'
		| 'white'
		| 'black'
		| 'grey0'
		| 'grey1'
		| 'grey2'
		| 'grey3'
		| 'grey4'
		| 'grey5'
		| 'success'
		| 'warning'
		| 'error'
}

export const Badge: StarFunctionComponent<BadgeProps> = ({
	containerStyle,
	textStyle,
	textProps,
	badgeStyle,
	onPress,
	Component = onPress ? TouchableOpacity : View,
	value,
	theme,
	status = 'primary',
	...props
}) => {
	const element = renderNode(Text, value, {
		style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
		...textProps,
	})
	return (
		<View
			testID="STAR__Badge__Container"
			style={StyleSheet.flatten([containerStyle && containerStyle])}
		>
			<Component
				{...props}
				testID="STAR__Badge"
				style={StyleSheet.flatten([
					{
						alignSelf: 'center',
						minWidth: size,
						height: size,
						borderRadius: size / 2,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: theme?.colors?.[status],
						borderWidth: StyleSheet.hairlineWidth,
						borderColor: '#fff',
					},
					!element && styles.miniBadge,
					badgeStyle && badgeStyle,
				])}
				onPress={onPress}
			>
				{element}
			</Component>
		</View>
	)
}

const size = 18
const miniSize = 8

const styles = StyleSheet.create({
	miniBadge: {
		paddingHorizontal: 0,
		paddingVertical: 0,
		minWidth: miniSize,
		height: miniSize,
		borderRadius: miniSize / 2,
	},
	text: {
		fontSize: 12,
		color: 'white',
		paddingHorizontal: 4,
	},
})

Badge.displayName = 'Badge'
