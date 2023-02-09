import React from 'react'
import {
	View,
	ScrollView,
	Animated,
	StyleProp,
	ViewStyle,
	ViewProps,
	StyleSheet,
} from 'react-native'
import { StarFunctionComponent } from '../../helpers'
import { colors } from '../../config'
import { TabItemProps } from './Tab.Item'

export type TabBaseProps = ViewProps & {
	/** Child position index value. */
	value?: number
	/** On Index Change Callback. */
	onChange?: (value: number) => void
	/** Disable the indicator below. */
	disableIndicator?: boolean
	/** Additional styling for tab indicator. */
	indicatorStyle?: StyleProp<ViewStyle>
	/** Define the background Variant. */
	variant?:
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
}

export const TabBase: StarFunctionComponent<TabBaseProps> = ({
	theme,
	children,
	value,
	onChange = () => console.log('On Change is required'),
	indicatorStyle,
	disableIndicator,
	variant = 'primary',
	...props
}) => {
	const [dim, setDim] = React.useState({ width: 0 })
	const { current: animation } = React.useRef(new Animated.Value(0))

	React.useEffect(() => {
		Animated.timing(animation, {
			toValue: value as number,
			useNativeDriver: true,
			duration: 170,
		}).start()
	}, [animation, value])

	const WIDTH =
		React.Children.count(children) > 2
			? dim.width / 3
			: dim.width / React.Children.count(children)

	return (
		<View>
			<ScrollView
				contentContainerStyle={{}}
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEnabled={React.Children.count(children) > 3}
				{...props}
				accessibilityRole="tablist"
				style={[
					styles.viewStyle,
					// eslint-disable-next-line react-native/no-inline-styles
					{
						borderBottomWidth: 1,
						borderBottomColor: variant ? colors[variant] : colors.gray2,
						backgroundColor: variant ? colors[variant] : 'transparent',
					},
				]}
				onLayout={({ nativeEvent: { layout } }) => setDim(Object(layout))}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child as React.ReactElement<TabItemProps>, {
						childs: React.Children.count(children),
						onPress: () => onChange(index),
						active: index === value,
						// @ts-ignore
						variant,
					})
				})}
				{!disableIndicator && (
					<Animated.View
						style={[
							styles.indicator,
							{
								backgroundColor: theme?.colors?.secondary,
								transform: [
									{
										translateX: animation.interpolate({
											inputRange: [0, 1],
											outputRange: [0, WIDTH],
										}),
									},
								],
							},
							indicatorStyle,
						]}
					>
						<View style={{ width: WIDTH }} />
					</Animated.View>
				)}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		borderRadius: 0,
		backgroundColor: 'transparent',
	},
	titleStyle: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		textTransform: 'uppercase',
	},
	containerStyle: {
		flex: 1,
		borderRadius: 0,
	},
	viewStyle: {
		flexDirection: 'row',
		position: 'relative',
	},
	indicator: {
		display: 'flex',
		position: 'absolute',
		height: 4,
		bottom: 0,
	},
})

TabBase.displayName = 'Tab'
