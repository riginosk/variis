import React from 'react'
import Img from 'gatsby-image'
import Button from '../button/button'

const HomeHero = (props) => {
  const image = props.data.media.fluid;
  const title = props.data.title;
  const contentType = props.data.media.file.contentType;
  const url = props.data.media.file.url;

  return (
    <section className="home-hero">
      <div className="home-hero__media-container">
            {contentType.includes("image") &&
              <Img className="home-hero__image" fluid={image} />
            }
            {contentType.includes("video") &&
              <video className="home-hero__video" width="100%" preload='auto' loop autoPlay muted>
                  <source src={url} type="video/mp4" />
              </video>
            }
        </div>
      <div className="home-hero__content grid wrapper">
        <div className="home-hero__content-container">
          <h1 className="home-hero__title">{title}</h1>
          <div className="home-hero__cta-container">
          <Button value="Start 7-day app trial" to="/.bike" color="#000" backgroundColor="#fff" className="home-hero__button" />
          <Button value="Get the Bike" to="/.bike" color="#000" backgroundColor="#fff" className="home-hero__button" />
          </div>

        </div>
      </div>
     </section>
  )
}

export default HomeHero;

