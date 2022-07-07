import { createTheme } from '@mui/material'

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    },
    palette: {
        primary: {
            main: 'rgba(0,0,0,0.1)',
            light: '#fff',
            dark: '#bbb'
        },
        secondary: {
            main: '#F0F2F5',
        },
    },
    shadows: [
        'none',
        '0px 1px 2px rgba(0,0,0,0.2)',
        'none', 'none', 'none', 'none', 'none', 'none',
        'none', 'none', 'none', 'none', 'none', 'none',
        'none', 'none', 'none', 'none', 'none', 'none',
        'none', 'none', 'none', 'none', 'none',
    ]
})

export default theme