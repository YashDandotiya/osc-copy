// lib/theme.js
import { createTheme } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';

export const themeOptions = {
    palette: {
        primary: {
            main: blue[500],
            light: blue[300],
            dark: blue[700],
        },
        secondary: {
            main: green[500],
            light: green[300],
            dark: green[700],
        },
        error: {
            main: red[500],
        },
        background: {
            default: '#f0f0f0',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    spacing: 8, // Example of setting spacing unit
    // You can also add more customizations here
};

// Create the theme object using createTheme
export const appTheme = createTheme(themeOptions);
