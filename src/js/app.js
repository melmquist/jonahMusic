import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import '../css/test.scss'
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <div className="string-container red-border">
                    <div className="fret-container blue-border">
                        <div className="fret-inner-div">
                            <div className="fret-circle"></div>
                        </div>
                    </div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                    <div className="fret-container blue-border"></div>
                </div>
                
                <div className="string-container red-border"></div>
                <div className="string-container red-border"></div>
                <div className="string-container red-border"></div>
                <div className="string-container red-border"></div>
                <div className="string-container red-border"></div>
                
            </div>
        )
    }
}

render(<Hello />, document.getElementById('app'));


/*

<div className=""></div>

*/ 