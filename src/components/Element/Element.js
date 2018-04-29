import React, { Component } from 'react';
import './Element.css';

export default class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            left: 0
        };
    }

    componentDidMount() {
        if (this.props.index) {
            this.setState({index: this.props.index});
        }
        if (this.props.positionLeft) {
            this.setState({left: this.props.positionLeft});
		}

		if (this.props.changeMargin === true) {
			var _this = this;
			window.addEventListener('load', function() {
				var element = document.getElementById(_this.props.name);
				console.log (element);
				var slide = document.querySelector('.Board__slide');
				console.log(slide);

				element.style.marginLeft = ((slide.style.width / slide.style.height
					- element.style.width / element.style.height) * 100) + "%";
			});
			window.addEventListener('resize', function() {
				var element = document.getElementById(_this.props.name);
				var slide = document.querySelector('.Board__slide');

				element.style.marginLeft = ((slide.offsetWidth / slide.offsetHeight
					- element.offsetWidth / element.offsetHeight) * 100) + "%";
			});
		}
    }

    render() {

        return (
            <div id={this.props.name} className={"Element Element--z" + this.state.index + " js-element-z" + this.state.index}
                 style={{marginLeft: this.state.left}}>
                <img src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.name)} alt="" className="js-lazy" />
            </div>
        );
    }
}
