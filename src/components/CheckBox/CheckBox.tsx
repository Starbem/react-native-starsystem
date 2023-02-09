import React from 'react'
import {
	StyleSheet,
	View,
	Platform,
	TextProps,
	TextStyle,
	ViewStyle,
	StyleProp,
	TouchableOpacityProps,
	TouchableOpacity,
} from 'react-native'
import TextElement from '../Text'
import { CheckBoxIcon, CheckBoxIconProps } from './components/CheckBoxIcon'
import { fonts } from '../../config'
import { StarFunctionComponent } from '../../helpers'

export type CheckBoxProps = TouchableOpacityProps &
	CheckBoxIconProps & {
		/** Specify React Native component for main button. */
		Component?: typeof React.Component
		/** Moves icon to right of text. */
		iconRight?: boolean
		/** Title of checkbox. */
		title?: string | React.ReactElement<any>
		/** Additional props for the title Text component. */
		titleProps?: TextProps
		/** Aligns checkbox to center. */
		center?: boolean
		/** Aligns checkbox to right. */
		right?: boolean
		/** Style of main container. */
		containerStyle?: StyleProp<ViewStyle>
		/** Style for the wrapper of checkbox. */
		wrapperStyle?: StyleProp<ViewStyle>
		/** Style of text. */
		textStyle?: StyleProp<TextStyle>
		/** Specify a custom checked message. */
		checkedTitle?: string
		/** Specify different font family. */
		fontFamily?: string
	}

export const CheckBox: StarFunctionComponent<CheckBoxProps> = ({
	checked = false,
	Component = TouchableOpacity,
	iconRight = false,
	title,
	titleProps = {},
	center = false,
	right = false,
	containerStyle,
	wrapperStyle,
	textStyle,
	checkedTitle,
	fontFamily,
	theme,
	onPress,
	onLongPress,
	checkedColor = theme?.colors?.primary,
	...rest
}) => {
	const accessibilityState = {
		checked: !!checked,
	}

	const iconProps = {
		checked,
		onLongPress,
		checkedColor,
		...rest,
	}

	return (
		<Component
			accessibilityRole="checkbox"
			accessibilityState={accessibilityState}
			testID="RNE__CheckBox__Wrapper"
			{...rest}
			onLongPress={onLongPress}
			onPress={onPress}
			style={StyleSheet.flatten([
				styles.container,
				title && styles.containerHasTitle,
				containerStyle && containerStyle,
			])}
		>
			<View
				style={StyleSheet.flatten([
					styles.wrapper,
					right && { justifyContent: 'flex-end' },
					center && { justifyContent: 'center' },
					wrapperStyle && wrapperStyle,
				])}
			>
				{!iconRight && (
					<CheckBoxIcon {...iconProps} checkedColor={checkedColor} />
				)}

				{React.isValidElement(title)
					? title
					: title !== '' &&
					  title && (
							<TextElement
								testID="RNE__CheckBox__Title"
								style={
									StyleSheet.flatten([
										{
											marginLeft: 10,
											marginRight: 10,
											color: theme?.colors?.gray0,
											...Platform.select({
												android: {
													...fonts.android.bold,
												},
												default: {
													fontWeight: 'bold',
												},
											}),
										},
										textStyle && textStyle,
										fontFamily && { fontFamily },
									]) as any
								}
								{...titleProps}
							>
								{checked ? checkedTitle || title : title}
							</TextElement>
					  )}

				{iconRight && (
					<CheckBoxIcon {...iconProps} checkedColor={checkedColor} />
				)}
			</View>
		</Component>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	container: {
		margin: 5,
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
	},
	containerHasTitle: {
		borderWidth: 1,
		borderRadius: 3,
		backgroundColor: '#fafafa',
		borderColor: '#ededed',
	},
})

CheckBox.displayName = 'CheckBox'
