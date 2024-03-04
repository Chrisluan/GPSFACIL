import { grey, green } from '@mui/material/colors';

export default (darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? green[900] : green[50],
  },
  primary: {
    main: darkMode ? green[200] : green[900],
  },
  secondary: {
    main: darkMode ? green[200] : green[400],
  },
  neutral: {
    main: green[50],
  },
  geometry: {
    main: '#3bb2d0',
  },
});
