# Frame Button

This is an example demo of a button to show how framejs works.
[Demo](https://emolr.github.io/frame-example/)

<dl>
  <dt>Install</dt>
  <dd>npm install @framejs/frame-button</dd>

  <dt>Npm</dt>
  <dd><a href="https://www.npmjs.com/package/@framejs/frame-button">@framejs/frame-button</a></dd>

  <dt>Source</dt>
  <dd><a href="https://www.github.com/">Github</a></dd>

  <dt>ES6</dt>
  <dd><a href="https://www.github.com/">unpkg.com</a></dd>

  <dt>Bundle (ES6)</dt>
  <dd><a href="https://www.github.com/">unpkg.com</a></dd>

  <dt>UMD (ES6)</dt>
  <dd><a href="https://www.github.com/">unpkg.com</a></dd>
</dl>

---

## Usage

Buttons are used as triggers for actions. They are used in forms, toolbars, dialog footers and as stand-alone action triggers.
Button also exports a button-group component to make it easy to display multiple buttons together.

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