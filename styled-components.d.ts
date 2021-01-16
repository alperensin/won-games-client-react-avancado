import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import theme from 'styles/theme';

// Inferência de tipos
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
