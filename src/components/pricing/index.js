import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import BetaFooter from '../betaFooter';

import HeroIMGDesktop from '../../assets/pricing/desktop/hero.jpg';
import HeroIMGTablet from '../../assets/pricing/tablet/hero.jpg';
import HeroIMGMobile from '../../assets/pricing/mobile/hero.jpg';
import CheckIcon from '../../assets/pricing/desktop/check.svg';

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

    render () {
        return (
            <div>
                <Navbar />

                <div>
                    <div>
                        <div>
                            <h1>Pricing</h1>
                            <span>Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
                                It’s the simple way to create and share your photos.
                            </span>
                        </div>

                        <img src={HeroIMGDesktop} alt='sunrise background with female holding camera' />
                        <img src={HeroIMGTablet} alt='sunrise background with female holding camera' />
                        <img src={HeroIMGMobile} alt='sunrise background with female holding camera' />
                    </div>

                    <div>
                        <div>
                            <span>Monthly</span>

                            <label class="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>

                            <span>Yearly</span>
                        </div>

                        <div>
                            <div>
                                <h2>Basic</h2>
                                <span>Includes basic usage of our platform. Recommended for new and aspiring photographers.</span>
                                {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.basicYearlyPrice}</h1> : <h1>${this.state.basicMonthlyPrice}</h1>}
                                {this.state.showYearlySubscriptionOptions === true ? <span>per month</span> : <span>per year</span>}

                                <div>
                                    Pick Plan
                                </div>
                            </div>

                            <div>
                                <h2>Pro</h2>
                                <span>More advanced features available. Recommended for photography veterans and professionals.</span>
                                {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.proYearlyPrice}</h1> : <h1>${this.state.proMonthlyPrice}</h1>}
                                {this.state.showYearlySubscriptionOptions === true ? <span>per month</span> : <span>per year</span>}
                                <div>
                                    Pick Plan
                                </div>
                            </div>

                            <div>
                                <h2>Business</h2>
                                <span>Additional features available such as more detailed metrics. Recommended for business owners.</span>
                                {this.state.showYearlySubscriptionOptions === true ? <h1>${this.state.businessYearlyPrice}</h1> : <h1>${this.state.businessMonthlyPrice}</h1>}
                                {this.state.showYearlySubscriptionOptions === true ? <span>per month</span> : <span>per year</span>}
                                <div>
                                    Pick Plan
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1>Compare</h1>

                            <div>
                                <div>
                                    <h4>The Features</h4>
                                    <h4>Basic</h4>
                                    <h4>Pro</h4>
                                    <h4>Business</h4>
                                </div>

                                <div>
                                    <h4>Unlimited Story Posting</h4>
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Unlimited Photo Upload</h4>
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Embedding Custom Content</h4>
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Customize Metadata</h4>
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Advanced Metrics</h4>
                                    <div />
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Photo Downloads</h4>
                                    <div />
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Search Engine Indexing</h4>
                                    <div />
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>

                                <div>
                                    <h4>Custom Analytics</h4>
                                    <div />
                                    <div />
                                    <img src={CheckIcon} alt='checkmark' />
                                </div>
                            </div>
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