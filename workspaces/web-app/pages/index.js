import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const headerStyles = css`
  font-size: 20px;
`

const H1 = styled.h1`
  ${headerStyles};
  color: ${props => props.color};
`

export default () => <H1 color='#ff80c3'>Welcome to next.js!</H1>
