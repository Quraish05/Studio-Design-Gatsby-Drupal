import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import { Section, Container, Heading, Text } from "../components/ui"

export default function NewHomepage(props) {
  const { newHomepage } = props.data

  useEffect(() => {
    console.log("NewHomePage props", props)
  }, [])

  return (
    <Layout>
      <Heading>{newHomepage.title}</Heading>

      {newHomepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { newHomepage } = props.data
  return <SEOHead {...newHomepage} />
}
export const query = graphql`
  {
    newHomepage {
      id
      title
      blocks: content {
        id
        blocktype
        ...NewHomepageHeroContent
      }
    }
  }
`
