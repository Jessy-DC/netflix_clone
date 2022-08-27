import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'

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
                <Link to="/">
                    <Typography variant="h6" style={margin10}>
                        Accueil
                    </Typography>
                </Link>
                <Link to="/series">
                    <Typography variant="h6" style={margin10}>
                        Séries
                    </Typography>
                </Link>
                <Link to="/movies">
                    <Typography variant="h6" style={margin10}>
                        Films
                    </Typography>
                </Link>
                <Link to="/news">
                    <Typography variant="h6" style={margin10}>
                        Nouveautés
                    </Typography>
                </Link>
                <Link to="/list">
                    <Typography variant="h6" style={margin10}>
                        Ma liste
                    </Typography>
                </Link>
                <img src="images/netflix-avatar.png" style={marginLeft} alt="" height="20" />
            </Toolbar>
        </AppBar>
    )
}

export { NetflixAppBar }
