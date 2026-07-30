import AnimatedView, {AnimatedProps} from './AnimatedView';
import AnimatedImage from './AnimatedImage';
import AnimatedText from './AnimatedText';
import Alert, {AlertProps} from './Alert';
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
import IconButton, {IconButtonProps} from './IconButton';
import Image, {ImageProps} from './Image';
import Input, {InputProps} from './Input';
import LinearProgress, {LinearProgressProps} from './LinearProgress';
import ListItem, {
  ListItemProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
} from './ListItem';
import Message, {
  MessageProps,
  Reaction,
  TypingMessage,
  TypingMessageProps,
  MessageDay,
  MessageDayProps,
  SystemMessage,
  SystemMessageProps,
  MessageList,
  MessageListProps,
} from './Message';
import Modal, {ModalProps} from './Modal';
import ModalDatePicker, {ModalDatePickerProps, DateRange} from './ModalDatePicker';
import Radio, {RadioProps} from './Radio';
import Skeleton, {SkeletonProps} from './Skeleton';
import SocialButton, {SocialButtonProps, SocialProvider} from './SocialButton';
import Spinner, {SpinnerProps, Dots, DotsProps} from './Spinner';
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
  Alert,
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
  Dots,
  Header,
  Icon,
  IconButton,
  Image,
  Input,
  LinearProgress,
  ListItem,
  Message,
  MessageDay,
  MessageList,
  Modal,
  ModalDatePicker,
  Radio,
  Skeleton,
  SocialButton,
  Spinner,
  Switch,
  SystemMessage,
  Tab,
  TabView,
  Text,
  TypingMessage,
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
  AlertProps,
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
  DotsProps,
  DropdownItem,
  DropdownProps,
  HeaderProps,
  IconButtonProps,
  IconProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ListItemAccordionProps,
  ListItemProps,
  ListItemSwipeableProps,
  MessageProps,
  MessageDayProps,
  MessageListProps,
  ModalProps,
  ModalDatePickerProps,
  Reaction,
  RadioProps,
  SkeletonProps,
  SocialButtonProps,
  SocialProvider,
  SpinnerProps,
  SwitchProps,
  SystemMessageProps,
  TabItemProps,
  TabProps,
  TabViewProps,
  TextProps,
  TypingMessageProps,
};

// Theme props export
export type {FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme};
