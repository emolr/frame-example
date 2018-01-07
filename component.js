export class MyComponent extends HTMLElement {
    constructor() {
        super();
        console.log('super');
    }
}
customElements.define('my-component', MyComponent);

//# sourceMappingURL=component.js.map
