import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import SignIn from './components/SignIn';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
