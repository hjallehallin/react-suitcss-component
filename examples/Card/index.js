import React from 'react'
import Component from 'react-suitcss-component'
import './styles.css'
export { default as CardBody } from './body'
export { default as CardHeader } from './header'

export const Card = (props) => {
  return (
    <Component
      component='Card'
      {...props}>
      {props.children}
    </Component>
  )
}
