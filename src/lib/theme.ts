import { Theme } from '@emotion/react';
import { extendTheme } from 'native-base';

export const theme: Theme = {
  palette: {
    primaryText: '#DDD',
    secondaryText: '#777',
    background: '#121212',
    surface: '#1A1A1A',
    border: '#333',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1',
    success: '#2e7d32',
  },
};

export const nativeBaseTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#FFF9CC',
      100: '#FFF3AA',
      200: '#FFED88',
      300: '#FFE666',
      400: '#FFDE44',
      500: '#FFD622',
      600: '#FFCC00',
      700: '#D5AD00',
      800: '#AA8D00',
      900: '#806B00',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 16,
        _stack: {
          space: 4,
        },
      },
      variants: {
        solid: {
          _text: {
            color: '#000',
            fontWeight: '500',
          },
        },
      },
    },
  },
});
