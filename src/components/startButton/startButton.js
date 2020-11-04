import React from 'react';
import "./startButton.css";

export default function StartButton(props) {
    if (props.text) {
        return(
            <button className="button--start">
                <p>{props.text}</p>
                <svg width="17.5" height="19" viewBox="0 0 33 40">
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
                </svg>
            </button>
        )
    } else {
        return(
            <button className="button--start">
            <p>Begin</p>
            <svg width="17.5" height="19" viewBox="0 0 33 40">
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
            </svg>
        </button>
        );
    };
};