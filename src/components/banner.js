// src/components/banner.js
import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Text } from "./ui"

export default function Banner(props) {
  useEffect(() => {
    console.log("Banner props", props)

    return () => {}
  }, [])

  return (
    <Section>
      <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.bannerText}</Text>
        <Text>{props.demofield}</Text>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    bannerText
    bannerdata
    demofield
  }
`
