import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ReactDOM = require('react-dom');

var DATA = {    
    name: 'Patrik Rose',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'boxing', 'hiking', 'tennis']
}

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Profile 
                    name={this.props.profileData.name}
                    imgURL={this.props.profileData.imgURL}
                />
                <Hobbies 
                    hobbyList={this.props.profileData.hobbyList}
                /> 
            </div>
        );
    }
});

var Profile = React.createClass({
    render:function(){
        return (
            <div>
            <h3>{this.props.name}</h3>
            <img src={this.props.imgURL} />
            </div>
        );
    }
});

var Hobbies = React.createClass({
    render:function(){
        var hobbies = this.props.hobbyList.map(function(hobby,index){
            return (<li key={index}>{hobby}</li>);
        });

        return (
            <div>
            <h3>My hobbies:</h3>
            <ul>
                {hobbies}
            </ul>
            </div>
        );
    }
});

ReactDOM.render(<App profileData={DATA} />, document.getElementById('content'));