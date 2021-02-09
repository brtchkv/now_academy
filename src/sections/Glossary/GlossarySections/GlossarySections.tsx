import styled from "styled-components"
import * as React from "react"
import { Anchor } from "antd"

const { Link } = Anchor

export const GlossarySections = ({ level }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

  return (
    <StyledGlossaryList>
      {!level && (
        <StyledAnchor affix={false} showInkInFixed={false}>
          {alphabet.map((letter) => (
            <StyledLink key={letter} href={`#${letter}`} title={letter} />
          ))}
        </StyledAnchor>
      )}
    </StyledGlossaryList>
  )
}

const StyledGlossaryList = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledAnchor = styled(Anchor)`
  background: ${({ theme }) => theme.color.blue.dark};
  color: #fff;
  max-height: 100% !important;
  margin: auto;
  & .ant-anchor {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .ant-anchor-ink {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    & .ant-anchor-link {
      background: linear-gradient(90deg, rgba(62,62,89,1) 0%, rgba(62,62,89,1) 50%, rgba(62,62,89,1) 100%); 
      background-position-x: 0%;
      background-position-y: 0%;
      background-size: 100% 2px;
      background-position: bottom 0 left 0,bottom 1px left 0;
      background-repeat: no-repeat;
    }
    & .ant-anchor-link:hover {
      background: linear-gradient(90deg, rgba(62,62,89,1) 0%, rgba(0,194,111,1) 50%, rgba(62,62,89,1) 100%);       background-position-x: 0%;
      background-position-y: 0%;
      background-size: 100% 2px;
      background-position: bottom 0 left 0,bottom 1px left 0;
      background-repeat: no-repeat;
    }
  }
`

const StyledLink = styled(Link)`
  padding: 0 3px 0 3px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  & a {
    color: #fff;
    padding: 7px 12px;
    display: inline-block;

    &:hover {
      color: ${({ theme }) => theme.color.green.regular};
    }
  }
`
