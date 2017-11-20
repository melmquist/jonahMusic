import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../styles/main.scss'

export default class Fretboard extends Component {
    render() {
        return (
            <div className="fb-bg-div">

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

/*

<div className=""></div>

*/ 