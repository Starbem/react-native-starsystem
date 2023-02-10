import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../../src'

const Initial = () => {
	const { navigate } = useNavigation()

	return (
		<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
			<Button
				title="Animated Image"
				onPress={() => navigate('AnimatedImages')}
				containerStyle={{ marginVertical: 4 }}
			/>
			<Button
				title="Animated Texts"
				onPress={() => navigate('AnimatedTexts')}
				containerStyle={{ marginVertical: 4 }}
			/>
			<Button
				title="Animated View"
				onPress={() => navigate('AnimatedViews')}
				containerStyle={{ marginVertical: 4 }}
			/>
			<Button
				title="Buttons"
				onPress={() => navigate('Buttons')}
				containerStyle={{ marginVertical: 4 }}
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
})

export default Initial
