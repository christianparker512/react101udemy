//hello world
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Christian';


function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Christian',
    lastName: 'Parker'
}
const element = <h1>Hello {formatName(user)} from {name}</h1>
ReactDOM.render(element,document.querySelector('#root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

