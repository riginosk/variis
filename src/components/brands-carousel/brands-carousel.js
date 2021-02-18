import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Transition from "../page-transition/page-transition"



const BrandsCarousel = ({ data }) => {

    const brands = data.allContentfulBrand.edges;
    const brandSlide = brands.map((brand) => {
        return (
            <div className="swiper-slide brand-slide" key={brand.node.id}>
                <Transition className="brand-slide__link view-cursor" to={`/${brand.node.slug}`} >
                    <div className="brand-slide__container">
                    <div className="brand-slide__image-container">
                        <img alt="" className="brand-slide__logo" src={brand.node.logo.file.url}/>
                        <Img className="brand-slide__image" fluid={brand.node.featureImage.fluid} />
                    </div>
                    <p className="brand-slide__brand-name">{brand.node.brandName}</p>
                    <p className="brand-slide__brand-description">{brand.node.carouselDescription}</p>
                    </div>
                </Transition>
            </div>
        )
    })

    useEffect(() => {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween:0,
            speed: 500,
        })
    }, []);

    return (
        <section className="brands-carousel drag-cursor">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {brandSlide}
                </div>
            </div>
        </section>
    )
}


export default function BrandCarousel(props) {
    return (
        <StaticQuery
            query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allContentfulBrand {
            edges {
              node {
                id
                brandName
                carouselDescription
                slug
                logo {
                    file {
                      url
                    }
                }
                featureImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
        }
      `}
            render={data => <BrandsCarousel data={data} {...props} />}
        />
    )
}


BrandsCarousel.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}