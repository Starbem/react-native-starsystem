import {StyleSheet} from 'react-native';

interface PlatformColors {
  primary: string;
  secondary: string;
  grey: string;
  searchBg: string;
  success: string;
  error: string;
  warning: string;
}

export interface Colors {
  readonly primary: string;
  readonly primaryLight: string;
  readonly secondary: string;
  readonly secondaryLight: string;
  readonly white: string;
  readonly black: string;
  readonly grey0: string;
  readonly grey1: string;
  readonly grey2: string;
  readonly grey3: string;
  readonly grey4: string;
  readonly grey5: string;
  readonly greyOutline: string;
  readonly searchBg: string;
  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly disabled: string;
  readonly divider: string;
  readonly platform: {
    ios: PlatformColors;
    android: PlatformColors;
    web: PlatformColors;
    default: PlatformColors;
  };
}

const colors: Colors = {
  primary: '#FF6B19',
  primaryLight: '#FF9B00',
  secondary: '#FF3F72',
  secondaryLight: '#FFE4EB',
  white: '#ffffff',
  black: '#2C2B43',
  grey0: '#525166',
  grey1: '#787887',
  grey2: '#C5C9D5',
  grey3: '#D9DCE6',
  grey4: '#F0F2F8',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#1FBA5D',
  error: '#FF4242',
  warning: '#F89F4D',
  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#007aff',
      secondary: '#5856d6',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
    },
    android: {
      primary: '#2196f3',
      secondary: '#9C27B0',
      grey: 'rgba(0, 0, 0, 0.54)',
      searchBg: '#dcdce1',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ffeb3b',
    },
    web: {
      primary: '#2089dc',
      secondary: '#ca71eb',
      grey: '#393e42',
      searchBg: '#303337',
      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14',
    },
    default: {
      primary: '#007aff',
      secondary: '#5856d6',
      grey: '#7d7d7d',
      searchBg: '#dcdce1',
      success: '#4cd964',
      error: '#ff3b30',
      warning: '#ffcc00',
    },
  },
};

export default colors;
