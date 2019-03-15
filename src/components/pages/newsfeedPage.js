import React, { Component } from 'react';

/**
 * Copied from: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
 */
function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

function Article(props) {
    return (<div className="article">
        <h4 className="title">Article Title</h4>
        <p className="preview">
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
            test test test test test test test test test test
        </p>
        <button className="button">Continue Reading</button>
        <div className="info">
            <div className="inline">John Doe</div>
            <div className="divider inline"></div>
            <div className="inline">{formatDate(new Date())}</div>
        </div>
    </div>)
}


class NewsfeedPage extends Component {
    state = {  }
    render() { 
        return (<div className="page" id="newsfeedPage">
            <div className="articles">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>);
    }
}

export default NewsfeedPage;