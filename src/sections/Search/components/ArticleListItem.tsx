import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export const ArticleListItem = ({ article }) => {
  return (
    <Aricle to={`/${article.level ? article.level.slug : ""}/${article.slug}`}>
      {article.image && (
        <AricleImg fluid={article.image.childImageSharp.fluid} />
      )}
      <AricleText>
        <TimeToRead>{article.time_to_read} MIN</TimeToRead>
        <ArticleTitle>{article.title}</ArticleTitle>
        <br />
        <ArticleDescription>{article.description}</ArticleDescription>
      </AricleText>
    </Aricle>
  )
}

const Aricle = styled(Link)`
  background: rgba(97, 97, 116, 0.3);
  color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin: 30px 0;
  position: relative;

  overflow: hidden;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  &:hover {
    background-color: #616174;
    color: #fff;
  }
`

const AricleImg = styled(Img)`
  width: 144px;
  height: 144px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 5px;
`
const AricleText = styled.div`
  flex-grow: 1;
  padding: 20px;
`

const ArticleTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`

const ArticleDescription = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
`

const TimeToRead = styled.div`
  float: right;
  padding-right: 15px;
  letter-spacing: 0.15em;
  font-size: 11px;
  position: absolute;
  right: 20px;
  top: 23px;
`
