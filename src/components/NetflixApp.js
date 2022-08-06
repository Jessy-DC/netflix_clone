import React from "react";
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";
import {getRandomId, getRandomType} from "../utils/helper";
import {imagePathOriginal, TYPE_MOVIE} from "../config";
import {clientApi} from "../utils/clientApi";
import './Netflix.css';

const NetflixHeader = ({movie, type = TYPE_MOVIE}) => {
    const title = type === TYPE_MOVIE ? movie?.title : movie?.name
    const imageUrl = `${imagePathOriginal}${movie?.backdrop_path}`
    const banner = {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: 'white',
        objectFit: 'contain',
        height: '448px'
    }

    if (!movie) {
        return <></>
    }

    return (
        <header style={banner}>
            <div className="banner__contents">
                <h1 className="banner__title">{title ?? '...'}</h1>
                <div className="banner__buttons">
                    <button className="banner__button banner__buttonplay">Lecture</button>
                    <button className="banner__button banner__buttonInfo">Ajouter à ma liste</button>
                </div>
                <h1 className="synopsis">
                    {movie?.overview ?? '...'}
                </h1>
            </div>
        </header>
    )
}

const NetflixApp = () => {
    const [headerMovie, setHeaderMovie] = React.useState();
    const [type] = React.useState(getRandomType())

    const defaultMovieId = getRandomId(type)

    React.useEffect(() => {
        clientApi(`${type}/${defaultMovieId}`)
            .then(response => setHeaderMovie(response))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <NetflixAppBar/>
            <NetflixHeader movie={headerMovie?.data} type={type}/>
            <NetflixRow wideImage={false} title="Films Netflix"/>
            <NetflixRow wideImage={true} title="Séries Netflix"/>
            <NetflixFooter/>
        </div>
    )
}

export default NetflixApp;
