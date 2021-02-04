import { Menu, Dropdown, Input } from "antd"
import * as React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { AudioOutlined, DownOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { Link } from "gatsby"

import changeNow from "./changenow.svg"

const { Search } = Input

export const DesktopMenu: React.FunctionComponent = () => {
  const slugAndTextList = [["", "Glossary"]]
  const pathname =
    (typeof window !== "undefined" && window.location.pathname) || ""
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const onClick = ({ key }) => {
    navigate(`/${key}`)
  }

  const menu = (
    <StyledMenu onClick={onClick}>
      <Menu.Item key="beginner-level">Beginner</Menu.Item>
      <Menu.Item key="intermediate-level">Intermediate</Menu.Item>
      <Menu.Item key="advanced-level" disabled>
        Advanced
      </Menu.Item>
    </StyledMenu>
  )

  useEffect(() => {
    const [selectedSlug] = slugAndTextList.find(([slug]) =>
      pathname.includes(slug)
    ) || [""]
    setSelectedKeys([selectedSlug])
  }, [])

  return (
    <StyledMainMenu mode="horizontal" selectedKeys={selectedKeys} selectable>
      <StyledMenuItemWithoutBorder style={{ marginLeft: 0, paddingLeft: 0 }}>
        <StyledLogoLink to="/">
						<img src={changeNow} alt={"ChangeNow"} style={{ width: '146px' }} />
				</StyledLogoLink>
      </StyledMenuItemWithoutBorder>

      <StyledMenuItemWithoutBorder
        key="search"
        style={{ flexGrow: 4, textAlign: "center" }}
      >
        <StyledSearch
          placeholder="Search for anything..."
          onSearch={async (value) => {
            await navigate("/search", { state: { search: value } })
          }}
        />
      </StyledMenuItemWithoutBorder>

      {slugAndTextList.map(([slug, text]) => (
        <StyledMenuItem key={slug} style={{ float: "right", borderBottom: "none" }}>
          <StyledLink to={`/${slug}`}>{text}</StyledLink>
        </StyledMenuItem>
      ))}

      <StyledMenuItemWithoutBorder style={{ marginRight: 0, paddingRight: 0 }}>
        <a target="_blank" href="https://changenow.io/">
          <ChangeNowLogo src={changeNow} alt="Change Now logo" width={105} />
        </a>
      </StyledMenuItemWithoutBorder>
    </StyledMainMenu>
  )
}
const StyledLogoLink = styled(Link)`
	margin-left: auto;
  margin-right: auto;
  padding-left: 0;
`;

const StyledSearch = styled(Search)`
  margin: 0 auto;
  border: 0px solid ${({ theme }) => theme.color.blue.regular};
  border-bottom: 1px solid ${({ theme }) => theme.color.blue.regular};
  border-right-width: 0px !important;
  box-shadow: none !important;
  background: ${({ theme }) => theme.color.blue.regular};
  flex-direction: row-reverse;
  border-radius: 0;
  vertical-align: middle;
  width: 365px;
  height: 51px;
  padding: 0;
  margin-left: 70px;

  .ant-input {
    &::placeholder {
      color: ${({ theme }) => theme.color.gray.regular};
    }
  }

  .ant-input-suffix {
    .ant-input-search-icon::before {
      display: none;
    }
    .ant-input-search-icon {
      color: ${({ theme }) => theme.color.white.regular};
      padding-left: 5px;
    }
  }

  &:hover {
    border-right-width: 0px !important;
  }
  &:focus {
    box-shadow: none !important;
    border-right-width: 0px !important;
  }
`

const StyledMainMenu = styled(Menu)`
  display: flex;
  background: ${({ theme }) => theme.color.blue.dark};
  border: none;
`

const StyledMenu = styled(Menu)`
  background: #373745;

  & .ant-dropdown-menu-item-disabled {
    &:hover {
      color: rgba(255, 255, 255, 0.3);
    }
  }
  & li {
    &:hover {
      color: #35f7a4;
    }
  }
`

const StyledMenuItem = styled(Menu.Item)`
  margin: 0 14px;
  padding: 0;
  & a {
    color: #fff !important;
  }
  &:hover {
    border-bottom: none !important;
  }
`

const StyledMenuItemWithoutBorder = styled(Menu.Item)`
  margin: 0 14px;
  border-bottom: 0px !important;
  display: table-cell;
  padding: 0;

  & a {
    color: #fff !important;
  }
  &:hover {
    border-bottom: 0px !important;
  }
`

const StyledA = styled.a`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    color: #00c26f !important;

  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: lighter;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    color: #00c26f !important;
  }
`

const ChangeNowLogo = styled.img`
  margin-top: -4px;
`
