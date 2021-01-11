import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Modules from '../../components/modules'

class BrandsTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { data } = this.props;
    const moduleData = data.contentfulBrand;
    const brandName = moduleData.brandName;
    const logo = moduleData.logo.file.url;

    return (
      <Layout location={this.props.location} brandName={brandName} logo={logo}>
          <Helmet title={siteTitle} />
          <Modules location={this.props.location} moduleData={moduleData} />
      </Layout>
    )
  }
}

export default BrandsTemplate

export const pageQuery = graphql`
  query BrandQuery($slug: String!) {
    contentfulBrand(slug: { eq: $slug }) {
          id
          brandName
          logo {
            file {
              url
            }
          }
          modules {
            __typename
            ... on Node {
              ... on ContentfulInstructorsGrid {
                id
                brandName
                description {
                  id
                  description
                }
                instructors {
                  slug
                  numberOfClasses
                  instructorName
                  instructorImage {
                    fluid {
                      ...GatsbyContentfulFluid 
                    }
                  }
                }
              }
              ... on ContentfulBrandHero {
                id
                image {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
              }
              ... on ContentfulReviews {
                id
                addReviews {
                  id
                  text
                  title
                  user
                  date
                }
              }
              ... on ContentfulFullWidthMedia {
                id
                media {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                  file {
                    contentType
                    url
                  }
                }
              }
              ... on ContentfulTwoUp {
                id
                imageLeft {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                imageRight {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                linkUrlLeft
                linkUrlRight
                subtitleLeft
                subtitleRight
                titleLeft
                titleRight
                ctaTextRight
                ctaTextLeft
                ctaTextColor
                ctaBackgroundColor
              }
              ... on ContentfulBrandsCarousel {
                id
              }
              ... on ContentfulSpace {
                id
                spaceSize
              }
              ... on ContentfulTextBreaker {
                id
                textColor
                highlightColor
                childContentfulTextBreakerTextBreakerRichTextNode {
                  id
                  childContentfulRichText {
                    html
                  }
                }
              }
              ... on ContentfulSection {
                id
                backgroundColor
                textColor
                modules {
                  __typename
                  ... on Node {
                    ... on ContentfulInstructorsGrid {
                      id
                      brandName
                      description {
                        id
                        description
                      }
                      instructors {
                        slug
                        numberOfClasses
                        instructorName
                        instructorImage {
                          fluid {
                            ...GatsbyContentfulFluid 
                          }
                        }
                      }
                    }
                    ... on ContentfulReviews {
                      id
                      addReviews {
                        id
                        text
                        title
                        user
                        date
                      }
                    }
                  }
                  ... on ContentfulFullWidthMedia {
                    id
                    media {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                      file {
                        contentType
                        url
                      }
                    }
                  }
                  ... on ContentfulTwoUp {
                    id
                    imageLeft {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    imageRight {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    linkUrlLeft
                    linkUrlRight
                    subtitleLeft
                    subtitleRight
                    titleLeft
                    titleRight
                    ctaTextRight
                    ctaTextLeft
                    ctaTextColor
                    ctaBackgroundColor
                  }
                  ... on ContentfulBrandsCarousel {
                    id
                  }
                  ... on ContentfulSpace {
                    id
                    spaceSize
                  }
                  ... on ContentfulTextBreaker {
                    id
                    textColor
                    highlightColor
                    childContentfulTextBreakerTextBreakerRichTextNode {
                      id
                      childContentfulRichText {
                        html
                      }
                    }
                  }
                }
              }
            }
          }
        }
  }
`
