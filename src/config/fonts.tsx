export interface Fonts {
  readonly defalt: {
    regular: {
      regular: {
        fontFamily: string;
        fontWeight: string;
      };
      bold: {
        fontFamily: string;
        fontWeight: string;
      };
    };
  };
}

// fontFamily usa o PostScript name de cada peso (assets/fonts) — RN não resolve
// fontWeight de forma confiável sobre uma família única no iOS, então cada peso
// vira uma "família" própria. Mapeamento pros weight tokens do DS (300-700).
export const fontWeights = {
  light: 'FunnelDisplay-Light', // 300
  regular: 'FunnelDisplay-Regular', // 400
  medium: 'FunnelDisplay-Medium', // 500
  semibold: 'FunnelDisplay-SemiBold', // 600
  bold: 'FunnelDisplay-Bold', // 700
};

export default {
  android: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'normal',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
  default: {
    regular: {
      fontFamily: fontWeights.regular,
      fontWeight: 'normal',
    },
    bold: {
      // mantém SemiBold (peso já usado em produção); Bold 700 real disponível
      // em fontWeights.bold se quiserem peso mais forte — não troquei sozinho.
      fontFamily: fontWeights.semibold,
      fontWeight: 'bold',
    },
  },
};
