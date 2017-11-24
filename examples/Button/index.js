import React from 'react'
import Component from 'react-suitcss-component'
import './styles.css'

export const Button = (props) => {
  return (
    <Component
      component='Button'
      Element='button'
      {...props}>
      {props.children}
    </Component>
  )
}
