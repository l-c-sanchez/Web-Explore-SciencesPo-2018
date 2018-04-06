import React, { Component } from 'react';
import './Masthead.css';

export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label">Auteur</span>
                    <span className="Masthead__details">Pierre Callewaert <a href="//twitter.com/callewaertp" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Directeur artistique</span>
                    <span className="Masthead__details">Raphaël Bonan <a href="//twitter.com/RaphaelBonan" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Développeur</span>
                    <span className="Masthead__details">Raphaël Dardeau <a href="//twitter.com/iron_dev" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label">Coordinateurs éditorial</span>
                    <span className="Masthead__details">Rémy Fière <a href="//twitter.com/rem_le_germ" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a>
                    <br />Aurélien Delfosse <a href="//twitter.com/auredelfosse" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label">Correction :</span> Emir Harbi</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label">Photos :</span> L'Equipe, Tom Vander Heyden, P. van Hoorebeke (X Magazine) et Belga (Icon Sport)</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label">Archives vidéo :</span> VRT et UCI</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label">Remerciements :</span> Marc van der Beken (NADO Vlaanderen); Louis Chenaille (Union cycliste internationale) ; Philippe Mariën et Jos Smets (Koninglijke Belgische Wielrijdersbond) ; Linda De Leeuw et Alain van Driessche (VRT) ; Ed Hanssen.</span>
                </div>
            </div>
        );
    }
}
