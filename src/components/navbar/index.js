import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo.svg';
import Hamburger from '../../assets/shared/mobile/menu.svg';
import CloseIcon from '../../assets/shared/mobile/close.svg';

class Navbar extends React.Component {
    state={
        drawerOpen: false,    
    }

    openDrawer = (event) => {
        event.preventDefault();
        this.setState({
            drawerOpen: true,
        })
    }

    closeDrawer = (event) => {
        event.preventDefault();
        this.setState({
            drawerOpen: false,
        })
    }

    render () {
        return (
            <div>
                <div>
                    {/* desktop */}
                    <NavLink to='/'>
                        <img src={Logo} alt='Photosnap' />
                    </NavLink>

                    <nav>
                        <NavLink to='/stories'>
                            Stories
                        </NavLink>

                        <NavLink to='/features'>
                            Features
                        </NavLink>

                        <NavLink to='/pricing'>
                            Pricing
                        </NavLink>

                        <NavLink to='/'>
                            Get an invite
                        </NavLink>
                    </nav>
                </div>

                <div>
                    {/* mobile */}
                    <div>
                        <NavLink to='/'>
                            <img src={Logo} alt='Photosnap' />
                        </NavLink>
                        {this.state.drawerOpen ? <img src={CloseIcon} alt='Close icon' onClick={this.closeDrawer} /> : <img src={Hamburger} alt='Hamburger' onClick={this.openDrawer} />}
                    </div>

                    <div>
                        <nav>
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
                        
                        <div className='line-div' />
                        <NavLink to='/'>
                            Get an invite
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;