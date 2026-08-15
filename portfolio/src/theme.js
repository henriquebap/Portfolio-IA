import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  colors: {
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#2563eb',
      600: '#1d4ed8',
      700: '#1e40af',
    },
  },

  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: 'white',
        color: '#18181b',
      },
      '::selection': {
        bg: 'accent.100',
      },
      'a:focus-visible, button:focus-visible': {
        outline: '2px solid',
        outlineColor: 'accent.500',
        outlineOffset: '2px',
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: '6px',
      },
      variants: {
        primary: {
          bg: '#18181b',
          color: 'white',
          _hover: { bg: '#3f3f46' },
        },
        subtle: {
          bg: 'transparent',
          border: '1px solid',
          borderColor: 'gray.300',
          color: 'gray.700',
          _hover: { borderColor: 'gray.500', bg: 'gray.50' },
        },
        textLink: {
          px: 0,
          h: 'auto',
          fontWeight: 500,
          color: 'accent.600',
          bg: 'transparent',
          _hover: { textDecoration: 'underline', bg: 'transparent' },
        },
      },
    },
    Tag: {
      variants: {
        technical: {
          container: {
            bg: 'gray.100',
            color: 'gray.600',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
          },
        },
      },
    },
  },
});

export default theme;
