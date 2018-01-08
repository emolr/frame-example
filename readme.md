# Frame Button

This is an example demo of a button to show how framejs works.
[Demo](https://emolr.github.io/frame-example/)

| | |
| --- | --- |
| `Install` | npm install @framejs/frame-button |
| `Npm` | [@framejs/frame-button](https://www.npmjs.com/package/@framejs/frame-button) |
| `Source` | [Github](https://www.npmjs.com/package/@framejs/frame-button) |
| `ES6` | [unpkg.com](https://www.npmjs.com/package/@framejs/frame-button) |
| `Bundle` | [unpkg.com](https://www.npmjs.com/package/@framejs/frame-button) |
| `UMD` | [unpkg.com](https://www.npmjs.com/package/@framejs/frame-button) |

---

## Usage

Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as stand-alone action triggers.
Button also exports a button-group component to make it easy to display multiple buttons together.

<!--
```
<custom-element-demo height="80px">
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

## Props

**theme** : `string` = "default"

The base theme

---

## Custom Properties

| | | |
| --- | --- | ---: |
| `--button-color` |  The default font color | `#2a2a2a` |
| `--button-bg` |  The default background color | `#fff` |
| `--button-hover-bg` | The default background color on hover | `#f0f0f0` |

---

## How to load script
```html
<!-- In HTML without native module loading -->
<script src="@framejs/frame-button/dist/frame-button.bundle.js"></script>

<!-- In HTML with native module loading -->
<script type="module" src="@framejs/frame-button/dist/frame-button.js"></script>

<!-- In JS with module bundler -->
@import '@framejs/frame-button'
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Credits

All my friends

## License

MIT Licence