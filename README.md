[npm-badge]: https://img.shields.io/npm/v/rn-amf-fields.svg?colorB=ff6d00
[npm-url]: https://npmjs.com/package/rn-amf-fields
[travis-badge]: https://api.travis-ci.org/amarthaid/rn-amf-fields.svg?branch=master
[travis-url]: https://travis-ci.org/amarthaid/rn-amf-fields?branch=master

# Amf Fields

[![npm][npm-badge]][npm-url]
[![travis][travis-badge]][travis-url]
[![Coverage Status](https://coveralls.io/repos/github/amarthaid/rn-amf-fields/badge.svg)](https://coveralls.io/github/amarthaid/rn-amf-fields)
[![Known Vulnerabilities](https://snyk.io/test/github/amarthaid/rn-amf-fields/badge.svg)](https://snyk.io/test/github/amarthaid/rn-amf-fields)


## Usage


```
import React, { Component } from "react"
import { AmfField } from "rn-amf-fields"
import { View } from "react-native"

const selectOptions = [{
  label: "Javascript",
  value: "js"
}, {
  label: "Golang",
  value: "go"
}]

class MyComponent extends Component {
  contructor() {
    super()

    this.state = {
      name: "Budi",
      code: "js"
    }
  }

  render() {
    return (
      <View>
        <AmfField
          type="text"
          label="Name"
          value={this.state.name}
          onChange={(val) => this.setState({name: val})}
        />
        <AmfField
          type="select"
          label="Code"
          value={this.state.code}
          onChange={(val) => this.setState({code: val})}
          options={selectOptions}
        />
      </View>
    )
  }
}
```

## Development

Still dont know what the best of this one

But usualy I git to this folder from examples's node_modules

```
cd examples/simple/
react-native eject 
git clone ../../ node_modules/rn-amf-fields
cd node_modules/rn-amf-fields
sed -i "s/dist/src/" index.js
```

Make some modification in src. And then after finish..

```
git push origin
cd ../../../../
npm version patch
```

Be Carefule with npm version patch,
It will run
```
npm run preversion
npm run version
npm run postversion
```

And postversion will run

```
npm publsih
```

That will publish this library
