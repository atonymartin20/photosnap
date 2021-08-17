import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../navbar';
import Footer from '../footer';
import RightArrow from '../../assets/shared/desktop/arrow.svg';

class Stories extends React.Component {
    render () {
        return (
            <div>
                <Navbar />

                <div>
                    <div>
                        <h4>Last month's featured story</h4>
                        <h1>Hazy full moon of Appalachia</h1>
                        <div>
                            <span>March 2nd 2020</span>
                            <span>by John Appleseed</span>
                        </div>

                        <span>The dissected plateau area, while not actually made up of geological mountains, 
                        is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
                        and while the ridges are not high, the terrain is extremely rugged.</span>

                        <NavLink to='/stories'>
                        Read the story
                        <img src={RightArrow} alt='Right Arrow' />
                        </NavLink>
                    </div>

                    <div>
                        <div>
                            <span>April 16th 2020</span>
                            <h3>The Mountains</h3>
                            <span>by John Appleseed</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>April 14th 2020</span>
                            <h3>Sunset Cityscapes</h3>
                            <span>by Benjamin Cruz</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>April 11th 2020</span>
                            <h3>18 Days Voyage
                        </h3>
                            <span>by Alexei Borodin</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>April 9th 2020</span>
                            <h3>Architecturals</h3>
                            <span>by Samantha Brooke</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>April 7th 2020</span>
                            <h3>World Tour 2019</h3>
                            <span>by Timothy Wagner</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>April 3rd 2020</span>
                            <h3>Unforeseen Corners</h3>
                            <span>by William Malcolm</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 29th 2020</span>
                            <h3>King on Africa: Part II</h3>
                            <span>by Tim Hillenburg</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 21st 2020</span>
                            <h3>The Trip to Nowhere</h3>
                            <span>by Felicia Rourke</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 19th 2020</span>
                            <h3>Rage of The Sea</h3>
                            <span>by Mohammed Abdul</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 16th 2020</span>
                            <h3>Running Free</h3>
                            <span>by Michelle</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 11th 2020</span>
                            <h3>Behind the Waves</h3>
                            <span>by Lamarr Wilson</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 9th 2020</span>
                            <h3>Calm Waters</h3>
                            <span>by Samantha Brooke</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 5th 2020</span>
                            <h3>The Milky Way</h3>
                            <span>by Benjamin Cruz</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 4th 2020</span>
                            <h3>Night at The Dark Forest</h3>
                            <span>by  Mohammed Abdul</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>March 1st 2020</span>
                            <h3>Somwarpet’s Beauty</h3>
                            <span>by Michelle</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>

                        <div>
                            <span>February 25th 2020</span>
                            <h3>Land of Dreams</h3>
                            <span>by William Malcolm</span>
                            <div className='line-div' />
                            <NavLink to='/stories'>
                                Read Story
                                <img src={RightArrow} alt='Right Arrow' />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Stories;