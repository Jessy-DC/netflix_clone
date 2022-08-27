import React from "react";
import {clientApi} from "../utils/clientApi";
import {Alert, AlertTitle} from "@mui/material";
import {useFetchData} from "../utils/hooks";
import {RowSkeleton} from "./skeletons/RowSkeleton";
import {imagePathOriginal, TYPE_MOVIE} from "../config";
import {Link} from 'react-router-dom';

const NetflixRow = ({title = '', wideImage = true, type = TYPE_MOVIE, param,
                        filter = 'popular', watermark = false}) => {
    const {data, error, status, execute} = useFetchData();
    const endpointPopular = `${type}/popular`
    const endpointLatest = `${type}/latest`
    const endpointTopRated = `${type}/top_rated`
    const endpointGenre = `discover/${type}?with_genres=${param}`
    const endpointTrending = `trending/${type}/day`

    let endpoint;

    switch (filter) {
        case 'popular':
            endpoint = endpointPopular;
            break;
        case 'latest':
            endpoint = endpointLatest;
            break;
        case 'top_rated':
            endpoint = endpointTopRated;
            break;
        case 'genres':
            endpoint = endpointGenre;
            break;
        case 'trending':
            endpoint = endpointTrending;
            break;
        default:
            break;
    }

    React.useEffect(() => {
        execute(clientApi(`${endpoint}`))
    }, [endpoint, execute])

    const buildImagePath = data => {
        const image = wideImage ? data?.backdrop_path : data?.poster_path
        return `${imagePathOriginal}${image}`;
    }

    const watermarkClass = watermark ? 'watermarked' : '';

    if (status === 'fetching' || status === 'idle') {
        return (
            <RowSkeleton title={title} wideImage={wideImage} />
        )
    }

    if (status === 'error') {
        return (
            <Alert severity="error">
                <AlertTitle>Une erreur est survenue</AlertTitle>
                Detail : {error.message}
            </Alert>
        )
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {data.data.results.map((media) => {
                    return (
                        <Link to={`/${type}/${media.id}`}>
                            <div key={media.id} className={`row__poster row__posterLarge ${watermarkClass}`}>
                                <img src={buildImagePath(media)} alt={media.name} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export { NetflixRow }
