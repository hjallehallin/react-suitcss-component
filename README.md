# react-suitcss-component
Create JSX Components with SuitCSS classNames

## Installation
`npm install react-suitcss-component`
or
`yarn add react-suitcss-component`

## Usage

Create your component

```javascript
// MyComponent/index.js
import React from 'react'
import Component from 'react-suitcss-component'

export default (props) => {
  return (
    <Component
      component='MyComponent'
      {...props}
      >
      {props.children}
    </Component>
  )
}
```

Some react view
```javascript
import MyComponent from 'components/MyComponent'
...
render() {
  return (
    <div>
      Look at my component:
      <MyComponent modifier='glowing' is='active' u='textCenter'>
        <p>This is my awesome glowing component</p>
      </MyComponent>
    </div>
  )
}
...

```

Output

```jsx
  <div>
    Look at my component:
    <div className='MyComponent MyComponent--glowing is-active u-textCenter'>
      <p>This is my awesome glowing component</p>
    </div>
  </div>

```

## Examples

See more examples in `examples/`