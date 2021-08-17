import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo.svg';
import Facebook from '../../assets/shared/desktop/facebook.svg';
import Youtube from '../../assets/shared/desktop/youtube.svg';
import Twitter from '../../assets/shared/desktop/twitter.svg'
import Pinterest from '../../assets/shared/desktop/pinterest.svg';
import Instagram from '../../assets/shared/desktop/instagram.svg';
import RightArrow from '../../assets/shared/desktop/arrow.svg';

class Footer extends React.Component {
    render () {
        return (
            <div>
                <div>
                    {/* desktop */}
                    <div>
                        <img src={Logo} alt='Photosnap' />

                        <div>
                            <img src={Facebook} alt='Facebook' />
                            <img src={Youtube} alt='Youtube' />
                            <img src={Twitter} alt='Twitter' />
                            <img src={Pinterest} alt='Pinterest' />
                            <img src={Instagram} alt='Instagram' />
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

                    <div>
                        <div>
                            <NavLink to='/'>
                                Get an invite
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>

                            <span>Copyright 2019. All Rights Reserved</span>
                        </div>
                    </div>
                </div>

                <div>
                    {/* tablet */}
                    <div>
                        <img src={Logo} alt='Photosnap' />

                        <NavLink to='/'>
                            Get an invite
                            <img src={RightArrow} alt='Right Arrow' />
                        </NavLink>
                    </div>

                    <div>
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
                    </div>

                    <div>
                        <div>
                            <img src={Facebook} alt='Facebook' />
                            <img src={Youtube} alt='Youtube' />
                            <img src={Twitter} alt='Twitter' />
                            <img src={Pinterest} alt='Pinterest' />
                            <img src={Instagram} alt='Instagram' />
                        </div>
                        <span>Copyright 2019. All Rights Reserved</span>
                    </div>
                </div>

                <div>
                    {/* mobile */}
                    <img src={Logo} alt='Photosnap' />

                    <div>
                        <img src={Facebook} alt='Facebook' />
                        <img src={Youtube} alt='Youtube' />
                        <img src={Twitter} alt='Twitter' />
                        <img src={Pinterest} alt='Pinterest' />
                        <img src={Instagram} alt='Instagram' />
                    </div>

                    <div>
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
                    </div>

                    <NavLink to='/'>
                        Get an invite
                        <img src={RightArrow} alt='Right Arrow' />
                    </NavLink>

                    <span>Copyright 2019. All Rights Reserved</span>
                </div>
            </div>
        )
    }
}

export default Footer;