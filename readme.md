# Frame Example

This is an example demo of a button to show how framejs works.
[Demo](https://emolr.github.io/frame-example/)

## Installation
_Just serves as example, it's not actually on npm_

```sh
$ npm install frame-example --save
```

### Use bundled es6
```html
<script src="node_modules/frame-example/frame-button.bundle.js"></script>
```

### Use vanilla es6
```html
<script type="module" src="node_modules/frame-example/frame-button.js"></script>
```

### Use with module bundling eg. webpack and angular cli
_Make sure this code runs before usage_

```javascript
  @import 'frame-example';
```

## Usage

<!--
```
<custom-element-demo height="100px">
  <template>
    <script src="frame-button.bundle.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<frame-button onclick="alert('Button clicked')">Button</frame-button>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

This component only serves as an example component, and is not available on npm.

## Credits

All my friends

## License

MIT Licence