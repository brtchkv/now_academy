import { Menu, Dropdown, Row, Col, Form } from "antd"
import * as React from "react"
import { graphql, navigate, StaticQuery, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Input, AutoComplete } from "antd"
import { SelectProps } from "antd/es/select"
import { SearchOutlined } from "@ant-design/icons"
import changeNow from "./changeNow.svg"

import academy from "./academyLogo.svg"

const { Search } = Input

export const DesktopMenu = (props) => {
  const slugAndTextList = [["glossary", "Glossary"]]
  const [options, setOptions] = useState<SelectProps<object>["options"]>([])
  const [query, setQuery] = useState('');
  let data = props.data;

  const onClick = (e, { key }) => {
    navigate(`/${key}`)
  }

  const getStep = (slug, level) => {
    let foundArticle = props.steps.find(a => a.name.toLowerCase() === slug.toLowerCase());
    console.log(foundArticle)
    if (foundArticle) {
      return `step ${foundArticle.step}`;
    } else {
      return level;
    }
  }

  const searchTermsResult = (query: string, data) => {
    return data.allStrapiTerm.nodes
      .filter((term) => {
        return term.name.toLowerCase().includes(query.toLowerCase())
      })
      .map((term, i) => {
        return {
          value: term.name.concat(` ${term.term_type !== null ? term.term_type.name : ''}`),
          label: (
            <StyledElSearch
              key={`term__${i}`}
              onClick={async (value) => {
                await navigate("/search", {
                  state: { search: term.name.toLowerCase() },
                })
              }}
            >
              <StyledAutocompleteRowWithPadding>
                <Col span={6}></Col>
                <Col span={18}>
                  <span>{term.name}</span>
                </Col>
              </StyledAutocompleteRowWithPadding>
            </StyledElSearch>
          ),
        }
      })
  }

  const searchArticleResult = (query: string, data) => {
    return data.allStrapiArticle.nodes
      .filter((article) => {
        return article.title.toLowerCase().includes(query.toLowerCase())
      })
      .map((article, i) => {
        console.log(props.steps.find(a => a.name.toLowerCase() === article.title.toLowerCase()));
        return {
          value: article.title,
          label: (
            <StyledElSearch
              key={`article__${i}`}
              onClick={async (value) => {
                await navigate("/search", {
                  state: { search: article.title.toLowerCase() },
                })
              }}
            >
              <StyledAutocompleteRowWithPadding>
                <Col span={6}></Col>
                <Col span={18}>
                  <StyledAutocompleteRow>
                    <Col span={24}>{article.title}</Col>
                    <Col span={24}>
                      <StyledArticleLevelSearch>
                      {getStep(article.slug, article.level.name)}
                      </StyledArticleLevelSearch>
                    </Col>
                  </StyledAutocompleteRow>
                </Col>
              </StyledAutocompleteRowWithPadding>
            </StyledElSearch>
          ),
        }
      })
  }

  const handleSearch = (value: string) => {
    let terms = searchTermsResult(value, data)
    let articles = searchArticleResult(value, data)
    let titleAndTerms = []
    let titleAndArticles = []
    if (terms.length > 0) {
      titleAndTerms = [
        {
          value: "Glossary",
          label: (
            <StyledTitleSearch>
              <span>Glossary</span>
            </StyledTitleSearch>
          ),
        },
      ]
      terms = [titleAndTerms[0]].concat(terms)
    }
    if (articles.length > 0) {
      titleAndArticles = [
        {
          value: "Articles",
          label: (
            <StyledTitleSearch>
              <span>Articles</span>
            </StyledTitleSearch>
          ),
        },
      ]
      articles = [titleAndArticles[0]].concat(articles)
    }
    setOptions(value ? terms.concat(articles) : [])
  }

  const onKeyDown = (e) => {
    console.log('onKeyDown', e, e.target.value);
  }

  return (
    <StyledMainMenu mode="horizontal">
      <StyledMenuItemWithoutBorder style={{ marginLeft: 0, paddingLeft: 0 }}>
        <StyledLogoLink to="/">
          <img src={academy} alt={"AcademyNow"} style={{ width: "205px" }} />
        </StyledLogoLink>
      </StyledMenuItemWithoutBorder>

      <StyledMenuItemWithoutBorder
        key="search"
        style={{ flexGrow: 4, textAlign: "center" }}
      >
        <StyledAutocomplete
          dropdownMatchSelectWidth={252}
          options={options}
          onSearch={handleSearch}
        >
          <Input
            suffix={<SearchOutlined />}
            size="large"
            placeholder="Search for anything..."
            onPressEnter={async (e) => {
              await navigate("/search", {
                state: { search: e.target.value },
              })
            }}
          />
        </StyledAutocomplete>
      </StyledMenuItemWithoutBorder>

      {slugAndTextList.map(([slug, text]) => (
        <StyledMenuItem
          key={slug}
          style={{ float: "right", borderBottom: "none" }}
        >
          <StyledLink to={`/${slug}`}>{text}</StyledLink>
        </StyledMenuItem>
      ))}

      <StyledMenuItemWithoutBorder style={{ marginRight: 0, paddingRight: 0 }}>
        <Link target="_blank" to="https://changenow.io/">
          <ChangeNowLogo src={changeNow} alt="Change Now logo" width={105} />
        </Link>
      </StyledMenuItemWithoutBorder>
    </StyledMainMenu>
  )
}

const StyledAutocompleteRowWithPadding = styled(Row)`
  width: 100%;
  padding-bottom: 20px;
`

const StyledAutocompleteRow = styled(Row)`
  width: 100%;
`

const StyledAutocomplete = styled(AutoComplete)`
  background: ${({ theme }) => theme.color.blue.light};
  width: 365px;
  height: 45px;
  & .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${({ theme }) => theme.color.blue.lighter};
  }
  & .ant-input-affix-wrapper {
    flex-direction: row-reverse;
  }

  & .ant-input-suffix {
    margin-left: 10px;
    margin-right: 10px;
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border: none;
  }

  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal
    > .ant-menu-submenu-selected{
      border: none;
      box-shadow: none;
      color: ${({ theme }) => theme.color.gray.regular}
    }
    .ant-menu-horizontal
    > .ant-menu-item:hover {
    color: ${({ theme }) => theme.color.gray.regular} !important;
  }

  .ant-menu-horizontal > .ant-menu-item-active {
    color: ${({ theme }) => theme.color.gray.regular} !important;
  }

  .ant-input-affix-wrapper:hover {
    border: none;
    box-shadow: none;
  }

  .ant-input {
    align-self: center;
    &::placeholder {
      color: ${({ theme }) => theme.color.gray.regular};
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &:focus{
		box-shadow: none;
	}
  }

  .ant-input-affix-wrapper:focus {
    border: none;
    box-shadow: none;
  }

  & .anticon {
    font-size: 18px;
  }

  & .ant-input-search-icon {
    color: white;
    padding-left: 5px;
  }

  & .ant-input-affix-wrapper {
    height: 45px;
  }
`


const StyledArticleLevelSearch = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.gray.regular};
  display: flex;
  flex-direction: flex-start;
`

const StyledTitleSearch = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.gray.regular};
  display: flex;
  flex-direction: flex-start;
`

const StyledElSearch = styled.div`
  color: white;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  justify-content: flex-start;
`

const StyledLogoLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
`

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
