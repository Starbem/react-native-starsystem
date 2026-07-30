// Starbem Design System tokens — additive, opt-in. Não substitui `colors`/`fonts`
// (mantidos por compat com apps que já consomem essa lib); novos componentes
// devem preferir estes tokens em vez de hardcodar valor solto.

export interface ColorScale {
  lightest: string;
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
  darkest: string;
}

export const primaryScale: ColorScale = {
  lightest: '#FFF1E0',
  lighter: '#FFC992',
  light: '#FF9353',
  base: '#FF5100',
  dark: '#D03700',
  darker: '#A31B00',
  darkest: '#900700',
};

export const secondaryScale: ColorScale = {
  lightest: '#F3E9FC',
  lighter: '#D1B4F6',
  light: '#AE8EF1',
  base: '#7F56D9',
  dark: '#5A40B5',
  darker: '#461FAE',
  darkest: '#18176B',
};

export const tertiaryScale: ColorScale = {
  lightest: '#FFF3E3',
  lighter: '#F68FAF',
  light: '#F263A6',
  base: '#ED2E98',
  dark: '#C01857',
  darker: '#930620',
  darkest: '#7C0008',
};

export const neutralScale = {
  25: '#F7F7F7',
  50: '#EFEFEF',
  100: '#E2E2E2',
  200: '#CFCFCF',
  300: '#B6B6B6',
  400: '#9C9C9C',
  500: '#808080',
  600: '#656565',
  700: '#4D4D4D',
  800: '#393939',
  900: '#2C2C2C',
  1000: '#272727',
};

export const inkScale = {
  900: '#101828',
  800: '#1C1B1F',
  700: '#344054',
  600: '#475467',
  500: '#667085',
  300: '#D0D5DD',
  200: '#EAECF0',
  100: '#F2F4F7',
  50: '#F9FAFB',
};

export const semanticColors = {
  textPrimary: inkScale[900],
  textSecondary: inkScale[600],
  textTertiary: inkScale[500],
  textOnBrand: '#FFFFFF',
  textDisabled: neutralScale[400],
  textLink: secondaryScale.base,
  surfacePage: inkScale[50],
  surfaceCard: '#FFFFFF',
  surfaceSunken: inkScale[100],
  surfaceInverse: inkScale[800],
  borderSubtle: inkScale[200],
  borderDefault: inkScale[300],
  borderStrong: neutralScale[400],
  borderFocus: primaryScale.base,
};

// Grid 4px, base 16px.
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
};

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16, // default de botão/controle
  xl: 24,
  '2xl': 32,
  full: 9999,
};

interface ShadowToken {
  shadowColor: string;
  shadowOffset: {width: number; height: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

// rgba(16,24,40,x) — ink #101828. Elevation Android é aproximação, RN não tem
// blur/spread nativo pra casar 1:1 com o CSS multi-shadow do DS.
export const shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', ShadowToken> = {
  xs: {
    shadowColor: 'rgba(16,24,40,1)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: 'rgba(16,24,40,1)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: 'rgba(16,24,40,1)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: 'rgba(16,24,40,1)',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: 'rgba(16,24,40,1)',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 12,
  },
};

interface TypeStyle {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

// Funnel Display em todo peso/tamanho — ver src/config/fonts.tsx pro fontFamily.
export const typeScale: Record<string, TypeStyle> = {
  displayXl: {fontSize: 60, lineHeight: 72, letterSpacing: -1.2},
  displayLg: {fontSize: 52, lineHeight: 64, letterSpacing: -1.04},
  displayMd: {fontSize: 48, lineHeight: 60, letterSpacing: -0.96},
  h1: {fontSize: 36, lineHeight: 44, letterSpacing: 0},
  h2: {fontSize: 30, lineHeight: 38, letterSpacing: 0},
  h3: {fontSize: 24, lineHeight: 32, letterSpacing: 0.5},
  h4: {fontSize: 22, lineHeight: 28, letterSpacing: 0.5},
  subtitleLg: {fontSize: 18, lineHeight: 24, letterSpacing: 0.25},
  subtitleMd: {fontSize: 16, lineHeight: 24, letterSpacing: 0.5},
  subtitleSm: {fontSize: 14, lineHeight: 20, letterSpacing: 0.1},
  caption: {fontSize: 12, lineHeight: 16, letterSpacing: 0.5},
  overline: {fontSize: 10, lineHeight: 16, letterSpacing: 0.5},
};
