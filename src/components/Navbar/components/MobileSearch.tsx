import { List, Menu } from "antd"
import * as React from "react"
import { Row, Col } from "antd"
import { Input, AutoComplete } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

import { Logos } from "./Logos"

export const MobileSearch = (props) => {
  let data = props.data
  const [options, setOptions] = useState<SelectProps<object>["options"]>([])

  // useEffect(() => {
  // 	const [selectedSlug] = items.find(([slug]) => pathname.includes(slug)) || [''];
  // 	setSelectedKeys(selectedSlug);
  // }, []);
  const searchTermsResult = (query: string, data) => {
    return data.allStrapiTerm.nodes
      .filter((term) => {
        return term.name.toLowerCase().includes(query.toLowerCase())
      })
      .map((term, i) => {
        console.log(term, query)
        return {
          value: term.name,
          label: (
            <StyledElSearch
              key={`term__${i}`}
              onClick={async (value) => {
                await navigate("/search", {
                  state: { search: term.name.toLowerCase() },
                })
              }}
            >
              <StyledAutocompleteRow>
                <Col span={6}></Col>
                <Col span={18}>
                  <span>{term.name}</span>
                </Col>
              </StyledAutocompleteRow>
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
              <StyledAutocompleteRow>
                <Col span={6}></Col>
                <Col span={18}>
                  <StyledAutocompleteRow>
                    <Col span={24}>{article.title}</Col>
                    <Col span={24}>
                      <StyledArticleLevelSearch>
                        {article.level.name}
                      </StyledArticleLevelSearch>
                    </Col>
                  </StyledAutocompleteRow>
                </Col>
              </StyledAutocompleteRow>
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
    let result
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
      result = [titleAndArticles[0]].concat(articles)
    }
    setOptions(value ? terms.concat(result) : [])
  }

  return (
    <List>
      <StyledSearch
        placeholder="Search for anything..."
        onSearch={async (value) => {
          await navigate("/search", { state: { search: value } })
          props.onClose()
        }}
      />
      <Moto>Everything you need to know about the world of crypto</Moto>
    </List>
  )
}

const Moto = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  color: white;
  padding-top: 1rem;
`

const StyledAutocompleteRow = styled(Row)`
  width: 100%;
`

const StyledSearch = styled(Input.Search)`
  width: 100%;
  height: 50px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  margin-bottom: 1.5rem;
  border-color: ${({ theme }) => theme.color.blue.light};

  .ant-input-search:not(.ant-input-search-enter-button) {
    padding-right: 0;
    padding-left: 0;
  }

  .ant-input-suffix {
    display: none;
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
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.color.gray.regular};
  }
  .ant-menu-horizontal > .ant-menu-item:hover {
    color: ${({ theme }) => theme.color.gray.regular} !important;
  }

  .ant-menu-horizontal > .ant-menu-item-active {
    color: ${({ theme }) => theme.color.gray.regular} !important;
  }

  .ant-input {
    height: 70%;
    align-self: center;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.blue.light};
    &::placeholder {
      color: ${({ theme }) => theme.color.gray.regular};
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &:focus {
      box-shadow: none;
    }
  }

  &.ant-input-affix-wrapper:hover, &.ant-input-affix-wrapper:focus {
    border: none;
    box-shadow: none;
  }

  &.ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right: none;
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
  .ant-select-selector {
    height: 100%;
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

const LogosItemsStyled = styled(List.Item)`
  padding-left: 0;
  padding-top: 0;
  border-bottom: 0;
`

const SectionName = styled.p`
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #ffffff;
  line-height: 2;
  font-weight: lighter;
  opacity: 0.6;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-top: 15px;
    margin-bottom: 5px;
  }
`

const StyledHref = styled.a`
  font-size: 18px;
  display: block;
  color: #ffffff;
  line-height: 2;
  font-weight: lighter;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 5px;
  }
`
