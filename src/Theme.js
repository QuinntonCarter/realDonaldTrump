import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#000000',
        _dark: '#ffffff',
      },
    },
  },
});
