import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {ImageTextPanel} from '../util/TextPanel';

import './programs.css';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longestPanelHeight: 0
        }
        this.updatePanelHeight = this.updatePanelHeight.bind(this);
    }

    componentDidMount() {
        this.updatePanelHeight();
        window.addEventListener('resize', this.updatePanelHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePanelHeight);
    }

    updatePanelHeight() {
        if (window.innerWidth > 840) {
            this.setState({ 
                longestPanelHeight: window.getComputedStyle(document.getElementById("programs-spiel-panel")).height });
        } else {
            this.setState({longestPanelHeight: null});
        }
    }

    render() {
        return (
            <RSSPage className="programs">
                <Banner 
                    text="programs"
                    bgr="/images/2019_Conference.jpg"
                    darkness="0.1"
                    valign="65%"
                />

                <ImageTextPanel 
                    heading="l.a.m.p."
                    image="/images/2020_broomball2.jpg"
                    align="left"
                    height={this.state.longestPanelHeight}
                >       
                    The Los Angeles Mentorship Program (LAMP) provides UCLA
                    students the opportunity to give back to the local community
                    through tutoring at University High School. This program aims
                    to provide resources to underserved youth - giving them
                    access to SAT and ACT preparation along with workshops regarding
                    financial literacy, college applications, and more.
                </ImageTextPanel>
                <ImageTextPanel 
                    heading="s.p.i.e.l."
                    image="/images/2020_broomball2.jpg"
                    align="right"
                    id="programs-spiel-panel"
                >
                    SPIEL stands for Students Presenting, Innovating, Entertaining 
                    and Learning. Inspired by TED Talks, this campus-wide speaker 
                    event is put on by students, for students. The aim of SPIEL is to 
                    give students from all backgrounds the chance to talk about something 
                    that is not only important to the presenters themselves, but is also 
                    often important to the greater UCLA and global community.
                    <p/>
                    In the past, SPIEL presenters have addressed a variety of topics, 
                    ranging from mental health to ground-breaking student research.

                </ImageTextPanel>
                <ImageTextPanel 
                    heading="service"
                    image="/images/2020_broomball2.jpg"
                    align="left"
                    height={this.state.longestPanelHeight}
                >
                    Through partnerships with Heal the Bay and Meals on Wheels, the 
                    Regents Scholar Society hosts periodic service events throughout the 
                    year. Stay tuned on our Facebook group to get involved!
                </ImageTextPanel>
                <ImageTextPanel 
                    heading="mentorship"
                    image="/images/2020_broomball2.jpg"
                    align="right"
                    height={this.state.longestPanelHeight}
                >
                    Our peer mentors are upperclassmen who have recently been in the shoes of
                    our new RSSers and want to give back by helping them learn the ropes of UCLA!
                    Our alumni mentors are graduated RSSers who have broken through their industries
                    and can provide professional advice to aspiring professionals.
                    Finally, our faculty mentorship program pairs RSSers and faculty members to 
                    cultivate relationships and help members learn more about their passions and 
                    fields of study.
                </ImageTextPanel>
            </RSSPage>
        )
    }
}

export default Programs;