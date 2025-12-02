import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
  },

  fonts: {
    heading: `'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: '#030712',
        color: 'gray.50',
      },
    },
  },

  components: {
    Button: {
      variants: {
        primary: (props) => ({
          bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
          color: 'white',
          fontWeight: '600',
          borderRadius: 'xl',
          boxShadow: '0 4px 20px rgba(14, 165, 233, 0.3)',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 30px rgba(14, 165, 233, 0.4)',
            _disabled: {
              transform: 'none',
            },
          },
          _active: {
            transform: 'translateY(-1px)',
          },
        }),
        glass: (props) => ({
          bg: 'whiteAlpha.50',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: 'whiteAlpha.100',
          color: 'gray.300',
          _hover: {
            bg: 'whiteAlpha.100',
            borderColor: 'whiteAlpha.200',
            color: 'white',
          },
        }),
      },
    },
  },
});

export default theme;
