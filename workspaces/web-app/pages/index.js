import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  props => ({ color: props.color })
)

export default () => <H1 color="#ff80c3">Welcome to next.js!</H1>
