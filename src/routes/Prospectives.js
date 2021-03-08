import React, { Component } from 'react';

import RSSPage from '../util/RSSPage';
import Banner from '../util/Banner';
import {TextPanel} from '../util/TextPanel';
import {BenefitDescription, BenefitWrapper} from '../util/BenefitDescription';

import './prospectives.css';

class Prospectives extends Component {
    render() {
        return (
            <RSSPage className="prospectives">
                <Banner 
                    text="prospectives" 
                    bgr="/images/banners/2017_Conference.jpg"
                    darkness="0"
                    valign="65%"
                />
                { /* Brandon */ }
                <TextPanel heading="we are rss" id="we-are-rss-panel">
                    <div className='row'>
                        <div className='benefits'>
                            The Regents Scholar Society at UCLA, or RSS, offers membership to everyone who has received the
                            Regents Scholarship.
                            The scholarship is offered to those at the top of each incoming class, but 
                            we're more than just smart -- we're kind, ambitious, passionate, funny, driven, and 
                            maybe a little eccentric. Most importantly, we're a diverse group who are here to 
                            welcome you to UCLA with open arms and open hearts.
                            <br /><br />
                            The Regents Scholarship is awarded to up to 100 incoming freshmen 
                            and transfer students. Alongside membership in the Regents Scholar Society, 
                            all Regents Scholars receive:
                            <BenefitWrapper>
                                <BenefitDescription
                                    heading="$2000"
                                    subheading="honorarium"
                                    desc="A $2,000 honorarium, awarded quarterly for four years (or two years for transfers).
                                        Additionally, university scholarships or grants to cover the student's financial need."
                                    bgr="openbook.png"
                                    scale="90%"
                                />
                                <BenefitDescription
                                    heading="13"
                                    subheading="units"
                                    desc="Priority enrollment in 13 class units, starting in their second quarter."
                                    bgr="pencil.png"
                                    scale="90%"
                                />
                                <BenefitDescription
                                    heading="4"
                                    subheading="years"
                                    desc="Four years of university housing upon submission of the Housing application. 
                                        Additionally, a parking pass upon submission of the Parking application."
                                    bgr="house.png"
                                    scale="90%"
                                />
                            </BenefitWrapper>
                        </div>
                        <div className='letter_wrapper'>
                            <span style={{fontSize: "calc(20px + 1.1vw)", fontFamily: "Kollektif"}}>a letter from our external vice president</span>
                            <br /><br />
                            Dear prospective RSSer,
                            <br /><br />
                            Congratulations on your acceptance to UCLA as a Regents Scholar, and welcome to UCLA RSS and OSP!
                            We are extremely excited to have you in our OSP, and can't wait to meet you virtually.
                            In these three days, you'll learn what college, UCLA, and RSS are all about — on top of meeting 
                            some lifelong friends and even potentially future roommates! If you have any questions about college, 
                            and I mean any — this is the place to have them answered. We look forward to meeting you soon!
                            <br /> <br />
                            - &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize: "calc(50px + 1.1vw)", fontFamily: "Adine"}}>Rebecca Zhu</span>
                            <br />
                            External Vice President
                        </div>
                    </div>
                </TextPanel>
                { /* Daniel */ }
                <TextPanel heading="welcome to our overnight stay program!">
                    asdf
                </TextPanel>


                { /* Rishi */ }
                <TextPanel heading="osp 1" id="osp_panel">
                    <div className="osp_description">
                        month 00 - month 00
                    </div>
                    <div className="itinerary_wrapper">
                        itinerary
                    </div>
                </TextPanel>

                { /* Ray */ }
                <TextPanel heading="meet your coordinators!">
                asdf
                </TextPanel>

                { /* will copy/paste osp 1 stuff for osp 2 after we finish */ }

                { /* Christian */ }
                <TextPanel heading="contact us!">
                    asdf
                </TextPanel>
                
            </RSSPage>
        )
    }
}

export default Prospectives;