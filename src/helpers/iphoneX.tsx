import { Dimensions, Platform, StatusBar } from 'react-native'

export function isIphoneX(): boolean {
	const dimen = Dimensions.get('window')
	return (
		Platform.OS === 'ios' &&
		!Platform.isPad &&
		!Platform.isTV &&
		(dimen.height === 780 ||
			dimen.width === 780 ||
			dimen.height === 812 ||
			dimen.width === 812 ||
			dimen.height === 844 ||
			dimen.width === 844 ||
			dimen.height === 896 ||
			dimen.width === 896 ||
			dimen.height === 926 ||
			dimen.width === 926)
	)
}

export function ifIphoneX<T, U>(iphoneXStyle: T, regularStyle: U): T | U {
	if (isIphoneX()) {
		return iphoneXStyle
	}
	return regularStyle
}

export function getStatusBarHeight(safe: boolean): number {
	return Platform.select({
		ios: ifIphoneX(safe ? 44 : 30, 20),
		android: StatusBar.currentHeight,
		default: 0,
	})
}

export function getBottomSpace(): number {
	return isIphoneX() ? 34 : 0
}
