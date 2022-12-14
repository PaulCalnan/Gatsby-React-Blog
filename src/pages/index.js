import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Title = styled.h1`
  display: inline-block;
`
const BlogLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;

  &:hover {
    color: #1dcaff;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <Title>My Coding Thoughts</Title>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
              <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
)}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date           
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`