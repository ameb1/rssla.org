import React, { Component } from 'react';

import Header from './Header';
import './global.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                Footer
            </div>
        )
    }
}

const RSSPage = ({children}) => (
    <React.Fragment>
        <Header />
            <div id="content-wrapper">
                {children}
            </div>
        <Footer />
    </React.Fragment>
  );

export default RSSPage;