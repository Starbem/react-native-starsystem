import React from 'react'
import {
	Text as NativeText,
	StyleSheet,
	TextProps as TextProperties,
	TextStyle,
	StyleProp,
} from 'react-native'
import { colors } from '../../config'
import { patchWebProps, StarFunctionComponent } from '../../helpers'
import normalize from '../../helpers/normalizeText'

export type TextProps = TextProperties & {
	color?:
		| 'primary'
		| 'secondary'
		| 'white'
		| 'black'
		| 'gray0'
		| 'gray1'
		| 'gray2'
		| 'success'
		| 'warning'
		| 'error'
	style?: StyleProp<TextStyle>
	/**  Text with Font size 36. */
	h1?: boolean
	/**  Text with Font size 30. */
	h2?: boolean
	/**  Text with Font size 24. */
	h3?: boolean
	/**  Text with Font size 18. */
	h4?: boolean
	/**  Text with Font size 16. */
	h5?: boolean
	/**  Text with Font size 14. */
	h6?: boolean
	/**  Text with Font size 12. */
	caption?: boolean
	/**  Text with Font size 10. */
	overline?: boolean
	h1Style?: StyleProp<TextStyle>
	h2Style?: StyleProp<TextStyle>
	h3Style?: StyleProp<TextStyle>
	h4Style?: StyleProp<TextStyle>
	h5Style?: StyleProp<TextStyle>
	h6Style?: StyleProp<TextStyle>
	captionStyle?: StyleProp<TextStyle>
	overlineStyle?: StyleProp<TextStyle>
	allowFontScaling?: boolean
}

export const Text: StarFunctionComponent<TextProps> = ({
	color = 'black',
	style = {},
	h1 = false,
	h2 = false,
	h3 = false,
	h4 = false,
	h5 = false,
	h6 = false,
	caption = false,
	overline = false,
	h1Style = {},
	h2Style = {},
	h3Style = {},
	h4Style = {},
	h5Style = {},
	h6Style = {},
	captionStyle = {},
	overlineStyle = {},
	children = '',
	allowFontScaling = false,
	theme,
	...rest
}) => {
	return (
		<NativeText
			accessibilityRole="text"
			allowFontScaling={allowFontScaling}
			style={StyleSheet.flatten([
				{
					color: color ? colors[color] : theme?.colors?.black,
				},
				style,
				(h1 || h2 || h3 || h4 || h5 || h6 || caption || overline) &&
					h1 &&
					StyleSheet.flatten([{ fontSize: normalize(36) }, h1Style]),
				h2 && StyleSheet.flatten([{ fontSize: normalize(30) }, h2Style]),
				h3 && StyleSheet.flatten([{ fontSize: normalize(24) }, h3Style]),
				h4 && StyleSheet.flatten([{ fontSize: normalize(18) }, h4Style]),
				h5 && StyleSheet.flatten([{ fontSize: normalize(16) }, h5Style]),
				h6 && StyleSheet.flatten([{ fontSize: normalize(14) }, h6Style]),
				caption &&
					StyleSheet.flatten([{ fontSize: normalize(12) }, captionStyle]),
				overline &&
					StyleSheet.flatten([{ fontSize: normalize(10) }, overlineStyle]),
			])}
			{...patchWebProps(rest)}
		>
			{children}
		</NativeText>
	)
}

Text.displayName = 'Text'
