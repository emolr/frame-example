var frameButton=function(n){"use strict";const t=document.createElement("template");t.innerHTML="\n    <style>\n        :host {\n  display: inline-block;\n}\n\n:host button {\n  -webkit-appearance: none;\n  border-radius: 3px;\n  font-size: 14px;\n  font-family: sans-serif;\n  min-width: 80px;\n  padding: 8px 16px;\n  color: var(--button-color, #30343a);\n  background: var(--button-bg, rgba(9, 30, 66, 0.04));\n  -webkit-transition: all 0.1s ease-in-out;\n  transition: all 0.1s ease-in-out;\n  border: none;\n}\n\n:host button:focus {\n  outline: none;\n  background: var(--button-hover-bg, rgba(9, 30, 66, 0.07));\n}\n\n:host button:hover {\n  background: var(--button-hover-bg, rgba(9, 30, 66, 0.07));\n}\n\n:host button:active {\n  -webkit-transition: all 0.05s ease-in-out;\n  transition: all 0.05s ease-in-out;\n  background: var(--button-active-bg, rgba(74, 134, 238, 0.187));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLWJ1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCO0NBMEJ0Qjs7QUEzQkQ7RUFHSSx5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG9DQUEwQztFQUMxQyxvREFBbUQ7RUFDbkQseUNBQWdDO0VBQWhDLGlDQUFnQztFQUNoQyxhQUFZO0NBY2I7O0FBMUJIO0VBZU0sY0FBYTtFQUNiLDBEQUF5RDtDQUMxRDs7QUFqQkw7RUFtQk0sMERBQXlEO0NBQzFEOztBQXBCTDtFQXVCTSwwQ0FBaUM7RUFBakMsa0NBQWlDO0VBQ2pDLCtEQUE4RDtDQUMvRCIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcixyZ2IoNDgsIDUyLCA1OCkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZywgcmdiYSg5LCAzMCwgNjYsIDAuMDQpKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJnLCByZ2JhKDksIDMwLCA2NiwgMC4wNykpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iZywgcmdiYSg5LCAzMCwgNjYsIDAuMDcpKTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXMgZWFzZS1pbi1vdXQ7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYWN0aXZlLWJnLCByZ2JhKDc0LCAxMzQsIDIzOCwgMC4xODcpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n    </style>\n    <button>\n        <slot></slot>\n    </button>\n",window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,"frame-button");class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}}return customElements.define("frame-button",i),n.FrameButton=i,n}({});
//# sourceMappingURL=frame-button.bundle.js.map