//hello world
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Christian';

const bigURL = 'https://rawpixel-live.imgix.net/collection/cover/360c882d84f757d213bc925d2fdd60d0_cover.jpg?bg=F4F4F3&con=3&cs=srgb&dpr=1&fit=clip&h=1200&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=1200&s=9de45879c5d9cfa9c27f8d913909081a'
const artist = 'Vincent Van Gogh'

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const element = <div>
    <img src = {bigURL} width="400px" alt = "Room" />
    <p>{artist}</p>
    </div>

ReactDOM.render(element, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

