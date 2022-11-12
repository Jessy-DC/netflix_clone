import { useAuth0 } from "@auth0/auth0-react";
import * as React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {AuthApp} from './AuthApp'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E50914',
        },
        secondary: {
            main: '#E50914',
        },
    },
})

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            isAuthenticated && (
                <AuthApp user={user}/>
            )
        </ThemeProvider>
    )
}

export {App}
