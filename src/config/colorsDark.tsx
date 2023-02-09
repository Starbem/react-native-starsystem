import { StyleSheet } from 'react-native'
import { Colors } from './colors'

const colorsDark: Colors = {
	interface: '#000000',
	primary: '#0C1F36',
	primary1: '#005E6E',
	primary2: '#007786',
	primary3: '#1C7A9D',
	secondary: '#FF6B19',
	secondary1: '#E87B19',
	secondary2: '#FF9B19',
	secondary3: '#FFB919',
	title: '#FFFFFF',
	text: '#f2f2f2',
	white: '#FFFFFF',
	black: '#111111',
	gray0: '#5B6572',
	gray1: '#959EAA',
	gray2: '#D9DCE1',
	success: '#1FBA5D',
	error: '#FF4242',
	warning: '#F89F4D',
	disabled: 'hsl(208, 8%, 90%)',
	divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
}

export default colorsDark
