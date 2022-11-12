import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import NetflixApp from "./components/NetflixApp";
import {NetflixById} from "./components/NetflixById";
import {NetflixMovies} from "./components/NetflixMovies";
import NetflixSeries from "./components/NetflixSeries";
import {NetflixNews} from "./components/NetflixNews";
import {Error404} from "./components/Error404";
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

function AuthApp({user}) {
    return (
        <Router>
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
        </Router>
    )
}

export {AuthApp}
