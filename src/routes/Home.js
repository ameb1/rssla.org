import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel} from '../util/TextPanel';

import './home.css';

class Home extends Component {
    render() {
        return (
            <RSSPage className="home">
                <Banner 
                    text="this is rss" 
                    subtext="regents scholar society at ucla" 
                    video="true"
                    bgr="/images/banners/2018_Banquet.JPG"
                    darkness="0.1"
                    valign="70%"
                />

                <ImageTextPanel 
                    heading="about us"
                    image="/images/gallery/2019_bonfire.jpg"
                    align="left"
                >
                    The Regents Scholar Society is composed of students with 
                    different identities, interests, and passions. Whether 
                    north campus or south campus, pre-med or business, scientists 
                    or artists, the society transcends these divisions through 
                    our shared commitment to scholarship, leadership, and service.
                    <p/>
                    We strive to support our members and the local community
                    through our various internal and external programs, including
                    service events, leadership opportunities, and the Los Angeles
                    Mentorship Program. We frequently host academic and social
                    events for our members to make friends, bond with our community, 
                    and thrive.
                    <p/>
                    Each Regents Scholar is awarded amazing perks: a $2000 scholarship,
                    priority course enrollment for up to 13 units, four years of
                    housing, mentorship from peers, faculty, and alumni, professional
                    events, access to our test bank, and much more! 
                </ImageTextPanel>
            </RSSPage>
        )
    }
}

export default Home;