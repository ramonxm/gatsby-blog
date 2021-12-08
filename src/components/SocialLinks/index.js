import React from "react"
import Icons from "./Icons"
import links from "./content"
import {
  IconWrapper,
  SocialLinksItem,
  SocialLinksLink,
  SocialLinksList,
  SocialLinksWrapper,
} from "./styles"

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <SocialLinksList>
        {links.map((link, key) => {
          const Icon = Icons[link.label]
          return (
            <SocialLinksItem key={key}>
              <SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
              </SocialLinksLink>
            </SocialLinksItem>
          )
        })}
      </SocialLinksList>
    </SocialLinksWrapper>
  )
}

export default SocialLinks