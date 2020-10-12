import { theme } from '@chakra-ui/core';

export const appTheme = {
  ...theme,
  fonts: {
    body: 'PT Sans, system-ui, sans-serif',
    heading: 'PT Sans, system-ui, sans-serif',
    mono: 'PT Sans, system-ui, sans-serif',
  },
  colors: {
    ...theme.colors,
    brightGreen: theme.colors.green[300],
    brightRed: theme.colors.red[300],
    brightCyan: theme.colors.cyan[300],
  },
};
