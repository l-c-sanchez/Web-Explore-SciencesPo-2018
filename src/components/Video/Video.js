import config from '../../config';
import React, { Component } from 'react';
import './Video.css';

require('../../js/external/dailymotion.js')();

var playersRef = [];
var playersObj = {};

/* eslint-disable */
window.dmAsyncInit = function() {
    if (!playersRef.length) {
        setTimeout(function () {
            window.dmAsyncInit();
        }, 500);
    } else {
        for (var i = 0; i < playersRef.length; i++) {
            playersObj[playersRef[i].props.id] = DM.player('player_' + playersRef[i].props.id, {
                video: playersRef[i].props.id,
                width: playersRef[i].state.width + 'px',
                height: playersRef[i].state.height + 'px',
                params: {
                    wmode:"transparent",
                    autoplay: 0,
                    chromeless : 0,
                    related : 0,
                    foreground: '#f8f8f8',
                    logo: 0,
                    info : 0
                }
            });
        }
    }
};
/* eslint-enable */

export default class Edito extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: '50%',
            bottom: 'initial',
            width: Math.min(document.documentElement.clientWidth, config.ratio.width),
            height: Math.min(document.documentElement.clientHeight, config.ratio.height)
        };
    }

    componentDidMount() {
        if (this.props.positionTop) {
            this.setState({top: this.props.positionTop});
        }
        if (this.props.positionBottom) {
            this.setState({bottom: this.props.positionBottom});
        }
        if (this.props.ratio) {
            this.setState({height: this.state.width / this.props.ratio});
        }

        playersRef.push(this);
    }

    togglePlay = function (id, e) {
        playersObj[id].togglePlay();
        e.stopPropagation();
    }

    render() {

        return (
            <div className="Video" style={{top: this.state.top, bottom: this.state.bottom}} onClick={this.togglePlay.bind(this, this.props.id)}>
                <div className="Video__embed" id={"player_" + this.props.id}></div>
                {/* use API instead}<iframe src={"//www.dailymotion.com/embed/video/" + this.props.id} width={this.state.width} height={this.state.height} frameBorder="0" allowFullScreen></iframe>{*/}
            </div>
        );
    }
}
