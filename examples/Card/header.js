import React from 'react'
import Component from 'react-suitcss-component'
import './styles.css'

export default (props) => {
  return (
    <Component
      component='Card-header'
      Element='h3'
      {...props}>
      {props.children}
    </Component>
  )
}
