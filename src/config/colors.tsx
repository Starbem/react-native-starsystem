import { StyleSheet } from 'react-native'

export interface Colors {
	readonly interface: string
	readonly primary: string
	readonly primary1: string
	readonly primary2: string
	readonly primary3: string
	readonly secondary: string
	readonly secondary1: string
	readonly secondary2: string
	readonly secondary3: string
	readonly title: string
	readonly text: string
	readonly white: string
	readonly black: string
	readonly gray0: string
	readonly gray1: string
	readonly gray2: string
	readonly success: string
	readonly warning: string
	readonly error: string
	readonly disabled: string
	readonly divider: string
}

const colors: Colors = {
	interface: '#F0F2F8',
	primary: '#0C1F36',
	primary1: '#005E6E',
	primary2: '#007786',
	primary3: '#1C7A9D',
	secondary: '#FF6B19',
	secondary1: '#E87B19',
	secondary2: '#FF9B19',
	secondary3: '#FFB919',
	title: '#000000',
	text: '#222222',
	white: '#FFFFFF',
	black: '#000000',
	gray0: '#5B6572',
	gray1: '#959EAA',
	gray2: '#D9DCE1',
	success: '#1FBA5D',
	error: '#FF4242',
	warning: '#F89F4D',
	disabled: 'hsl(208, 8%, 90%)',
	divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
}

export default colors
