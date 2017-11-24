/**
 * Create SuitCSS components
 *
 * Generates className based on component name,
 * modifier, utility (u), and state-classes (is)
 *
 * Default html element is div, but can be changed
 * i.e <table> or <form>
 *
 */

import React from 'react'

export default (props) => {
  const {
    component,
    children,
    modifier = '',
    u = '',
    is = '',
    Element = 'div',
    ...other
   } = props
  const classNames = [component]

  if (modifier) {
    modifier.split(' ').forEach((m) => {
      classNames.push(`${component}--${m}`)
    })
  }
  if (u) {
    u.split(' ').forEach(ut => {
      classNames.push(`u-${ut}`)
    })
  }
  if (is) {
    is.split(' ').forEach(state => {
      classNames.push(`is-${state}`)
    })
  }

  return (
    <Element {...other} className={classNames.join(' ')}>
      {children}
    </Element>
  )
}
