import NetflixApp from "./components/NetflixApp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {NetflixMovies} from "./components/NetflixMovies";
import NetflixSeries from "./components/NetflixSeries";
import {NetflixNews} from "./components/NetflixNews";
import {NetflixById} from "./components/NetflixById";
import {ThemeProvider} from '@mui/styles'
import {createTheme} from "@mui/material/styles";
import {ErrorBoundary} from "react-error-boundary";
import {NetflixAppBar} from "./components/NetflixAppBar";
import {Error404} from "./components/Error404";

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
        <Router>
            <ThemeProvider theme={theme}>
                <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
                }}>
                    <Routes>
                        <Route path="/" element={<NetflixApp/>}/>
                        <Route path="/tv/:tvId" element={<NetflixById/>}/>
                        <Route path="/movie/:movieId" element={<NetflixById/>}/>
                        <Route path="/movies" element={<NetflixMovies/>}/>
                        <Route path="/series" element={<NetflixSeries/>}/>
                        <Route path="/news" element={<NetflixNews/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </ErrorBoundary>
            </ThemeProvider>
        </Router>
    )
}

export default App;
