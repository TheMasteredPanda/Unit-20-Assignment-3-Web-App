import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

/** React component used to structure the home page. */
class HomePage extends Component {
    state = {  }

    render() { 
        return (<div className="page" id="homePage">
            <div id="twitterWrapper">
                <h3 id="title">Tweets by 3Harder</h3>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'twitterdev'
                    }}
                    options={{
                        username: 'TwitterDev',
                        height: '700',
                        width: '800'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>
            <div id="newsfeedTimeline">
                    test
            </div>
            <div id="leftParagraph">
            <h4 classList="title">Left Paragraph</h4>
                <p className="paragraph">
                    test test test test test
                    test test test test test
                    test test test test test
                    test test test test test
                    test test test test test
                </p>
            </div>
            <p className="paragraph" id="rightParagraph">
            <h4 classList="title">Right Paragraph</h4>
                <p className="paragraph">
                    test test test test test
                    test test test test test
                    test test test test test
                    test test test test test
                    test test test test test
                </p>
            </p>
        </div>);
    }
}
 
export default HomePage;