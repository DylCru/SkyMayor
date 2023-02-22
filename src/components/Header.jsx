import React from "react";

export default function Header() {
    return (
        <header>
            <h1>SkyMayor</h1>
            <div className="head-items">
                <a className="head-item" href="#">Current Mayor</a>
                <a className="head-item" href="#">Current Election</a>
                <a className="head-item" href="#">Profile Viewer</a>
            </div>
        </header>
    )
}