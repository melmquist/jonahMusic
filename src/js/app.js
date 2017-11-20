import React, { Component } from 'react';
import { render } from 'react-dom';
// import '../css/style.css';
import '../styles/main.scss'

import Fretboard from './components/Fretboard';
import Strings from './components/Strings';

export default class App extends Component {
    render() {
        return (
            <div className="app-bg-div">

                <Fretboard />
                {/* <div className="string-container red-border">
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
                <div className="string-container red-border"></div> */}
                
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));


/*

<div className=""></div>

*/ 