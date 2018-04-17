import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';
import './test.css';

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
 
                {/* <div className="Board__slide white_blue Board__slide--top js-board-doubleslide">
                    <Element className="gif_ski" name="CHAP00-GIFDESCENTE.gif" positionLeft="25%"></Element> 
                </div>

            
                <div className="Board__slide white_blue Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[0].zone_1} positionBottom="50%"></Edito>  
                </div>

                 <div className="Board__slide white_blue js-board-doubleslide">
                 <Element name="CHAP00-PHOTO1B.png" index="m1" positionLeft="10%"></Element> 
                    <Element name="CHAP00-PHOTO1.png" index="p1" positionLeft="-10%"></Element>
                </div> 

                <div className="Board__slide white_blue Board__slide--middle js-board-doubleslide">
                    <Edito content={this.props.datas.text[0].zone_2} positionBottom="30%"></Edito>    
                </div>

                <div className="Board__slide white_blue Board__slide--middle">
                    <Element name="AP-CHAP00-CITATION1.png" index="p1" positionLeft="15%"></Element>
                    <Element name="CHAP00-CITATION1.png" index="p2" positionLeft="0%"></Element>    
                </div> 

                <div className="Board__slide white_blue Board__slide--top js-board-doubleslide">
                    <Edito content={this.props.datas.text[0].zone_3} positionTop="20%"></Edito> 
                    <Element name="CHAP00-CITATION2.png" index="p1" positionLeft="90%"></Element>   
                </div>
                <div className="Board__slide white_blue Board__slide--top js-board-doubleslide"> 
                      
                </div>   */}


         

                {/* CHAP 1 */}
                {/* Le jour où */}

                 {/* <div className="Board__slide white_blue">
                    <Skew position="left" name="CHAP01-TITRE.png" bg="CHAP01-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide white_blue"></div>

                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[1].zone_1}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[1].zone_2}></Edito>
                </div>

                <div className="Board__slide Board__slide--bottom white_blue js-board-doubleslide">
                     <Element name="AP-CHAP01-CITATIONANAISv2(taille).png"></Element> 
                </div>
              
                
                <div className="Board__slide Board__slide--middle white_blue">
                    <Element name="CHAP01-CITATIONANAIS.png" positionLeft="-55%" index="p1"></Element> 
                </div>

                <div className="Board__slide Board__slide--middle white_blue ">
                    <Edito content={this.props.datas.text[1].zone_3}></Edito>
                </div> 

                <div className="Board__slide Board__slide--middle white_blue">
                    <Element name="CHAP01-INFOGRAPHIE-TESTS.png"></Element> 
                </div>
               
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[1].zone_4}></Edito>
                </div>
                <div className="Board__slide white_blue">
                    <Video id="k7hbaqsPXNZv6HqxEZY" ratio="1.5"></Video>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[1].zone_5} positionTop="17%"></Edito>
                    <Element name="CHAP01-CITATION2.png" index="m1" positionLeft="30%"></Element> 
                </div> 
        
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="17%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_7} positionBottom="50%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle white_blue"> 
                    <Edito content={this.props.datas.text[1].zone_8} positionBottom="50%"></Edito>
                </div>
                <div className="Board__slide white_blue js-board-doubleslide">
                 <Element name="CHAP01-PHOTO1A.png" index="p1" positionLeft="0%"></Element> 
                    <Element name="CHAP01-PHOTO1B.png" index="p2" positionLeft="60%"></Element>
                </div> 
                <div className="Board__slide Board__slide--bottom white_blue"> 
                    <Element name="AP-CHAP01-CITATION3.png" index="p1" positionLeft="35%"></Element>
                    <Element name="CHAP01-CITATION3.png" index="p2" positionLeft="50%"></Element>
                </div> 
                <div className="Board__slide white_blue Board__slide--top js-board-doubleslide"> </div>  */}
    

                {/* CHAP 2 */}
                {/* Flashback  */}

                {/* <div className="Board__slide white_blue">
                    <Skew position="left" name="CHAP02-TITRE.png" bg="CHAP02-OUVERTURE.png"></Skew>
                </div>

                <div className="Board__slide Board__slide--middle red white">
                </div>

                <div className="Board__slide Board__slide--middle red">
                    <Edito color="white" content={this.props.datas.text[2].zone_1} positionTop="29%"></Edito>
                </div>

                <div className="Board__slide Board__slide--middle red">
                    <Element name="CHAP02-PHOTO1.png" index="p1"></Element>
                </div>
            
                <div className="Board__slide Board__slide--middle red">
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="40%"></Edito>
                </div>
                
                <div className="Board__slide Board__slide--bottom red">
                    <Element name="CHAP02-PHOTO2v2.png" index="p1" positionLeft="-10%"></Element>
                </div>

                <div className="Board__slide Board__slide--bottom red">
                    <Element name="AP-CHAP02-CITATION1.png" index="p1" positionLeft="5%"></Element>
                    <Element name="CHAP02-CITATION1.png" index="p2" positionLeft="-30%"></Element>
                </div>
 
                <div className="Board__slide Board__slide--middle red">
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="50%"></Edito>
                </div>

                <div className="Board__slide Board__slide--middle red">
                    <Edito content={this.props.datas.text[2].zone_4}></Edito>
                </div> */}

                {/* VIDEO erik j ai attenduque mes seins poussent */}
                
                {/* <div className="Board__slide red">
                    <Edito content={this.props.datas.text[2].zone_5}  positionBottom="10%"></Edito>
                </div>

                <div className="Board__slide Board__slide--bottom red">
                    <Element name="CHAP02-INFOGRAPHIE1-PALMARES.png"></Element>
                </div>

                 <div className="Board__slide red">
                     <Edito content={this.props.datas.text[2].zone_7} positionTop="10%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--middle js-board-doubleslide red">
                     <Edito content={this.props.datas.text[2].zone_8}></Edito>
                </div> 

                <div className="Board__slide Board__slide--bottom red">
                    <Element name="CHAP02-INFOGRAPHIE2-EXCLUSION.png"></Element>
                </div>


                <div className="Board__slide Board__slide--middle js-board-doubleslide red">
                    <Edito content={this.props.datas.text[2].zone_8}></Edito>
                </div>  */}






                {/* CHAP 3 */}
                {/* La chasse aux tricheuses */}
                <div className="Board__slide red">
                    <Skew position="left" name="CHAP03-TITRE.png" bg="CHAP03-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide white_blue"></div>
  
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[3].zone_1}></Edito>
                </div>
           
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[3].zone_2}></Edito>
                </div> 
    
                <div className="Board__slide white_blue">
                    <StaticElement bg="AP-CHAP03-PHOTOv2.png" name="CHAP03-PHOTOv2.png" size="simple"></StaticElement>
                </div>
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[3].zone_3}></Edito>
                </div>

                <div className="Board__slide Board__slide--middle white_blue">
                    <Element name="CHAP03-GIFPODIUM.gif"></Element>
                </div>

                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[3].zone_4} positionTop="48%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle white_blue">
                    <Edito content={this.props.datas.text[3].zone_5}></Edito>
                </div>
      
                <div className="Board__slide Board__slide--middle js-board-doubleslide white_blue">
                    <Edito content={this.props.datas.text[3].zone_7}></Edito>
                </div>

                 <div className="Board__slide">
                    <Video id="k6nQH9clutLjhlqxEZX" ratio="1.37"></Video>
                </div>
        
               

                {/* Conclusion  */}
                <div className="Board__slide white_blue">
                    <Skew position="left" name="CHAP04-TITRE.png" bg="CHAP04-OUVERTURE.png"></Skew>
                </div>
                <div className="Board__slide only_blue"></div>
                <div className="Board__slide Board__slide--middle only_blue">
                    <Edito content={this.props.datas.text[4].zone_1}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle only_blue">
                    <Element name="CHAP04-PHOTO1.png" index="m2" positionLeft="40%"></Element>
                    <Element name="CHAP04-PHOTO1A.png" index="p1" positionLeft="45%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue">
                </div> 
                <div className="Board__slide Board__slide--bottom only_blue">
                      <Element name="AP-CHAP04-CITATION1.png" positionLeft="-5%"></Element>
                    <Element name="CHAP04-CITATION1.png" positionLeft="-15%"></Element>    
                </div>     
        
                <div className="Board__slide Board__slide--middle only_blue">
                    <Edito content={this.props.datas.text[4].zone_2}></Edito>
                </div>
                <div className="Board__slide Board__slide--middle only_blue">
                    <Edito content={this.props.datas.text[4].zone_3}></Edito>
                </div>

                <div className="Board__slide white_blue">
                    <StaticElement bg="AP-CHAP04-CITATIONGERD.png" name="CHAP04-CITATION2.png" size="simple"></StaticElement>
                </div>
                {/* <div className="Board__slide Board__slide--bottom only_blue">
                      <Element name="CHAP04-CITATION2.png"></Element>

                </div>  */}

                <div className="Board__slide Board__slide--bottom only_blue">
                    <Element name="CHAP04-PHOTO2.png" index="p1" positionLeft="0%"></Element>
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="5%"></Edito>
                    
                </div>
            

                <div className="Board__slide Board__slide--middle only_blue">
                    <Edito content={this.props.datas.text[4].zone_5}></Edito>
                </div>
    
    
                <div className="Board__slide only_blue">
                <Skew position="left" bg="OURS.png"></Skew>
                </div>
                <div className="Board__slide only_blue">
                    <Masthead />
                </div>
            </div>
        )
    }
}


  {/* <div className="Board__slide">
                    <Video id="k5NypIHM8nAGG3qxEZX" ratio="1.37"></Video>
                
                </div> */}
                
                   {/* <div className="Board__slide">
                    <Video id="k3QBUX1kDBCstvqxEZZ" ratio="1.37"></Video>
                
                </div> */}
           