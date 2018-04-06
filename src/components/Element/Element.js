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
    }

    render() {

        return (
            <div className={"Element Element--z" + this.state.index + " js-element-z" + this.state.index}
                 style={{marginLeft: this.state.left}}>
                <img src={process.env.PUBLIC_URL + "/img/px.png"} data-src={require("./img/" + this.props.name)} alt="" className="js-lazy" />
            </div>
        );
    }
}
