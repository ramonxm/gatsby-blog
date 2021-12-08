import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AvatarWrapper } from "./styles"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <AvatarWrapper fixed={avatarImage.childImageSharp.fixed} className="foo" />
}

export default Avatar