import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';

function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
        height = Math.min(document.documentElement.clientHeight, config.ratio.height),
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
    }

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
        boardTop: boardTop
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
            boardTop:getSizes().boardTop
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
                boardTop:getSizes().boardTop
            });
        });
    }

    render() {

        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                {/* CHAP 0 */}
                <div className="Board__slide js-board-doubleslide">
                    <Skew position="right" name="CHAP00-SOUS-TITRE.png" bg="CHAP00-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide"></div>
                <div className="Board__slide">
                    <Element name="CHAP00-TITRE1.png" index="p1" positionLeft="-40%"></Element>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="37%"></Edito>
                    <Element name="AP-CHAP00-CONFETTIS.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP00-CARNAVAL1.png"></Element>
                    <Element name="CHAP00-MASQUE.png" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="CHAP00-CITATION1.png" index="p1" positionLeft="20%"></Element>
                    <Element name="CHAP00-CARNAVAL2.png"></Element>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[0].zone_2}></Edito>
                </div>
                {/* CHAP 1 */}
                <div className="Board__slide">
                    <Skew position="left" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide">
                    <Element name="AP-CHAP01-CARTE.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-GRANDJOUR.png" index="p1" positionLeft="-10%"></Element>
                    <Edito content={this.props.datas.text[1].zone_1} positionTop="41%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_2} positionBottom="52%"></Edito>
                    <Element name="CHAP01-CITATION1.png" index="p1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-PHOTO1.png"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-RATEE.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="35%"></Edito>
                </div>
                {/*}<div className="Board__slide">
                    <Element name="CHAP01-PHOTO2.png"></Element>
                </div>{*/}
                <div className="Board__slide">
                    <Video id="k5yBVnMJKNqZ6Rn1XAU" ratio="1.37"></Video>
                    <Element name="AP-CHAP01-FEMKE.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CABLES.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="37%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-MOTEUR.png"></Element>
                    <Element name="AP-CHAP01-ROUE-1.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <StaticElement name="CHAP01-FEMKE-NB-TITRE.png" bg="CHAP01-FEMKE-NB.png" size="simple"></StaticElement>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CITATION3.png" index="p1"></Element>
                    <Element name="CHAP01-CITATION3-VISAGE.png"></Element>
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="65%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CHOC.png" index="p1"></Element>
                    <Element name="AP-CHAP01-ROUE-2.gif" index="m1"></Element>
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="29%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Element name="CHAP01-CITATION4.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_8} positionBottom="44%"></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-SUPPORTER.png"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="AP-CHAP01-MONTAGNE-OR-1.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CITATION5.png"></Element>
                    <Element name="AP-CHAP01-MONTAGNE-OR-2.png" index="m2"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-CITATION6.png"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP01-NEERLANDAISE-TITRE.png" index="p1"></Element>
                    <Element name="CHAP01-NEERLANDAISE.png"></Element>
                    <Edito content={this.props.datas.text[1].zone_9} positionTop="45%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k4gBurrn3vCiRFn1XCr" ratio="1.37"></Video>
                    <Element name="CHAP01-ZIG.png" index="p1"></Element>
                </div>
                <div className="Board__slide js-board-doubleslide">
                    <Element name="CHAP01-KOPPENBERG.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[1].zone_10} positionTop="28%"></Edito>
                </div>
                {/* CHAP 2 */}
                <div className="Board__slide">
                    <Skew position="left" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide"></div>
                <div className="Board__slide">
                    <Element name="CHAP02-FETE.png" index="p1" positionLeft="-10%"></Element>
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="29%"></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k27mDGIZTvRdUxn1XBM" ratio="1.37"></Video>
                    <Element name="CHAP02-ZIG.png" index="m1" positionLeft="-25%"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-AMI.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="50%"></Edito>
                    <Element name="AP-CHAP02-FRITES-1.png" index="p1" positionLeft="-50%"></Element>
                    <Element name="CHAP02-PIGEON.png"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="AP-CHAP02-FRITES-2.png" index="m1"></Element>
                    <Edito content={this.props.datas.text[2].zone_4}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP02-GRANDFRERE.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[2].zone_5} positionTop="29%"></Edito>
                    <Element name="AP-CHAP03-TRACES-BIG-NOIR.png" index="m1"></Element>
                    <Element name="AP-CHAP03-TRACES-BIG-JAUNE.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[2].zone_6}></Edito>
                </div>
                <div className="Board__slide">
                    <Video id="k1DnGSfRTDorXdn1XDn" ratio="1.37"></Video>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[2].zone_7}></Edito>
                </div>
                {/* CHAP 3 */}
                <div className="Board__slide">
                    <Skew position="left" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide"></div>
                <div className="Board__slide">
                    <Element name="CHAP03-CYCLOCROSS.png" index="p1"></Element>
                    <Element name="CHAP03-PORTRAIT-FEMKE.png"></Element>
                    <Element name="AP-CHAP03-PORTRAIT-FEMKE.png" index="m2"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_1}></Edito>
                </div>
                <div className="Board__slide">
                    <StaticElement name="CHAP03-AVENDRE.png" bg="AP-CHAP03-AVENDRE.png" size="double"></StaticElement>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_2}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_3}></Edito>
                </div>
                <div className="Board__slide">
                    <Element name="CHAP03-VELO.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="48%"></Edito>
                    <Element name="AP-CHAP03-CARTE.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Element name="AP-CHAP03-CHUTE.png" index="p1"></Element>
                    <Edito content={this.props.datas.text[3].zone_5}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[3].zone_6}></Edito>
                    <Element name="AP-CHAP03-PLUMES.png" index="m1"></Element>
                </div>
                <div className="Board__slide">
                    <Element name="AP-CHAP03-CAGE.png" index="m2"></Element>
                    <Skew position="left" bg="OURS.png"></Skew>
                </div>
                <div className="Board__slide">
                    <Masthead />
                </div>
            </div>
        )
    }
}
