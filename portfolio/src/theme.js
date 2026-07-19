import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  colors: {
    brand: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  },

  fonts: {
    heading: `'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: '#030912',
        color: 'gray.50',
      },
      '::selection': {
        bg: 'brand.700',
        color: 'white',
      },
      'a:focus-visible, button:focus-visible': {
        outline: '2px solid',
        outlineColor: 'brand.300',
        outlineOffset: '3px',
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: '2px',
      },
      variants: {
        primary: {
          bg: 'brand.300',
          color: '#021018',
          boxShadow: '0 12px 40px rgba(103, 232, 249, .16)',
          _hover: {
            bg: 'brand.200',
            transform: 'translateY(-2px)',
            boxShadow: '0 16px 48px rgba(103, 232, 249, .22)',
            _disabled: {
              transform: 'none',
            },
          },
        },
        outlineSignal: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'whiteAlpha.200',
          color: 'gray.300',
          _hover: {
            bg: 'whiteAlpha.50',
            borderColor: 'brand.300',
            color: 'white',
          },
        },
        glass: {
          bg: 'whiteAlpha.50',
          border: '1px solid',
          borderColor: 'whiteAlpha.100',
          color: 'gray.300',
          _hover: { bg: 'whiteAlpha.100', color: 'white' },
        },
        textLink: {
          px: 0,
          h: 'auto',
          color: 'gray.300',
          bg: 'transparent',
          _hover: { color: 'brand.300', bg: 'transparent' },
        },
        iconLink: {
          minW: 9,
          h: 9,
          p: 0,
          color: 'gray.500',
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'whiteAlpha.100',
          _hover: { color: 'brand.300', borderColor: 'brand.700' },
        },
      },
    },
    Badge: {
      variants: {
        signal: {
          px: 3,
          py: 1.5,
          borderRadius: '2px',
          bg: 'rgba(103, 232, 249, .08)',
          border: '1px solid',
          borderColor: 'brand.700',
          color: 'brand.300',
          fontFamily: 'mono',
          fontSize: '10px',
          letterSpacing: '.08em',
        },
        quiet: {
          px: 2,
          py: 1,
          borderRadius: '2px',
          bg: 'whiteAlpha.50',
          color: 'gray.500',
          fontFamily: 'mono',
          fontSize: '10px',
          letterSpacing: '.06em',
        },
      },
    },
    Tag: {
      variants: {
        technical: {
          container: {
            bg: 'transparent',
            color: 'gray.500',
            border: '1px solid',
            borderColor: 'whiteAlpha.100',
            borderRadius: '2px',
            fontFamily: 'mono',
            fontSize: '10px',
            letterSpacing: '.02em',
          },
        },
      },
    },
  },
});

export default theme;
