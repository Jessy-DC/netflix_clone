import React from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './Netflix.css'

const NetflixAppBar = () => {
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
    )
}

const NetflixHeader = () => {
    return (
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
    )
}

const NetflixFooter = () => {
    return (
        <footer className="footer">
            2022 - Netflix clone
        </footer>
    )
}

const NetflixRow = ({title = '', wideImage = true}) => {
    const image = wideImage ? "images/sample-poster.jpg" : "images/sample.jpg";
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                <img className="row__poster row__posterLarge" src={image} alt=""/>
                <img className="row__poster row__posterLarge" src={image} alt=""/>
                <img className="row__poster row__posterLarge" src={image} alt=""/>
                <img className="row__poster row__posterLarge" src={image} alt=""/>
            </div>
        </div>
    )
}

const NetflixApp = () => {
    return (
        <div>
            <NetflixAppBar />
            <NetflixHeader />
            <NetflixRow wideImage={false} title="Films Netflix" />
            <NetflixRow wideImage={true} title="Séries Netflix" />
            <NetflixFooter />
        </div>
    )
}

export default NetflixApp;
