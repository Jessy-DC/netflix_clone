import * as React from "react";
import {Skeleton} from "@mui/material";

const RowSkeleton = ({nbElement = 20, title = 'Films', wideImage = true}) => {
    const posterSkeletons = [];

    for (let i = 0; i < nbElement; i++) {
        posterSkeletons.push(
            <div key={i} className={'row__poster row__posterLarge'}>
                <Skeleton
                    variant={"rectangular"}
                    width={wideImage ? 400 : 166}
                    height={wideImage ? 225 : 250}
                />
            </div>
        )
    }

    return (
        <>
            <div className="row">
                <h2>{title}</h2>
                <div className="row__posters">
                    {posterSkeletons}
                </div>
            </div></>
    )
}

export {RowSkeleton}