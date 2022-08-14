import NetflixApp from "./components/NetflixApp";
import {ThemeProvider} from '@mui/styles'
import {createTheme} from "@mui/material/styles";
import {ErrorBoundary} from "react-error-boundary";
import {NetflixAppBar} from "./components/NetflixAppBar";

function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div>
            <NetflixAppBar/>
            <div
                role="alert"
                style={{
                    height: '100%',
                    textAlign: 'center',
                    margin: '100px 300px',
                    color: '#fff',
                }}
            >
                <h1 style={{fontSize: '2.5em'}}>Vous cherchez votre chemin ?</h1>
                <pre style={{color: 'red', fontSize: '1em'}}>
                  Erreur : {error.message}
                </pre>

                <div className="banner__buttons">
                    <button className="banner__button banner__buttonplay">
                        Accueil
                    </button>
                </div>
            </div>
        </div>
    )
}

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#111'
        },
        secondary: {
            main: '#000'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
                <NetflixApp/>
            </ErrorBoundary>
        </ThemeProvider>
    )
}

export default App;
