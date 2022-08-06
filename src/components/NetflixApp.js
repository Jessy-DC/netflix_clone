import React from "react";
import './Netflix.css'
import {NetflixAppBar} from "./NetflixAppBar";
import {NetflixFooter} from "./NetflixFooter";
import {NetflixRow} from "./NetflixRow";

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
