import React from "react"
import { Link, graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/Background"
import Info from "../components/home/Info"

const IndexPage = ({ data }) => (
  // pass in data to render background image
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="The Shot House"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
// check gatsby-image-plugin for fragment query info(...gatsby)

export default IndexPage
