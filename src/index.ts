import AnimatedView, {AnimatedProps} from './AnimatedView';
import AnimatedImage from './AnimatedImage';
import AnimatedText from './AnimatedText';
import Avatar, {AvatarProps} from './Avatar';
import Badge, {BadgeProps, withBadge} from './Badge';
import BottomSheet, {BottomSheetProps} from './BottomSheet';
import Button, {ButtonProps} from './Button';
import ButtonGroup, {ButtonGroupProps} from './ButtonGroup';
import ButtonLiquidGlass, {ButtonLiquidGlassProps} from './ButtonLiquidGlass';
import Card, {CardProps} from './Card';
import CheckBox, {CheckBoxProps} from './CheckBox';
import ContentBox, {ContentBoxProps} from './ContentBox';
import Divider, {DividerProps} from './Divider';
import Dropdown, {DropdownProps, DropdownItem} from './Dropdown';
import Header, {HeaderProps} from './Header';
import Icon, {IconProps} from './Icon';
import Image, {ImageProps} from './Image';
import Input, {InputProps} from './Input';
import LinearProgress, {LinearProgressProps} from './LinearProgress';
import ListItem, {
  ListItemProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
} from './ListItem';
import ModalDatePicker, {ModalDatePickerProps, DateRange} from './ModalDatePicker';
import SocialButton, {SocialButtonProps, SocialProvider} from './SocialButton';
import Switch, {SwitchProps} from './Switch';
import Tab, {TabItemProps, TabProps} from './Tab';
import TabView, {TabViewProps} from './TabView';
import Text, {TextProps} from './Text';

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
} from './config';
import getIconType, {registerCustomIconType} from './helpers/getIconType';
import normalize from './helpers/normalizeText';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
  ifIphoneX,
} from './helpers/iphoneX';

// Components exports
export {
  AnimatedView,
  AnimatedImage,
  AnimatedText,
  Avatar,
  Badge,
  BottomSheet,
  Button,
  ButtonGroup,
  ButtonLiquidGlass,
  Card,
  CheckBox,
  ContentBox,
  Divider,
  Dropdown,
  Header,
  Icon,
  Image,
  Input,
  LinearProgress,
  ListItem,
  ModalDatePicker,
  SocialButton,
  Switch,
  Tab,
  TabView,
  Text,
};

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
};

// Functions utils exports
export {getBottomSpace, getStatusBarHeight, isIphoneX, ifIphoneX};

// Components Props exports
export type {
  AnimatedProps,
  AvatarProps,
  BadgeProps,
  BottomSheetProps,
  ButtonProps,
  ButtonGroupProps,
  ButtonLiquidGlassProps,
  CardProps,
  CheckBoxProps,
  ContentBoxProps,
  Colors,
  DateRange,
  DividerProps,
  DropdownItem,
  DropdownProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ListItemAccordionProps,
  ListItemProps,
  ListItemSwipeableProps,
  ModalDatePickerProps,
  SocialButtonProps,
  SocialProvider,
  SwitchProps,
  TabItemProps,
  TabProps,
  TabViewProps,
  TextProps,
};

// Theme props export
export type {FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme};
