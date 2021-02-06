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
      border-bottom: 2px solid ${({ theme }) => theme.color.blue.regular};
    }
    & .ant-anchor-link:hover {
      border-bottom: 2px solid ${({ theme }) => theme.color.green.regular};
    }
  }
`

const StyledLink = styled(Link)`
  padding: 0 5px 0 5px;
  & a {
    color: #fff;
    padding: 7px 12px;
    display: inline-block;

    &:hover {
      color: ${({ theme }) => theme.color.green.regular};
    }
  }
`
