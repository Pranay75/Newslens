import React from "react";
import './body.css'
export default function Body()
{
    return(
        <div className="container-fluid banner d-flex justify-content-center align-items-center text-light">
            <div className="text-center">
                <h1 className="animated-text">Welcome to <span>Newslens</span></h1>
                <p className="lead animated-fade">Your AI-powered news aggregator</p>
                <button className="btn btn-warning btn-lg mt-3">Explore Now</button>
            </div>
        </div>
    );
}