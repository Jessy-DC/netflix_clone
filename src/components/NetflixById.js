import React from "react";
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";
import {NetflixHeader} from "./NetflixHeader";
import {clientApi} from "../utils/clientApi";
import {makeStyles} from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import {useFetchData} from "../utils/hooks";
import './Netflix.css';
import {TYPE_MOVIE, TYPE_TV} from "../config";
import {useLocation, useParams} from "react-router-dom";

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

const NetflixById = () => {
    const {data: headerMovie, error, status, execute} = useFetchData()
    const {tvId, movieId} = useParams();
    const location = useLocation();
    const [type, setType] = React.useState(
        location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE
    )
    const classes = useStyles();
    const [id, setId] = React.useState(type === TYPE_TV ? tvId : movieId)

    React.useEffect(() => {
        execute(clientApi(`${type}/${id}`))
    }, [execute, type, id])

    React.useEffect(() => {
        const type = location.pathname.includes(TYPE_TV) ? TYPE_TV : TYPE_MOVIE;
        setType(type);
        setId(type === TYPE_TV ? tvId : movieId)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location.pathname, movieId, tvId])

    if (status === 'error') {
        throw new Error(error.message)
    }

    return (
        <div>
            <NetflixAppBar/>
            <NetflixHeader movie={headerMovie?.data} type={type}/>
            <NetflixRow wideImage={true} watermark={true} title="Films Netflix" type={TYPE_MOVIE} filter="trending"/>
            <NetflixRow wideImage={false} watermark={true} title="Séries Netflix" type={TYPE_TV} filter="trending"/>
            <NetflixRow wideImage={true} watermark={true} title="Les mieux notés" type={TYPE_MOVIE} filter="top_rated"/>
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

export {NetflixById};
