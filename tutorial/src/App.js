import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ReactDOM = require('react-dom');

var App = React.createClass({
    getInitialState: function(){
        return {
            searchResults: []
        }
    },

    showResults: function(response){
        this.setState({
            searchResults: response.results
        })
    },

    search: function(URL){
        $.ajax({
            type: "GET",
            dataType: 'jsonp',
            url: URL,
            success: function(response){
                this.showResults(response);
            }.bind(this)
        });
    },

    render: function(){
        return (
            <div>
                <SearchBox />
                <Results />
            </div>
        );
    },

    componentDidMount(){
        this.search('https://itunes.apple.com/search?term=fun');
    }
});

var SearchBox = React.createClass({
    render: function(){
        return (
            <div>
                <input type="text" />
                <select>
                    <option value="software">Apps</option>
                    <option value="movie">Films</option>
                </select>
                <input type="submit" />
            </div>
        );
    }
});

var Results = React.createClass({
    render: function(){
        return(
            <ul>
                <ResultItem />
            </ul>           
        );
    }
});

var ResultItem = React.createClass({
    render: function(){
        return <li>a search result item</li>;
    }
});

ReactDOM.render(<App />,  document.getElementById("content"));