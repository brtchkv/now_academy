import { Breadcrumb } from "antd"
import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const GlossaryBreadcrumbs: React.FunctionComponent = ({
  level,
  title,
}) => {
  const getSlug = (slug) => {
    return slug ? `/${level.slug}/${slug}` : ""
  }

  return (
    <Navigation>
      <StyledBreadcrumb separator="→">
        <Breadcrumb.Item>
          <StyledLink to={"/"}>NOWAcademy</StyledLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <StyledLink to={`/${level.slug}`}>{level.name}</StyledLink>
        </Breadcrumb.Item>
      </StyledBreadcrumb>
      <NavigationArticles>
        <StyledLink to={"/"}>← Back to Academy</StyledLink>
      </NavigationArticles>
    </Navigation>
  )
}

const StyledLink = styled(Link)`
  font-size: 18px;
	color: #AAAAAF;
	white-space: nowrap;
	line-height: 21px;
	font-weight: lighter;
  &:hover {
    color: ${({ theme }) => theme.color.green.regular};
  }
`

const StyledBreadcrumb = styled(Breadcrumb)`
  color: ${({ theme }) => theme.color.gray.regular};
  width: max-content;
  & span {
    color: ${({ theme }) => theme.color.gray.regular};
  }
  & a {
    color: ${({ theme }) => theme.color.gray.regular};
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 1rem;
  & a:hover {
    color: ${({ theme }) => theme.color.green.regular};
  }
`

const NavigationItem = styled.div`
  border-radius: 4px;
  padding: 0;
  color: ${({ theme }) => theme.color.gray.regular};
  width: max-content;
  & span {
    color: ${({ theme }) => theme.color.gray.regular};
  }
  & a {
    color: ${({ theme }) => theme.color.gray.regular};
  }

  &:hover {
    color: ${({ theme }) => theme.color.green.regular};
  }
`

const NavigationArticles = styled.div`
  display: flex;
  flex-direction: row;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.155em;
  text-transform: uppercase;
  color: #00c26f;
`
