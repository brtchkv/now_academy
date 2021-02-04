import styled from "styled-components"
import { Col, Row } from "antd"

import * as React from "react"
import plus from "./assets/plus.svg"
import minus from "./assets/minus.svg"

export const GlossaryDropDown: React.FunctionComponent = ({
  name,
  shortDescription,
  description,
}) => {
  const [shownFull, setShownFull] = React.useState(false)
  const [shownShort, setShownShort] = React.useState(false)
  const onDropdownClicked = () => {
    setShownFull(!shownFull)
    setShownShort(!shownShort)
  }

  return (
    <StyledHoverCol>
      <StyledRow onClick={onDropdownClicked}>
        <Col md={5} xs={24}>
          <TermName>{name}</TermName>
        </Col>
        <Col md={17} xs={0}>
          <TermDescription
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
          {shownFull && (
            <TermFullDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </Col>
        <Col lg={0} md={0} xs={24}>
          {shownShort && (
            <TermDescription
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          )}
        </Col>
        <StyledCol md={0} lg={2} xs={0} minus={shownFull}>
          <img src={shownFull ? minus : plus} />
        </StyledCol>
      </StyledRow>
    </StyledHoverCol>
  )
}

const StyledHoverCol = styled(Col)`
  transition: ${({ theme }) => theme.color.green.regular} 0.3s 0.0833333333s;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: "";
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    left: 0;
  }
  &::before {
    border-bottom-width: 1px;
    border-right-width: 1px;
  }
  &::after {
    border-top-width: 1px;
    border-left-width: 1px;
  }
  &:hover {
    color: #fff;
    border: none;
  }
  &:hover::before,
  &:hover::after {
    border-color: ${({ theme }) => theme.color.green.regular};
    transition: border-color 0s, width 0.3s, height 0.3s;
    width: 100%;
    height: 100%;
  }
  &:hover::before {
    transition-delay: 0s, 0s, 0.3s;
  }
  &:hover::after {
    transition-delay: 0s, 0.3s, 0s;
  }
`
const StyledCol = styled(Col)`
  text-align: end;
  margin: ${(props) => (props.minus ? "0" : "auto")};
`

const StyledRow = styled(Row)`
  padding: 24px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.color.blue.regular};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding: 12px;
  }
`

const TermName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    text-align: center;
    margin-bottom: 0px;
  }
`

const TermDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray.regular};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
`

const TermFullDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray.regular};
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
`
