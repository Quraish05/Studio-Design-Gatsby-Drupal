// src/components/NewHomepageHero.js
import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"

export default function NewHomepageHero(props) {
  useEffect(() => {
    console.log("NewHomepageHero props", props)

    return () => {}
  }, [])

  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.bannerDesc}</Text>
        <Text>{props.bannerTitle}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment NewHomepageHeroContent on NewHomepageHero {
    id
    bannerDesc
    bannerTitle
  }
`
