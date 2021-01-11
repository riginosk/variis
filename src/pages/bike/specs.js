import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'

class SpecsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { data } = this.props;
    const moduleData = data.allContentfulPage.edges[0].node;
    const pageName = moduleData.pageName;

    return (
      <Layout location={this.props.location} pageName={pageName}>
          <Helmet title={siteTitle} />
          <h1>Specs</h1>
      </Layout>
    )
  }
}

export default SpecsPage

export const pageQuery = graphql`
  query SpecsQuery {
    allContentfulPage(filter: {pageName: {eq: "Bike Page"}}) {
        nodes {
            id
          }
          edges {
            node {
              id
              pageName
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
                  ... on ContentfulHomeHero {
                    id
                    title
                    media {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
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
        }
      }
    `
    