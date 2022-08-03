import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './Netflix.css'

const NetflixApp = () => {
    const [appBarStyle, setAppBarStyle] = React.useState({
        background: 'transparent',
        boxShadow: 'none',
    })

    React.useEffect(() => {
        const onScroll = e => {
            if (e.target.documentElement.scrollTop >= 100) {
                setAppBarStyle({
                    background: '#111',
                    transition: 'background .5s ease-out',
                    boxShadow: 'none'
                })
            } else {
                setAppBarStyle({
                    background: 'transparent',
                    transition: 'background .5s ease-out',
                    boxShadow: 'none'
                })
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const margin10 = {margin: 10}

    const marginLeft = {margin: 'auto'}

    return (
        <div>
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <img src="images/netflix-logo.png" alt="" height="20" />
                    <a href="/">
                        <Typography variant="h6" style={margin10}>
                            Accueil
                        </Typography>
                    </a>
                    <a href="/series">
                        <Typography variant="h6" style={margin10}>
                            Séries
                        </Typography>
                    </a>
                    <a href="/movies">
                        <Typography variant="h6" style={margin10}>
                            Films
                        </Typography>
                    </a>
                    <a href="/news">
                        <Typography variant="h6" style={margin10}>
                            Nouveautés
                        </Typography>
                    </a>
                    <a href="/list">
                        <Typography variant="h6" style={margin10}>
                            Ma liste
                        </Typography>
                    </a>
                    <img src="images/netflix-avatar.png" style={marginLeft} alt="" height="20" />
                </Toolbar>
            </AppBar>
            <header className="banner">
                <div className="banner__contents">
                    <h1 className="banner__title">La casa de papel</h1>
                    <div className="banner__buttons">
                        <button className="banner__button banner__buttonplay">Lecture</button>
                        <button className="banner__button banner__buttonInfo">Ajouter à ma liste</button>
                    </div>
                    <h1 className="synopsis">
                        Le Professeur recrute une jeune brauqeuse et sept autres criminels en vue d'un cambriolage
                        grandiose ciblant la Maison royale de la Monnaie d'Espagne
                    </h1>
                </div>
            </header>
            <div className="row">
                <h2>Films Netflix</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="images/sample.jpg" alt=""/>
                    <img className="row__poster row__posterLarge" src="images/sample1.jpg" alt=""/>
                    <img className="row__poster row__posterLarge" src="images/sample.jpg" alt=""/>
                    <img className="row__poster row__posterLarge" src="images/sample1.jpg" alt=""/>
                </div>
            </div>

            <div className="row">
                <h2>Séries Netflix</h2>
                <div className="row__posters">
                    <img className="row__poster row__posterLarge" src="images/sample-poster.jpg" alt=""/>
                    <img className="row__poster row__posterLarge" src="images/sample-poster1.jpg" alt="" />
                    <img className="row__poster row__posterLarge" src="images/sample-poster.jpg" alt=""/>
                    <img className="row__poster row__posterLarge" src="images/sample-poster1.jpg" alt=""/>
                </div>
            </div>
            <footer className="footer">
                2022 - Netflix clone
            </footer>
        </div>
    )
}

export default NetflixApp;
