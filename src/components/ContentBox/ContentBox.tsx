import React from 'react'
import { View, StyleSheet, ViewProps } from 'react-native'
import { AnimatedView } from '../../'
import { colors } from '../../config'
import {
	StarFunctionComponent,
	ScreenHeight,
	getStatusBarHeight,
	getBottomSpace,
} from '../../helpers'

export type ContentBoxBaseProps = ViewProps & {
	topContent?: React.ReactElement
	centerContent?: React.ReactElement
	bottomContent?: React.ReactElement
	style?: any
}

export const ContentBoxBase: StarFunctionComponent<ContentBoxBaseProps> = ({
	topContent,
	centerContent,
	bottomContent,
	style,
	...animation
}) => {
	return (
		<AnimatedView style={[styles.container, style]} {...animation}>
			<View style={styles.content}>{topContent}</View>
			<View style={styles.content}>{centerContent}</View>
			<View style={styles.content}>{bottomContent}</View>
		</AnimatedView>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: 156,
		maxHeight: ScreenHeight - getStatusBarHeight(true) - 65,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		position: 'absolute',
		bottom: 0,
		left: 0,
		paddingHorizontal: 16,
		paddingTop: 24,
		paddingBottom: getBottomSpace() + 10,
		justifyContent: 'flex-end',
		backgroundColor: colors.white,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	content: {
		width: '100%',
		paddingVertical: 8,
	},
})

ContentBoxBase.displayName = 'ContentBox'
