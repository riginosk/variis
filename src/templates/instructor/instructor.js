import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Modules from '../../components/modules'

class IntructorsTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { data } = this.props;
    const moduleData = data.contentfulInstructor;

    return (
        <Layout location={this.props.location}>
            <Helmet title={siteTitle}   bodyAttributes={{class: 'instructor'}} />
            <Modules location={this.props.location} moduleData={moduleData} />
        </Layout>
    )
  }
}

export default IntructorsTemplate

export const instructorQuery = graphql`
  query InstructorQuery($slug: String!) {
    contentfulInstructor(slug: { eq: $slug }) {
          id
          instructorName
          instructorImage {
            fluid {
                ...GatsbyContentfulFluid
              }
          }
          modules {
            __typename
            ... on Node {
              ... on ContentfulInstructorHero {
                id
                instructorImage {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                  }
                instructorName
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
