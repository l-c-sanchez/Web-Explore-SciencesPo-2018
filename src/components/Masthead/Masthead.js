import React, { Component } from 'react';
import './Masthead.css';
import './color.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label white">Conçu, écrit et réalisé par</span>
                    <span className="Masthead__details">Solène de Larquier, Charlotte Durand, Aurore Gayte, Gabrielle Ramain, Clotilde Ravel, Léa Sanchez, Lucas Wicky, Marie Zafimehy<a href="//twitter.com/sciencespoEDJ" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Traductions</span>
                    <span className="Masthead__details">Caroline Bossard, Sigi Hofmann, Annie Métral, Yann Schreiber, Victoria Wegner, Mathilde Saliou</span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label white">Développeur</span>
                    <span className="Masthead__details">Raphaël Dardeau<a href="//twitter.com/iron_dev" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Correction :</span> Anaïs Bohuon, l’AJL (Association des Journalistes LGBT), Grégory Blachier, Simon Ruben, Patrice Trapier</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Photos :</span> Charlotte Durand et archives personnelles d’Erik Schinegger</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Vidéos :</span> Charlotte Durand, Aurore Gayte, Stanislas Vignon</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Remerciements :</span> Ecole de Journalisme de Sciences Po, Erik et Christa Schinegger</span>
                </div>
            </div>
        );
    }
}
