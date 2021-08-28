import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../navbar';
import Footer from '../footer';
import RightArrow from '../../assets/shared/desktop/arrow.svg';
import RightWhiteArrow from '../../assets/shared/desktop/white-arrow.svg';
import CreateIMGDesktop from '../../assets/home/desktop/create-and-share.jpg';
import CreateIMGTablet from '../../assets/home/tablet/create-and-share.jpg';
import CreateIMGMobile from '../../assets/home/mobile/create-and-share.jpg';
import BeautifulIMGDesktop from '../../assets/home/desktop/beautiful-stories.jpg';
import BeautifulIMGTablet from '../../assets/home/tablet/beautiful-stories.jpg';
import BeautifulIMGMobile from '../../assets/home/mobile/beautiful-stories.jpg';
import DesignedIMGDesktop from '../../assets/home/desktop/designed-for-everyone.jpg';
import DesignedIMGTablet from '../../assets/home/tablet/designed-for-everyone.jpg';
import DesignedIMGMobile from '../../assets/home/mobile/designed-for-everyone.jpg';
import ResponsiveIMG from '../../assets/features/desktop/responsive.svg';
import NoLimitIMG from '../../assets/features/desktop/no-limit.svg';
import EmbedIMG from '../../assets/features/desktop/embed.svg';

import '../../css/homepage.css';

class Homepage extends React.Component {
    render () {
        return (
            <div className='homepage-outside-container'>
                <Navbar />
                <div className='homepage-inside-container'>
                    <div className='homepage-top-portion-div'>
                        <div className='homepage-top-text-div'>
                            <div className='homepage-linear-gradient' />
                            <div className='homepage-spacing-div'>
                                <h1>Create and share your photo Stories.</h1>

                                <span>Photosnap is a platform for photographers and visual storytellers. We make it 
                                easy to share photos, tell stories and connect with others.</span>

                                <NavLink to='/' className='homepage-nav-link'>
                                    Get an invite
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <img src={CreateIMGDesktop} alt='Man looking off dock' className='homepage-create-image-desktop' />
                        <img src={CreateIMGTablet} alt='Man looking off dock' className='homepage-create-image-tablet' />
                        <img src={CreateIMGMobile} alt='Man looking off dock' className='homepage-create-image-mobile' />
                    </div>

                    <div className='homepage-second-section-div'>
                        <img src={BeautifulIMGDesktop} alt='Desk' className='homepage-beautiful-image-desktop' />
                        <img src={BeautifulIMGTablet} alt='Desk' className='homepage-beautiful-image-tablet' />
                        <img src={BeautifulIMGMobile} alt='Desk' className='homepage-beautiful-image-mobile' />

                        <div className='homepage-second-section-text-div'>
                            <h1>Beautiful stories every time</h1>

                            <span>We provide design templates to ensure your stories look terrific. Easily add 
                                photos, text, embed maps and media from other networks. Then share your story with everyone.
                            </span>

                            <NavLink to='/stories' className='homepage-nav-link'>
                                View the stories
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>
                    </div>

                    <div className='homepage-third-section-div'>
                        <div className='homepage-third-section-text-div'>
                            <h1>Designed for everyone</h1>

                            <span>Photosnap can help you create stories that resonate with your audience.  Our 
                                tool is designed for photographers of all levels, brands, businesses you name it.
                            </span>

                            <NavLink to='/stories' className='homepage-nav-link'>
                                View the stories
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <img src={DesignedIMGDesktop} alt='Man with camera' className='homepage-designed-image-desktop'/>
                        <img src={DesignedIMGTablet} alt='Man with camera' className='homepage-designed-image-tablet' />
                        <img src={DesignedIMGMobile} alt='Man with camera' className='homepage-designed-image-mobile' />
                    </div>

                    <div className='homepage-stories-container'>
                        <div className='homepage-story-card the-mountains-homepage-story-card'>
                            <div className='homepage-story-darken-card'>
                                <h3>The Mountains</h3>
                                <span>by John Appleseed</span>
                                <div className='horizontal-line-div' />
                                <NavLink to='/stories' className='homepage-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                            <div className='story-gradient' />
                        </div>

                        <div className='homepage-story-card sunset-cityscapes-homepage-story-card'>
                            <div className='homepage-story-darken-card'>
                                <h3>Sunset Cityscapes</h3>
                                <span>by Benjamin Cruz</span>
                                <div className='horizontal-line-div' />
                                <NavLink to='/stories' className='homepage-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                            <div className='story-gradient' />
                        </div>

                        <div className='homepage-story-card eighteen-day-voyage-homepage-story-card'>
                            <div className='homepage-story-darken-card'>
                                <h3>18 Days Voyage</h3>
                                <span>by Alexei Borodin</span>
                                <div className='horizontal-line-div' />
                                <NavLink to='/stories' className='homepage-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                            <div className='story-gradient' />
                        </div>

                        <div className='homepage-story-card architecturals-homepage-story-card'>
                            <div className='homepage-story-darken-card'>
                                <h3>Architecturals</h3>
                                <span>by Samantha Brooke</span>
                                <div className='horizontal-line-div' />
                                <NavLink to='/stories' className='homepage-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                            <div className='story-gradient' />
                        </div>
                    </div>

                    <div className='homepage-features-container'>
                        <div className='homepage-features-card homepage-features-large-card'>
                            <img src={ResponsiveIMG} alt='Responsive logo' />
                            <h3>100% Responsive</h3>

                            <span>No matter which the device you’re on, our site is fully responsive and stories 
                            look beautiful on any screen.</span>
                        </div>

                        <div className='homepage-features-card homepage-features-small-card'>
                            <img src={NoLimitIMG} alt='Infinity sign' />
                            <h3>No Photo Upload Limit</h3>

                            <span>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
                            share all of your stories in one go.</span>
                        </div>

                        <div className='homepage-features-card homepage-features-large-card'>
                            <img src={EmbedIMG} alt='Embed icon' />
                            <h3>Available to Embed</h3>

                            <span>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                            Google Maps, and more. </span>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Homepage;