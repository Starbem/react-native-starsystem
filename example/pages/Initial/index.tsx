import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../src'

const Initial = () => {
	const { navigate } = useNavigation()

	return (
		<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
			<Button title="Buttons" onPress={() => navigate('Buttons')} />
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
