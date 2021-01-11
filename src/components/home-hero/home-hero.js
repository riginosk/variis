import React from 'react'
import Img from 'gatsby-image'

const HomeHero = (props) => {
  const image = props.data.media.fluid;
  const title = props.data.title;

  return (
    <section className="home-hero">
      <Img className="home-hero__image" fluid={image} />
      <div className="home-hero__content">
        <h1 className="home-hero__title">{title}</h1>
      </div>
     </section>
  )
}

export default HomeHero;

