import React from 'react';
import { NavLink } from 'react-router-dom';
import RightArrow from '../../assets/shared/desktop/white-arrow.svg';

import '../../css/betaFooter.css';

class BetaFooter extends React.Component {
    render () {
        return (
            <div className='outside-beta-footer-container'>
                <div className='beta-footer-gradient-div' />

                <div className='inside-beta-footer-container'>
                    <h1>We're in Beta. Get your invite today!</h1>
    
                    <NavLink to='/'>
                        Get an invite
                        <img src={RightArrow} alt='Right Arrow' />
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default BetaFooter;