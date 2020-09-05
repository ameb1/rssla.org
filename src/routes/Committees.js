import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel, TextPanel} from '../util/TextPanel';

import './committees.css';


/*
                        In the past, the A.C.E. committee has put on events like:
                        <ul>
                            <li>All-Family Holiday Extravaganza</li>
                            <li>Beach cleanups</li>
                            <li>Hiking trips</li>
                            <li>Broomball and ice skating</li>
                        </ul>
*/

class Committees extends Component {
    render() {
        return (
            <RSSPage className="committees">
                <Banner 
                    text="committees" 
                    bgr="/images/images/2019_family_xmas.jpg"
                    darkness="0.1"
                    valign="65%"
                />

                <ImageTextPanel 
                    heading="what are committees?"
                    image="/images/gallery/2019_game_night.JPG"
                    align="left"
                    id="committees-text-panel"
                >
                    Committees are a way for members of the Regents Scholar Society to become more involved with
                    the RSS community and take on a leadership role within the society. Our committees shape the
                    direction of our society: committee members help organize events and activities, raise funds,
                    work on design and tech projects for the society, and much more!
                    <p/>
                    Each committee is led by
                    one or more board members and will have virtual social activities to help members get to know 
                    one another and engage with RSS.
                </ImageTextPanel>

                <TextPanel 
                    heading="join a committee!"
                    id="join-committee-panel"
                >
                    2020-2021 Committee Applications will open a few weeks after fall quarter starts. There are
                    five committees you can join this year:
                    <div className="committees-list-wrapper">
                        <CommitteeEntry
                            name="A.C.E. Committee"
                            leaders="Andrew, Anusha, Zack, and Tina"
                        >
                            The A.C.E. Committee manages activities, community service, and educational programs. 
                            The committee helps plan fun and afforable social activities, arranges community 
                            service opportunities, and fosters engagement and bonding between members of the society. 
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Funding Committee"
                            leaders="Aditya and Jason"
                        >
                            The Funding Committee is in charge of fundraising, including brainstorming innovative ideas
                            and organizing the logistics fof the fundraiser. The Funding Committee also serves as 
                            liaisons between RSS and corporate sponsors.
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Special Events Committee"
                            leaders="Rebecca and Carolyn"
                        >
                            The Special Events Commitee plans the Society's large-scale events, such as S.P.I.E.L. 
                            and winter retreat. In addition, the committee advocates for the needs of all members, 
                            from first to fourth years, transfers, and non-traditional students.
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Tech Committee"
                            leaders="Rishi"
                        >
                            The Tech Committee works on tech-related projects with a focus on improving the society.
                            Committee members help maintain and add new features/pages to the RSS website,
                            or collaborate on other projects based on interest.
                        </CommitteeEntry>
                        <CommitteeEntry
                            name="Design Committee"
                            leaders="Jenny"
                        >
                            The Design Committee creates digital flyers and design RSS merch, as well as work on designs
                            for RSS projects. The committee also helps manage our social media accounts and promote our
                            activities and events to the community.
                        </CommitteeEntry>
                    </div>
                </TextPanel>

            </RSSPage>
        )
    }
}

class CommitteeEntry extends Component {
    render() {
        return (
            <div className="committee-entry-wrapper">
                <div className="committee-name">{this.props.name}</div>
                <div className="committee-leaders">Led by {this.props.leaders}</div>
                <div className="committee-description">{this.props.children}</div>
            </div>
        )
    }
}

export default Committees;