import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../src/style/theme';
import { AuthProvider } from './auth/AuthProvider';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
