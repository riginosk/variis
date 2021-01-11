import React from "react"
import Img from 'gatsby-image'
import Button from '../button/button'

const TwoUp = (props) => {
    const data = props.data;
    const imageLeft = data.imageLeft.fluid;
    const imageRight = data.imageRight.fluid;
    const titleLeft = data.titleLeft;
    const titleRight = data.titleRight;
    const subtitleLeft = data.subtitleLeft;
    const subtitleRight = data.subtitleRight;
    const linkUrlLeft = data.linkUrlLeft;
    const linkUrlRight = data.linkUrlRight;
    const ctaTextLeft = data.ctaTextLeft;
    const ctaTextRight = data.ctaTextRight;
    const ctaTextColor = data.ctaTextColor;
    const ctaBackgroundColor = data.ctaBackgroundColor;

    return (
        <section className="two-up wrapper">
            <div className="two-up__item two-up__item--left">
                { imageLeft !== null &&
                    <Img className="two-up__image" fluid={imageLeft} />
                }
                { titleLeft !== null &&
                    <p className="two-up__title">{titleLeft}</p>
                }
                { subtitleLeft !== null &&
                    <p className="two-up__subtitle">{subtitleLeft}</p>
                }
                { linkUrlLeft && ctaTextLeft &&
                    <Button value={ctaTextLeft} to={linkUrlLeft} color={ctaTextColor} backgroundColor={ctaBackgroundColor} className="two-up__button" />
                }
            </div>
            <div className="two-up__item two-up__item--right">
                { imageRight !== null &&
                    <Img className="two-up__image" fluid={imageRight} />
                }
                { titleRight !== null &&
                    <p className="two-up__title">{titleRight}</p>
                }
                { subtitleRight !== null &&
                    <p className="two-up__subtitle">{subtitleRight}</p>
                }
                { linkUrlRight && ctaTextRight  &&
                    <Button value={ctaTextRight} to={linkUrlRight} color={ctaTextColor} backgroundColor={ctaBackgroundColor} className="two-up__button" />
                }
            </div>
        </section>
    )
}

export default TwoUp;

