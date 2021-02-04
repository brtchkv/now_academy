import styled from "styled-components"
import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Col, Row } from "antd"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

export const ArticleSlider = () => {
  const [scrollPostion, setScrollPostion] = useState(0)

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      document.addEventListener("scroll", listenToScrollEvent)
    }
    return () => {
      document.removeEventListener("scroll", listenToScrollEvent)
    }
  })

  const listenToScrollEvent = () => {
    requestAnimationFrame(() => {
      calculateScrollDistance()
    })
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset
    const winHeight = window.innerHeight
    const docHeight = getDocHeight()

    const totalDocScrollLength = docHeight - winHeight
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100)

    setScrollPostion(scrollPostion)
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }

  return (
    <>
        <Progress />
        <ProgressLine scroll={scrollPostion + "%"} />
    </>
  )
}

const ProgressLine = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.green.regular} ${(props) => props.scroll},
    transparent 0
  );
  width: 3%;
  top: 0px;
  height: 90%;
  z-index: -2;
  position: absolute;
  right: 0;
`

const Progress = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.blue.regular} 99%,
    transparent 0
  );
  width: 3%;
  top: 0px;
  height: 90%;
  z-index: -2;
  position: absolute;
  right: 0;
`