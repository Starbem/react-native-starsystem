import BackgroundImage from './BackgroundImage';
import colors, {Colors} from './colors';
import colorsDark from './colorsDark';
import fonts, {fontWeights} from './fonts';
import ThemeProvider, {
  ThemeConsumer,
  ThemeContext,
  ThemeProps,
} from './ThemeProvider';
import withTheme from './withTheme';
import {makeStyles, useTheme} from './makeStyles';
import {Theme, FullTheme, UpdateTheme, ReplaceTheme} from './theme';
import * as tokens from './tokens';

export {
  BackgroundImage,
  colors,
  colorsDark,
  fonts,
  fontWeights,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
  tokens,
};

export type {Theme, FullTheme, UpdateTheme, ReplaceTheme, ThemeProps, Colors};
