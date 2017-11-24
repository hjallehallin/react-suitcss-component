# React SuitCSS Component
Create JSX Components with [SuitCSS][sc] classNames

## Installation
```npm install react-suitcss-component```

or

```yarn add react-suitcss-component```

## Usage

Create your component

```jsx
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
```jsx
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

### Properties

#### Props for Component
- **component** (*required*)
  - Type: `string`
  - The name of the component. Will generate class `MyComponent`
- **modifier** (*optional*)
  - Type: `string`
  - Space separated list of modifiers to the component.
  - `modifier='awesome'` will generate class `MyComponent--awesome`
- **u** (*optional*)
  - Type: `string`
  - Space separated list of utility classes.
  - `u='centerText'` will generate class `u-centerText`
- **is** (*optional*)
  - Type: `string`
  - Space separated list of state classes.
  - `is='active inFocus'` will generate classes `is-active is-inFocus`
- **Element** (*optional*)
  - Type: `string`
  - Default: `div`
  - The html tag for the component.
  - `Element='button'` will generate `<button className='MyComponent'>`
- `{...props}`
  - Pass other props, like colSpan or title to the element

#### Props for generated component
- **modifier** (*optional*)
  - Type: `string`
  - Space separated list of modifiers to the component.
  - `modifier='awesome'` will generate class `MyComponent--awesome`
- **u** (*optional*)
  - Type: `string`
  - Space separated list of utility classes.
  - `u='centerText'` will generate class `u-centerText`
- **is** (*optional*)
  - Type: `string`
  - Space separated list of state classes.
  - `is='active inFocus'` will generate classes `is-active is-inFocus`
- `{...props}`
  - Pass other props, like colSpan or title to the rootelement

## Examples

See more examples in `examples/`

## Changelog

0.1.0
 - Initial release

## Todo
 - Add more examples
 - Add tests
 - Add support for is-state as attributes. `<MyComponent isActive>`

[sc]: https://suitcss.github.io

