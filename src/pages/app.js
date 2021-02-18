import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Modules from '../components/modules'

class AppPage extends React.Component {
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

export default AppPage

export const pageQuery = graphql`
  query AppQuery {
    allContentfulPage(filter: {pageName: {eq: "App Page"}}) {
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
              ... on ContentfulCtaBreaker {
                id
                eyebrow
                childContentfulCtaBreakerTitleRichTextNode {
                  childContentfulRichText {
                    html
                  }
                }
                backgroundColor
                backgroundImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                foregroundImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                primaryCta
                primaryCtaUrl
                appPage
              }
              ... on ContentfulAppHero {
                id
                subtitle
                title
                backgroundImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                foregroundImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
              }
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
                  id
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                imageRight {
                  id
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
                  file {
                    contentType
                    url
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
                      id
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    imageRight {
                      id
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
