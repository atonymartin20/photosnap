import React from 'react';
import Navbar from '../navbar';
import BetaFooter from '../betaFooter';
import Footer from '../footer';

import HeroIMGDesktop from '../../assets/features/desktop/hero.jpg';
import HeroIMGTablet from '../../assets/features/tablet/hero.jpg';
import HeroIMGMobile from '../../assets/features/mobile/hero.jpg';
import BoostExposureIMG from '../../assets/features/desktop/boost-exposure.svg';
import CustomDomainIMG from '../../assets/features/desktop/custom-domain.svg';
import DragDropIMG from '../../assets/features/desktop/drag-drop.svg';
import EmbedIMG from '../../assets/features/desktop/embed.svg';
import NoLimitIMG from '../../assets/features/desktop/no-limit.svg';
import ResponsiveIMG from '../../assets/features/desktop/responsive.svg';

import '../../css/features.css';

class Features extends React.Component {
    render () {
        return (
            <div className='features-outside-container'>
                <Navbar />

                <div className='features-inside-container'>
                    <div className='features-inside-top-container'>
                        <div className='features-inside-top-text-div'>
                            <div className='features-linear-gradient' />
                            <div className='features-spacing-div'>
                                <h1>Features</h1>
                                <span>We make sure all of our features are designed to be loved by every aspiring and even 
                                professional photograpers who wanted to share their stories.</span>
                            </div>
                        </div>
                        <img src={HeroIMGDesktop} alt='camera' className='hero-img-desktop' />
                        <img src={HeroIMGTablet} alt='camera' className='hero-img-tablet' />
                        <img src={HeroIMGMobile} alt='camera' className='hero-img-mobile' />
                    </div>

                    <div className='features-content-container'>
                        <div className='features-feature-card features-content-large-card'>
                            <img src={ResponsiveIMG} alt='Responsive icon' />
                            <h3>100% Responsive</h3>
                            <span>No matter which the device you’re on, our site is fully responsive and stories 
                                look beautiful on any screen.
                            </span>
                        </div>

                        <div className='features-feature-card features-content-small-card'>
                            <img src={NoLimitIMG} alt='Infinity sign' />
                            <h3>No Photo Upload Limit</h3>
                            <span>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
                                all of your stories in one go.
                            </span>
                        </div>

                        <div className='features-feature-card features-content-large-card'>
                            <img src={EmbedIMG} alt='Embed icon' />
                            <h3>Available to Embed</h3>
                            <span>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
                                Maps, and more.
                            </span>
                        </div>

                        <div className='features-feature-card features-content-large-card'>
                            <img src={CustomDomainIMG} alt='Custom domain icon' />
                            <h3>Custom Domain</h3>
                            <span>With Photosnap subscriptions you can host your stories on your own domain. You can 
                                also remove our branding!
                            </span>
                        </div>

                        <div className='features-feature-card features-content-large-card'>
                            <img src={BoostExposureIMG} alt='Boost your exposure icon' />
                            <h3>Boost Your Exposure</h3>
                            <span>Users that viewed your story or gallery can easily get notifed of new and featured 
                                stories with our built in mailing list.
                            </span>
                        </div>

                        <div className='features-feature-card features-content-large-card'>
                            <img src={DragDropIMG} alt='Drag and drop icon' />
                            <h3>Drag &amp; Drop Image</h3>
                            <span>Easily drag and drop your image and get beautiful shots everytime. No over the top 
                                tooling to add friction to creating stories.
                            </span>
                        </div>
                    </div>

                </div>

                <BetaFooter />
                <Footer />
            </div>
        )
    }
}

export default Features;