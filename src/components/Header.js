import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Anime Clicky Game</h1>
                <p>Click on characters to earn points. Do not click on any more than once!</p>
            </div>
        )
    }
}

export default Header;