import React, { Component } from 'react';

class NewsList extends Component {
    render() {
        return (
            <div className="news-list-wrapper">
                <nav>
                    <a href="home">Home</a>
                    <a href="genre">Genre</a>
                    <a href="home">Type</a>
                    <a href="home">Year</a>
                    <a href="Rating">Rating</a>
                    <a href="Sorting">Sorting</a>
                </nav>
                <div>
                    Some anime list
                </div>
            </div>
        );
    }
}

export default NewsList;
