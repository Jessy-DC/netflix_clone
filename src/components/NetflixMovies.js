import React from "react";
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";
import {NetflixHeader} from "./NetflixHeader";
import {getRandomId} from "../utils/helper";
import {clientApi} from "../utils/clientApi";
import {makeStyles} from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import {useFetchData} from "../utils/hooks";
import './Netflix.css';
import {TYPE_MOVIE} from "../config";

const useStyles = makeStyles(theme => ({
    alert: {
        width: '50%',
        margin: 'auto',
        marginBottom: '50px'
    },
    progress: {
        marginLeft: '30px'
    }
}))

const NetflixMovies = () => {
    const {data: headerMovie, error, status, execute} = useFetchData()
    const [type] = React.useState(TYPE_MOVIE)
    const classes = useStyles();
    const defaultMovieId = getRandomId(type);

    React.useEffect(() => {
        execute(clientApi(`${type}/${defaultMovieId}`))
    }, [])

    if (status === 'error') {
        throw new Error(error.message)
    }

    return (
        <div>
            <NetflixAppBar/>
            <NetflixHeader movie={headerMovie?.data} type={type}/>
            <NetflixRow wideImage={true} watermark={true} title="Films Netflix" type={TYPE_MOVIE} filter="trending"/>
            <NetflixRow wideImage={true} watermark={true} title="Les mieux notés" type={TYPE_MOVIE} filter="top_rated"/>
            <NetflixRow wideImage={false} watermark={true} title="Les films populaires" type={TYPE_MOVIE} filter="popular"/>
            <NetflixRow wideImage={true} watermark={true} title="Les films fantastiques" type={TYPE_MOVIE} filter="genres" param="14"/>
            <NetflixRow wideImage={false} watermark={false} title="Les films de science-fiction" type={TYPE_MOVIE} filter="genres" param="878"/>

            {status === 'fetching' ? (
                <div className={classes.progress}>
                    <CircularProgress color="primary" />
                </div>
            ) : null}
            <NetflixFooter/>
        </div>
    )
}

export {NetflixMovies};
