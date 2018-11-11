import React from 'react'
import styled, { hydrate } from 'react-emotion'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids)
}

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

export default () => <H1 color='#ff80c3'>Welcome to next.js!</H1>
