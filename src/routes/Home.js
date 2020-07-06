import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';

import './home.css';

class Home extends Component {
    render() {
        return (
            <RSSPage className="home">
                <Banner 
                    text="this is rss" 
                    subtext="regents scholar society at ucla" 
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />

                <div className="about-panel">
                    <div className="about-text">
                        <div className="about-heading">about us</div>
                        <div className="about-description">
                            <p>
                                The Regents Scholar Society is composed of students with 
                                different identities, interests, and passions. Whether 
                                north campus or south campus, pre-med or business, scientists 
                                or artists, the society transcends these divisions through 
                                our shared commitment to scholarship, leadership, and service.
                            </p>
                            <p>
                                We strive to support our members and the local community
                                through our various internal and external programs, including
                                service events, leadership opportunities, and the Los Angeles
                                Mentorship Program.
                            </p>
                        </div>
                    </div>
                    <div className="about-img-wrapper" />
                </div>
            </RSSPage>
        )
    }
}

export default Home;