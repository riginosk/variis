import React from 'react';
import Button from '../button/button';


const SecondaryNavigation = (props) => {
    const pageName = props.data.pageName;
    const showFeatures = props.data.showFeatures;
    const showSpecs = props.data.showSpecs;
    const brandName = props.data.brandName;
    const logo = props.data.logo;

    return (
        <>
            {
                pageName === "App Page" &&
                <div className="secondary-navigation">
                    <div className="secondary-navigation__container wrapper">
                        <ul>
                            <li className="link">EQX+ App</li>
                        </ul>
                        <Button value="Get the App" to="/" color="#000000" backgroundColor="#959383" />
                    </div>
                </div>
            }
            {
                pageName === "Bike Page" &&
                <div className="secondary-navigation">
                    <div className="secondary-navigation__container wrapper">
                        <ul>
                            <li className="link is-active"><button onClick={showFeatures}>Features</button></li>
                            <li className="link"><button onClick={showSpecs}>Specs</button></li>
                        </ul>
                        <Button value="Get the Bike" to="/" color="#ffffff" backgroundColor="#000000" />
                    </div>
                </div>
            }
            {
                brandName &&
                <div className="secondary-navigation">
                    <div className="secondary-navigation__container wrapper">
                        <ul>
                            <li className="link">{brandName}</li>
                        </ul>
                        <figure className="secondary-navigation__logo">
                            <img alt={brandName} src={logo} />
                        </figure>
                    </div>
                </div>

            }
        </>
    )
}

export default SecondaryNavigation;

