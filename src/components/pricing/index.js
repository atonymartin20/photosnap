import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import BetaFooter from '../betaFooter';

import HeroIMGDesktop from '../../assets/pricing/desktop/hero.jpg';
import HeroIMGTablet from '../../assets/pricing/tablet/hero.jpg';
import HeroIMGMobile from '../../assets/pricing/mobile/hero.jpg';
import CheckIcon from '../../assets/pricing/desktop/check.svg';

import '../../css/pricing.css';

class Pricing extends React.Component {
    state = {
        showMonthlySubscriptionOptions: true,
        showYearlySubscriptionOptions: false,
        basicMonthlyPrice: 19.00,
        proMonthlyPrice: 39.00,
        businessMonthlyPrice: 99.00,
        basicYearlyPrice: 190.00,
        proYearlyPrice: 390.00,
        businessYearlyPrice: 990.00,

    }

    switchSubscriptionOption = (event) => {
        event.preventDefault();
        this.setState({
            showMonthlySubscriptionOptions: !this.state.showMonthlySubscriptionOptions,
            showYearlySubscriptionOptions: !this.state.showYearlySubscriptionOptions
        })
    }

    render () {
        return (
            <div className='pricing-outside-container'>
                <Navbar />

                <div className='pricing-inside-container'>
                    <div className='pricing-inside-top-container'>
                        <div className='pricing-inside-top-text-div'>
                            <div className='pricing-linear-gradient' />
                            <div className='pricing-spacing-div'>
                                <h1>Pricing</h1>
                                <span>Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
                                    It’s the simple way to create and share your photos.
                                </span>
                            </div>
                        </div>

                        <img src={HeroIMGDesktop} alt='sunrise background with female holding camera' className='pricing-hero-img-desktop' />
                        <img src={HeroIMGTablet} alt='sunrise background with female holding camera' className='pricing-hero-img-tablet' />
                        <img src={HeroIMGMobile} alt='sunrise background with female holding camera' className='pricing-hero-img-mobile' />
                    </div>

                    <div className='pricing-tiers-container'>
                        <div className='pricing-tier-option-slider'>
                            <span className={this.state.showMonthlySubscriptionOptions === true ? 'pricing-tier-option-dark' : 'pricing-tier-option-light'}>Monthly</span>

                            <div className={this.state.showMonthlySubscriptionOptions === true ? 'slider-container' : 'slider-container-dark'} onClick={this.switchSubscriptionOption}>
                                <div className={this.state.showMonthlySubscriptionOptions === true ? 'slider-ball' : 'slider-ball-light'} />
                            </div>

                            <span className={this.state.showYearlySubscriptionOptions === true ? 'pricing-tier-option-dark' : 'pricing-tier-option-light'}>Yearly</span>
                        </div>

                        <div className='pricing-tier-options-holder'>
                            <div className='pricing-tier-grey'>
                                <div className='pricing-tier-options-text-div'>
                                    <h2>Basic</h2>
                                    <span>Includes basic usage of our platform. Recommended for new and aspiring photographers.</span>
                                </div>

                                <div className='pricing-tier-pricing-div'>
                                    {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.basicYearlyPrice.toFixed(2)}</h1> : <h1>${this.state.basicMonthlyPrice.toFixed(2)}</h1>}
                                    {this.state.showYearlySubscriptionOptions === true ? <span>per year</span> : <span>per month</span>}
                                </div>

                                <div className='pricing-pick-plan-button'>
                                    Pick Plan
                                </div>
                            </div>

                            <div className='pricing-tier-black'>
                                <div className='pricing-tier-linear-gradient' />
                                <div className='pricing-tier-black-spacing-div'>
                                    <div className='pricing-tier-options-text-div'>
                                        <h2>Pro</h2>
                                        <span>More advanced features available. Recommended for photography veterans and professionals.</span>
                                    </div>

                                    <div className='pricing-tier-pricing-div'>
                                        {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.proYearlyPrice.toFixed(2)}</h1> : <h1>${this.state.proMonthlyPrice.toFixed(2)}</h1>}
                                        {this.state.showYearlySubscriptionOptions === true ? <span>per year</span> : <span>per month</span>}
                                    </div>
                                    <div className='pricing-pick-plan-button'>
                                        Pick Plan
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-tier-grey'>
                                <div className='pricing-tier-options-text-div'>
                                    <h2>Business</h2>
                                    <span>Additional features available such as more detailed metrics. Recommended for business owners.</span>
                                </div>

                                <div className='pricing-tier-pricing-div'>
                                    {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.businessYearlyPrice.toFixed(2)}</h1> : <h1>${this.state.businessMonthlyPrice.toFixed(2)}</h1>}
                                    {this.state.showYearlySubscriptionOptions === true ? <span>per year</span> : <span>per month</span>}
                                </div>

                                <div className='pricing-pick-plan-button'>
                                    Pick Plan
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pricing-checkmark-outside-container'>
                        <h1>Compare</h1>

                        <div className='pricing-checkmark-inside-container-large'>
                            <div className='pricing-checkmark-inside-container-large-labels'>
                                <h4 className='pricing-checkmark-inside-container-large-title'>The Features</h4>
                                <h4 className='pricing-checkmark-inside-container-large-basic'>Basic</h4>
                                <h4 className='pricing-checkmark-inside-container-large-pro'>Pro</h4>
                                <h4 className='pricing-checkmark-inside-container-large-business'>Business</h4>
                            </div>

                            <div className='pricing-checkmark-inside-container-dark-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Unlimited Story Posting</h4>
                                <div className='pricing-checkmark-inside-container-large-basic'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-pro'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Unlimited Photo Upload</h4>
                                <div className='pricing-checkmark-inside-container-large-basic'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-pro'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Embedding Custom Content</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Customize Metadata</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Advanced Metrics</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro' />

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Photo Downloads</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro' />

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Search Engine Indexing</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro' />

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-large-card'>
                                <h4>Custom Analytics</h4>
                                <div className='pricing-checkmark-inside-container-large-basic' />

                                <div className='pricing-checkmark-inside-container-large-pro' />

                                <div className='pricing-checkmark-inside-container-large-business'>
                                    <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />
                        </div>

                        <div className='pricing-checkmark-inside-container-mobile'>
                            <h4>The Features</h4>

                            <div className='pricing-checkmark-inside-container-dark-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Unlimited Story Posting</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Unlimited Photo Upload</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Embedding Custom Content</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Customize Metadata</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Advanced Metrics</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Photo Downloads</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Search Engine Indexing</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />

                            <div className='pricing-checkmark-inside-container-mobile-card'>
                                <h4>Custom Analytics</h4>

                                <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container'>
                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-basic'>
                                        <h4>Basic</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-pro'>
                                        <h4>Pro</h4>
                                    </div>

                                    <div className='pricing-checkmark-inside-container-mobile-card-checkmark-container-business'>
                                        <h4>Business</h4>
                                        <img src={CheckIcon} alt='checkmark' className='pricing-checkmark-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='pricing-checkmark-inside-container-grey-line' />
                        </div>
                    </div>

                </div>

                <BetaFooter />
                <Footer />
            </div>
        )
    }
}

export default Pricing;