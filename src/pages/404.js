import React from 'react';
import { graphql } from 'gatsby';

const NotFoundPage = () => (
  <>
  </>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
