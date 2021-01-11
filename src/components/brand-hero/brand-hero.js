import React from 'react'
import Img from 'gatsby-image'

const BrandHero = (props) => {
  const data = props.data;

  return (
    <section className="brand-hero">
        <Img className="full-width-media__image" fluid={data.image.fluid} />
    </section>
  )
}

export default BrandHero;

