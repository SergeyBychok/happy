import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IWrap {
  customColor?: boolean
  isDisabled?: boolean
}

export const Wrap = styled.div<IWrap>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  max-width: 1442px;
  height: 90px;
  background-image: url(${require('@assets/images/header_bg.svg').default});
`

export const Anchor = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 45px;
  color: #ffffff;
`
