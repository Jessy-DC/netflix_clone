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
import {TYPE_TV} from "../config";

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

const NetflixSeries = () => {
    const {data: headerMovie, error, status, execute} = useFetchData()
    const [type] = React.useState(TYPE_TV);
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
            <NetflixRow wideImage={true} watermark={true} title="Séries tendances Netflix" type={TYPE_TV} filter="trending"/>
            <NetflixRow wideImage={false} watermark={true} title="Séries les mieux notés" type={TYPE_TV} filter="top_rated"/>
            <NetflixRow wideImage={true} watermark={true} title="Séries populaire" type={TYPE_TV} filter="popular"/>
            <NetflixRow wideImage={false} watermark={false} title="Les documentaires" type={TYPE_TV} filter="genres" param="99"/>
            <NetflixRow wideImage={true} watermark={true} title="Les séries criminelles" type={TYPE_TV} filter="genres" param="80"/>

            {status === 'fetching' ? (
                <div className={classes.progress}>
                    <CircularProgress color="primary" />
                </div>
            ) : null}
            <NetflixFooter/>
        </div>
    )
}

export default NetflixSeries;
