import { Platform, Dimensions } from 'react-native'
import color from 'color'
import renderNode from './renderNode'
import getIconType from './getIconType'
import normalizeText from './normalizeText'
import {
	getBottomSpace,
	getStatusBarHeight,
	ifIphoneX,
	isIphoneX,
} from './iphoneX'
import { ThemeProps } from '../config'

const Screen = Dimensions.get('window')
const ScreenWidth = Screen.width
const ScreenHeight = Screen.height
const isIOS = Platform.OS === 'ios'

export type StarFunctionComponent<T> = React.FunctionComponent<
	T & Partial<ThemeProps<T>>
>

export const patchWebProps = <T extends Record<any, any>>({ ...rest }: T) => {
	return rest
}

export {
	renderNode,
	getIconType,
	normalizeText,
	getBottomSpace,
	getStatusBarHeight,
	ifIphoneX,
	isIphoneX,
	ScreenWidth,
	ScreenHeight,
	isIOS,
	color,
}
