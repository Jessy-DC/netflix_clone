import React from "react";
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";
import {NetflixHeader} from "./NetflixHeader";
import {getRandomId, getRandomType} from "../utils/helper";
import {clientApi} from "../utils/clientApi";
import {makeStyles} from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import {useFetchData} from "../utils/hooks";
import './Netflix.css';
import {TYPE_MOVIE, TYPE_TV} from "../config";

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

const NetflixNews = () => {
    const {data: headerMovie, error, status, execute} = useFetchData()
    const [type] = React.useState(getRandomType())
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
            <NetflixRow wideImage={false} watermark={true} title="Séries Netflix" type={TYPE_TV} filter="trending"/>
            <NetflixRow wideImage={true} watermark={true} title="Les films populaires" type={TYPE_MOVIE} filter="popular"/>
            <NetflixRow wideImage={true} watermark={true} title="Action & Aventure" type={TYPE_TV} filter="genres" param="10759"/>
            <NetflixRow wideImage={false} watermark={false} title="Les documentaires" type={TYPE_MOVIE} filter="genres" param="99"/>

            {status === 'fetching' ? (
                <div className={classes.progress}>
                    <CircularProgress color="primary" />
                </div>
            ) : null}
            <NetflixFooter/>
        </div>
    )
}

export {NetflixNews};
