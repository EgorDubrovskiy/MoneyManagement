import React, { Component } from 'react';
import NewsList from "./NewsList";

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <NewsList/>
            </div>
        );
    }
}

export default MainContent;
