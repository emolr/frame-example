export class MyComponent extends HTMLElement {
    constructor() {
        super();
        console.log('Hello')
    }
}

customElements.define('my-component', MyComponent)