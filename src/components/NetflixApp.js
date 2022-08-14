import React from "react";
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";
import {NetflixHeader} from "./NetflixHeader";
import {getRandomId, getRandomType} from "../utils/helper";
import {clientApi} from "../utils/clientApi";
import {makeStyles} from "@mui/styles";
import {Alert, AlertTitle} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import './Netflix.css';
import {useFetchData} from "../utils/hooks";

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

const NetflixApp = () => {
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
            <NetflixRow wideImage={false} title="Films Netflix"/>
            <NetflixRow wideImage={true} title="Séries Netflix"/>
            {/*{status === 'error' ? (*/}
            {/*    <div className={classes.alert}>*/}
            {/*        <Alert severity="error">*/}
            {/*            <AlertTitle>Une erreur est survenue</AlertTitle>*/}
            {/*            Détail : {error.message}*/}
            {/*        </Alert>*/}
            {/*    </div>*/}
            {/*) : null}*/}
            {status === 'fetching' ? (
                <div className={classes.progress}>
                    <CircularProgress color="primary" />
                </div>
            ) : null}
            <NetflixFooter/>
        </div>
    )
}

export default NetflixApp;
