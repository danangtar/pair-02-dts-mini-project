import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: 'rgba(31,31,35,0.91)',
            light: 'rgba(72,72,76,0.91)',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#000000',
            paper: '#3b3b3b',
        },
        text: {
            primary: '#ffffff',
            secondary: '#fffffe',
        },
    },
});

export default theme;