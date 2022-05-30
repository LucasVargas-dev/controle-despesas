import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routes } from './routes';
import { AuthProvider } from './store/Auth';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>

      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;