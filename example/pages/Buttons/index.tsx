import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Button } from '@app/src'

const Buttons = () => {
	return (
		<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
			<Button title="Primary" containerStyle={styles.btn} />
			<Button
				title="Secondary"
				variant="secondary"
				containerStyle={styles.btn}
			/>
			<Button title="Black" variant="black" containerStyle={styles.btn} />
			<Button
				title="Primary Outline"
				type="outline"
				containerStyle={styles.btn}
			/>
			<Button
				title="Secondary Outline"
				type="outline"
				variant="secondary"
				containerStyle={styles.btn}
			/>
			<Button
				title="Black Outline"
				type="outline"
				variant="black"
				containerStyle={styles.btn}
			/>
			<Button title="Primary Clear" type="clear" containerStyle={styles.btn} />
			<Button
				title="Secondary Clear"
				type="clear"
				variant="secondary"
				containerStyle={styles.btn}
			/>
			<Button
				title="Black Clear"
				type="clear"
				variant="black"
				containerStyle={styles.btn}
			/>
			<Button loading containerStyle={styles.btn} />
			<Button loading variant="secondary" containerStyle={styles.btn} />
			<Button loading variant="black" containerStyle={styles.btn} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	btn: {
		marginVertical: 5,
	},
})

export default Buttons
