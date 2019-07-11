## Install
`$ npm install FellGill/node-snapcode-creator` or `yarn add FellGill/node-snapcode-creator`

## Usage (in code)
```
var snapcode = require('node-snapcode-creator');
```
```
snapcode.create(name: string, type: string, function(res) {
	console.log(res);
})
```

## Examples
```
var snapcode = require('node-snapcode-creator');

snapcode.create("blablabla", "SVG", function(res) {
	console.log(res); // Return SVG object
})
```
