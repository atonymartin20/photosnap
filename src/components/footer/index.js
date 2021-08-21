import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/white-logo.svg';
import RightArrow from '../../assets/shared/desktop/white-arrow.svg';

import '../../css/footer.css';

class Footer extends React.Component {
    render () {
        return (
            <div className='outside-footer-container'>
                <div className='desktop-footer-container'>
                    <div className='desktop-footer-container-left'>
                        <img src={Logo} alt='Photosnap' className='footer-logo' />

                        <div className='social-media-container'>
                            <div className='footer-icon footer-facebook-icon' />
                            <div className='footer-icon footer-youtube-icon' />
                            <div className='footer-icon footer-twitter-icon' />
                            <div className='footer-icon footer-pinterest-icon' />
                            <div className='footer-icon footer-instagram-icon' />
                        </div>
                    </div>

                    <nav>
                        <NavLink to='/'>
                            Home
                        </NavLink>

                        <NavLink to='/stories'>
                            Stories
                        </NavLink>

                        <NavLink to='/features'>
                            Features
                        </NavLink>

                        <NavLink to='/pricing'>
                            Pricing
                        </NavLink>
                    </nav>

                    <div className='desktop-footer-container-right'>
                        <div>
                            <NavLink to='/' className='footer-invite-nav-link'>
                                Get an invite
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>

                            <span>Copyright 2019. All Rights Reserved</span>
                        </div>
                    </div>
                </div>

                <div className='tablet-footer-container'>
                    <div className='tablet-footer-container-top'>
                        <img src={Logo} alt='Photosnap' className='footer-logo' />

                        <NavLink to='/' className='footer-invite-nav-link'>
                            Get an invite
                            <img src={RightArrow} alt='Right Arrow' />
                        </NavLink>
                    </div>

                    <nav>
                        <NavLink to='/'>
                            Home
                        </NavLink>

                        <NavLink to='/stories'>
                            Stories
                        </NavLink>

                        <NavLink to='/features'>
                            Features
                        </NavLink>

                        <NavLink to='/pricing'>
                            Pricing
                        </NavLink>
                    </nav>

                    <div className='tablet-footer-container-bottom'>
                        <div className='social-media-container'>
                            <div className='footer-icon footer-facebook-icon' />
                            <div className='footer-icon footer-youtube-icon' />
                            <div className='footer-icon footer-twitter-icon' />
                            <div className='footer-icon footer-pinterest-icon' />
                            <div className='footer-icon footer-instagram-icon' />
                        </div>
                        <span className='footer-copyright-text'>Copyright 2019. All Rights Reserved</span>
                    </div>
                </div>

                <div className='mobile-footer-container'>
                    <img src={Logo} alt='Photosnap' className='footer-logo' />

                    <div className='social-media-container'>
                        <div className='footer-icon footer-facebook-icon' />
                        <div className='footer-icon footer-youtube-icon' />
                        <div className='footer-icon footer-twitter-icon' />
                        <div className='footer-icon footer-pinterest-icon' />
                        <div className='footer-icon footer-instagram-icon' />
                    </div>

                    <nav>
                        <NavLink to='/'>
                            Home
                        </NavLink>

                        <NavLink to='/stories'>
                            Stories
                        </NavLink>

                        <NavLink to='/features'>
                            Features
                        </NavLink>

                        <NavLink to='/pricing'>
                            Pricing
                        </NavLink>
                    </nav>

                    <NavLink to='/' className='footer-invite-nav-link'>
                        Get an invite
                        <img src={RightArrow} alt='Right Arrow' />
                    </NavLink>

                    <span className='footer-copyright-text'>Copyright 2019. All Rights Reserved</span>
                </div>
            </div>
        )
    }
}

export default Footer;