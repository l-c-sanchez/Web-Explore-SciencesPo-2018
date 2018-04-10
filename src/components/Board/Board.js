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
                
                
                {/* CHAP 0  */}
                {/* INTRODUCTION */}
           
                
                <div className="Board__slide white_blue js-board-doubleslide">
                    <Edito content={this.props.datas.text[0].zone_1} positionBottom="50%"></Edito>  
                </div>
                <div className="Board__slide white_blue Board__slide--bottom">
                      <Element name="AP-CHAP00-CITATION1.png" positionLeft="-10%"></Element>
                    <Element name="CHAP00-CITATION1.png" index="p1" positionLeft="-20%"></Element>    
                </div>                
                <div className="Board__slide white_blue">
                    <Edito content={this.props.datas.text[0].zone_2} positionBottom="50%"></Edito>  
                </div>

                <div className="Board__slide white_blue">
                    <Element name="CHAP00-CITATION2.png" index="p1" positionLeft="-5%"></Element>
                </div>
            
             
    

                {/* CHAP 1 */}
                {/* Le jour où */}
                <div className="Board__slide white_blue">
                    <Skew position="left" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide">
        

                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="50%"></Edito>
                </div>

                <div className="Board__slide Board__slide--bottom">
                     <Element name="CHAP01-CITATION1.png" index="p1" positionLeft="0%"></Element>   
                </div>
                
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_2} positionBottom="52%"></Edito>
                </div>
               
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_3} positionTop="35%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="27%"></Edito>
                     <Element name="CHAP01-CITATION2.png" index="p1" positionLeft="0%"></Element>   
                </div>
                

                {/* <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="37%"></Edito>
                </div> */}
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[1].zone_6} positionBottom="50%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom">
                      <Element name="AP-CHAP01-CITATION3.png" index="m1" positionLeft="0%"></Element>
                    <Element name="CHAP01-CITATION3.png" index="p1" positionLeft="-20%"></Element>
                   
                </div>
                <div className="Board__slide">
        

                </div>
 







                {/* CHAP 2 */}
                {/* Flashback  */}

                <div className="Board__slide red">
                    <Skew position="left" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide red"></div>
                <div className="Board__slide red">
                    <Edito content={this.props.datas.text[2].zone_1} positionTop="29%"></Edito>
                </div>
                {/* <div className="Board__slide">
                    <Video id="k27mDGIZTvRdUxn1XBM" ratio="1.37"></Video>
                    <Element name="CHAP02-ZIG.png" index="m1" positionLeft="-25%"></Element>
                </div> */}
                <div className="Board__slide red">
                   
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="40%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red">
                      <Element name="AP-CHAP02-CITATION1.png" index="m1" positionLeft="0%"></Element>
                    <Element name="CHAP02-CITATION1.png" index="p1" positionLeft="-20%"></Element>
                   
                </div>
 
                <div className="Board__slide Board__slide--bottom red">
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="50%"></Edito>
                
               
                </div>
                <div className="Board__slide Board__slide--middle red">
             
                    <Edito content={this.props.datas.text[2].zone_4}></Edito>
                </div>
                <div className="Board__slide red">
                    <Video id="k1DnGSfRTDorXdn1XDn" ratio="1.37"></Video>
                </div>
                <div className="Board__slide Board__slide--middle red">
                    <Element name="CHAP02-CITATION2.png" index="m1"></Element>
                    <Edito content={this.props.datas.text[2].zone_5}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle red">
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="0%"></Edito>
                    <Element name="CHAP02-CITATION3.png" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide red">
                    <Edito content={this.props.datas.text[2].zone_7}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide red">
                    <Edito content={this.props.datas.text[2].zone_8}></Edito>
                </div>






                {/* CHAP 3 */}
                {/* La chasse aux tricheuses */}
                <div className="Board__slide">
                    <Skew position="left" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide"></div>
  
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_1}></Edito>
                </div>
           
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_2}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle">
                    <Edito content={this.props.datas.text[3].zone_3}></Edito>
                </div>
                <div className="Board__slide">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="48%"></Edito>
                    
                </div>
                <div className="Board__slide Board__slide--middle">
              
                    <Edito content={this.props.datas.text[3].zone_5}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[3].zone_6}></Edito>
        
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[3].zone_7}></Edito>
            
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide">
                <Edito content={this.props.datas.text[3].zone_8}></Edito>

                 </div>

                {/* Conclusion  */}
                <div className="Board__slide">
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide blue"></div>
                <div className="Board__slide Board__slide--bottom blue">
                      <Element name="AP-CHAP04-CITATION1.png" index="m1" positionLeft="0%"></Element>
                    <Element name="CHAP04-CITATION1.png" index="p1" positionLeft="-20%"></Element>    
                </div>     
        
                <div className="Board__slide Board__slide--middle blue">
                    <Edito content={this.props.datas.text[4].zone_1}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle blue">
                    <Edito content={this.props.datas.text[4].zone_2}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle blue">
                    <Edito content={this.props.datas.text[4].zone_3}></Edito>
                </div>
                <div className="Board__slide blue">
                    <Edito content={this.props.datas.text[4].zone_4} positionTop="48%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle blue">
                    <Edito content={this.props.datas.text[4].zone_5}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle blue">
                    <Element name="CHAP04-CITATION3.png" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--middle js-board-doubleslide blue">
                    <Edito content={this.props.datas.text[4].zone_6}></Edito>
                </div>
                <div className="Board__slide blue">
                <Skew position="left" bg="OURS.png"></Skew>
                </div>
                <div className="Board__slide">
                    <Masthead />
                </div>
            </div>
        )
    }
}
