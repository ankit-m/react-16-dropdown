react-16-dropdown
=================
A zero-dependency, lightweight and fully cuztomizable dropdown (not select) for React.
--------------------------------------------------------------------------------------

# Installation

```shell
npm install --save react-16-dropdown
```

# Basic usage

```javascript
const options = [{
  label: 'Prestige 🎩',
  value: 'prestige',
}, {
  label: 'Inception 😴',
  value: 'inception',
}];

<Dropdown
  align='left'
  className='custom-classname'
  closeOnEscape={true}
  options={options}
  triggerLabel='Movies 🍿'
  onClick={val => console.log(val)}
/>
```

# Supported props

|Name|Default|Allowed values|Description|
|----|------|------|---|
|align|left|left, right|Decides the alignment of the menu w.r.t trigger|
|className|''|`String`|Adds the given class to the topmost dropdown element|
