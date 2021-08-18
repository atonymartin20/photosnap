import React from 'react';
import { NavLink } from 'react-router-dom';
import RightArrow from '../../assets/shared/desktop/arrow.svg';

class BetaFooter extends React.Component {
    render () {
        return (
            <div>
                <h1>We're in Beta. Get your invite today!</h1>
  
                <NavLink to='/'>
                    Get an invite
                    <img src={RightArrow} alt='Right Arrow' />
                </NavLink>
            </div>
        )
    }
}

export default BetaFooter;