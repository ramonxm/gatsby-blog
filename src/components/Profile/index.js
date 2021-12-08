import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import { 
  ProfileLink, ProfileWrapper, ProfileAuthor, ProfileDescription, ProfilePosition
} from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, position },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            description
            position
          }
        }
      }
    `
  )
  
  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          {title}
        <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
        <ProfileDescription>{description}</ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
