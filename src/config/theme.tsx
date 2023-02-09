import { AvatarProps, AccessoryProps } from '../components/Avatar'
import { BadgeProps } from '../components/Badge'
import { BottomSheetProps } from '../components/BottomSheet'
import { ButtonProps } from '../components/Button'
import { CardProps } from '../components/Card'
import { CheckBoxProps } from '../components/CheckBox'
import { ContentBoxProps } from '../components/ContentBox'
import { DividerProps } from '../components/Divider'
import { HeaderProps } from '../components/Header'
import { IconProps } from '../components/Icon'
import { ImageProps } from '../components/Image'
import { InputProps } from '../components/Input'
import { LinearProgressProps } from '../components/LinearProgress'
import { ListItemProps, ListItemAccordionProps } from '../components/ListItem'
import { SwitchProps } from '../components/Switch'
import { TabItemProps, TabProps } from '../components/Tab'
import { TabViewProps } from '../components/TabView'
import { TextProps } from '../components/Text'
import { ViewProps } from 'react-native'

import colors, { Colors } from './colors'
import fonts, { Fonts } from './fonts'

export default {
	colors,
	fonts,
}

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> }

export interface FullTheme {
	Avatar: Partial<AvatarProps>
	AvatarAccessory: Partial<AccessoryProps>
	Badge: Partial<BadgeProps>
	BottomSheet: Partial<BottomSheetProps>
	Button: Partial<ButtonProps>
	Card: Partial<CardProps>
	CardDivider: Partial<DividerProps>
	CardFeaturedSubtitle: Partial<TextProps>
	CardFeaturedTitle: Partial<TextProps>
	CardImage: Partial<ImageProps>
	CardTitle: Partial<TextProps>
	CheckBox: Partial<CheckBoxProps>
	ContentBox: Partial<ContentBoxProps>
	Divider: Partial<DividerProps>
	Header: Partial<HeaderProps>
	Icon: Partial<IconProps>
	Image: Partial<ImageProps>
	Input: Partial<InputProps>
	LinearProgress: Partial<LinearProgressProps>
	ListItem: Partial<ListItemProps>
	ListItemAccordion: Partial<ListItemAccordionProps>
	ListItemCheckBox: Partial<CheckBoxProps>
	ListItemChevron: Partial<IconProps>
	ListItemContent: Partial<ViewProps>
	ListItemInput: Partial<InputProps>
	ListItemSubtitle: Partial<TextProps>
	ListItemTitle: Partial<TextProps>
	Switch: Partial<SwitchProps>
	Tab: Partial<TabProps>
	TabItem: Partial<TabItemProps>
	TabView: Partial<TabViewProps>
	TabViewItem: Partial<ViewProps>
	Text: Partial<TextProps>
	colors: RecursivePartial<Colors>
	fonts: RecursivePartial<Fonts>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Theme<T = {}> = Partial<FullTheme> & T

export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void

export type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void
