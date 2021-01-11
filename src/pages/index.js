import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Modules from '../components/modules'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { data } = this.props;
    const moduleData = data.allContentfulPage.edges[0].node;
    const pageName = moduleData.pageName;

    return (
      <Layout location={this.props.location} pageName={pageName}>
          <Helmet title={siteTitle} />
          <Modules location={this.props.location} moduleData={moduleData} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPage(filter: {pageName: {eq: "Home Page"}}) {
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
              ... on ContentfulContentPreview {
                id
                content {
                  title
                  video {
                    id
                    file {
                      url
                    }
                  }
                  description {
                    description
                  }
                  image {
                    fluid {
                      ...GatsbyContentfulFluid
                    }
                  }
                }
                sectionText {
                  childContentfulRichText {
                    html
                  }
                }
              }
              ... on ContentfulCarousel {
                id
                slides {
                  id
                  title
                  text {
                    childContentfulRichText {
                      html
                    }
                  }
                  image {
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
                    ... on ContentfulContentPreview {
                      id
                      content {
                        title
                        video {
                          id
                          file {
                            url
                          }
                        }
                        description {
                          description
                        }
                        image {
                          fluid {
                            ...GatsbyContentfulFluid
                          }
                        }
                      }
                      sectionText {
                        childContentfulRichText {
                          html
                        }
                      }
                    }
                    ... on ContentfulCarousel {
                      id
                      slides {
                        id
                        title
                        text {
                          childContentfulRichText {
                            html
                          }
                        }
                        image {
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
    }
  }
`
