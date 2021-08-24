import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../navbar';
import Footer from '../footer';
import RightWhiteArrow from '../../assets/shared/desktop/white-arrow.svg';

import '../../css/stories.css';

class Stories extends React.Component {
    render () {
        return (
            <div>
                <Navbar />

                <div className='stories-outside-container'>
                    <div className='moon-img-small'>
                        <div className='darken-img-div' />
                    </div>

                    <div className='stories-featured-stories-container'>
                        <h4>Last month's featured story</h4>
                        <h1>Hazy full moon of Appalachia</h1>
                        <div>
                            <span className='stories-opacity-date-span'>March 2nd 2020</span>
                            <span>by John Appleseed</span>
                        </div>

                        <span className='featured-story-span'>The dissected plateau area, while not actually made up of geological mountains, 
                        is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                        and while the ridges are not high, the terrain is extremely rugged.</span>

                        <NavLink to='/stories' className='featured-story-nav-link'>
                            Read the story
                            <img src={RightWhiteArrow} alt='Right Arrow' />
                        </NavLink>
                    </div>

                    <div className='story-card-container'>
                        <div className='stories-story-card the-mountains-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 16th 2020</span>
                                <h3>The Mountains</h3>
                                <span>by John Appleseed</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card sunset-cityscapes-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 14th 2020</span>
                                <h3>Sunset Cityscapes</h3>
                                <span>by Benjamin Cruz</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card eighteen-days-voyage-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 11th 2020</span>
                                <h3>18 Days Voyage</h3>
                                <span>by Alexei Borodin</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card architecturals-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 9th 2020</span>
                                <h3>Architecturals</h3>
                                <span>by Samantha Brooke</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card world-tour-2019-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 7th 2020</span>
                                <h3>World Tour 2019</h3>
                                <span>by Timothy Wagner</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card unforeseen-corners-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>April 3rd 2020</span>
                                <h3>Unforeseen Corners</h3>
                                <span>by William Malcolm</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card king-on-africa-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 29th 2020</span>
                                <h3>King on Africa: Part II</h3>
                                <span>by Tim Hillenburg</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card the-trip-to-nowhere-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 21st 2020</span>
                                <h3>The Trip to Nowhere</h3>
                                <span>by Felicia Rourke</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card rage-of-the-sea-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 19th 2020</span>
                                <h3>Rage of The Sea</h3>
                                <span>by Mohammed Abdul</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card running-free-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 16th 2020</span>
                                <h3>Running Free</h3>
                                <span>by Michelle</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card behind-the-waves-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 11th 2020</span>
                                <h3>Behind the Waves</h3>
                                <span>by Lamarr Wilson</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card calm-waters-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 9th 2020</span>
                                <h3>Calm Waters</h3>
                                <span>by Samantha Brooke</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card the-milky-way-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 5th 2020</span>
                                <h3>The Milky Way</h3>
                                <span>by Benjamin Cruz</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card night-at-the-dark-forest-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 4th 2020</span>
                                <h3>Night at The Dark Forest</h3>
                                <span>by  Mohammed Abdul</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card somwarpets-beauty-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>March 1st 2020</span>
                                <h3>Somwarpet’s Beauty</h3>
                                <span>by Michelle</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>

                        <div className='stories-story-card land-of-dreams-story-card'>
                            <div className='stories-darken-story-card'>
                                <span className='story-card-date-span'>February 25th 2020</span>
                                <h3>Land of Dreams</h3>
                                <span>by William Malcolm</span>
                                <div className='story-card-line-div' />
                                <NavLink to='/stories' className='story-card-nav-link'>
                                    Read Story
                                    <img src={RightWhiteArrow} alt='Right Arrow' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Stories;