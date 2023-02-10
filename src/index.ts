import AnimatedView, {
	AnimatedProps,
	Animations,
} from './components/AnimatedView'
import AnimatedImage from './components/AnimatedImage'
import AnimatedText from './components/AnimatedText'
import Avatar, { AvatarProps } from './components/Avatar'
import Badge, { BadgeProps, withBadge } from './components/Badge'
import BottomSheet, { BottomSheetProps } from './components/BottomSheet'
import Button, { ButtonProps } from './components/Button'
import Card, { CardProps } from './components/Card'
import CheckBox, { CheckBoxProps } from './components/CheckBox'
import ContentBox, { ContentBoxProps } from './components/ContentBox'
import Divider, { DividerProps } from './components/Divider'
import Header, { HeaderProps } from './components/Header'
import Icon, { IconProps } from './components/Icon'
import Image, { ImageProps } from './components/Image'
import Input, { InputProps } from './components/Input'
import LinearProgress, {
	LinearProgressProps,
} from './components/LinearProgress'
import ListItem, {
	ListItemProps,
	ListItemAccordionProps,
	ListItemSwipeableProps,
} from './components/ListItem'
import Switch, { SwitchProps } from './components/Switch'
import Tab, { TabItemProps, TabProps } from './components/Tab'
import TabView, { TabViewProps } from './components/TabView'
import Text, { TextProps } from './components/Text'

import {
	Colors,
	colors,
	fonts,
	ThemeProvider,
	ThemeConsumer,
	ThemeContext,
	withTheme,
	makeStyles,
	useTheme,
	UpdateTheme,
	ReplaceTheme,
	FullTheme,
	Theme,
	ThemeProps,
} from './config'
import getIconType, { registerCustomIconType } from './helpers/getIconType'
import normalize from './helpers/normalizeText'
import {
	getBottomSpace,
	getStatusBarHeight,
	isIphoneX,
	ifIphoneX,
} from './helpers/iphoneX'

// Components exports
export {
	AnimatedView,
	AnimatedImage,
	AnimatedText,
	Avatar,
	Badge,
	BottomSheet,
	Button,
	Card,
	CheckBox,
	ContentBox,
	Divider,
	Header,
	Icon,
	Image,
	Input,
	LinearProgress,
	ListItem,
	Switch,
	Tab,
	TabView,
	Text,
}

// Theme utils exports
export {
	colors,
	fonts,
	getIconType,
	registerCustomIconType,
	normalize,
	ThemeProvider,
	ThemeConsumer,
	ThemeContext,
	withBadge,
	withTheme,
	useTheme,
	makeStyles,
}

// Functions utils exports
export { getBottomSpace, getStatusBarHeight, isIphoneX, ifIphoneX }

// Components Props exports
export type {
	AnimatedProps,
	Animations,
	AvatarProps,
	BadgeProps,
	BottomSheetProps,
	ButtonProps,
	CardProps,
	CheckBoxProps,
	ContentBoxProps,
	Colors,
	DividerProps,
	HeaderProps,
	IconProps,
	ImageProps,
	InputProps,
	LinearProgressProps,
	ListItemAccordionProps,
	ListItemProps,
	ListItemSwipeableProps,
	SwitchProps,
	TabItemProps,
	TabProps,
	TabViewProps,
	TextProps,
}

// Theme props export
export type { FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme }
