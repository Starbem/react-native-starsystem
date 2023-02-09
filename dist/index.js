import AnimatedView from './AnimatedView';
import AnimatedImage from './AnimatedImage';
import AnimatedText from './AnimatedText';
import Avatar from './Avatar';
import Badge, { withBadge } from './Badge';
import BottomSheet from './BottomSheet';
import Button from './Button';
import Card from './Card';
import CheckBox from './CheckBox';
import ContentBox from './ContentBox';
import Divider from './Divider';
import Header from './Header';
import Icon from './Icon';
import Image from './Image';
import Input from './Input';
import LinearProgress from './LinearProgress';
import ListItem from './ListItem';
import Switch from './Switch';
import Tab from './Tab';
import TabView from './TabView';
import Text from './Text';
import { colors, fonts, ThemeProvider, ThemeConsumer, ThemeContext, withTheme, makeStyles, useTheme, } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';
import { getBottomSpace, getStatusBarHeight, isIphoneX, ifIphoneX, } from './helpers/iphoneX';
// Components exports
export { AnimatedView, AnimatedImage, AnimatedText, Avatar, Badge, BottomSheet, Button, Card, CheckBox, ContentBox, Divider, Header, Icon, Image, Input, LinearProgress, ListItem, Switch, Tab, TabView, Text, };
// Theme utils exports
export { colors, fonts, getIconType, registerCustomIconType, normalize, ThemeProvider, ThemeConsumer, ThemeContext, withBadge, withTheme, useTheme, makeStyles, };
// Functions utils exports
export { getBottomSpace, getStatusBarHeight, isIphoneX, ifIphoneX };
