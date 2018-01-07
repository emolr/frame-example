!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.frameButton={})}(this,function(n){"use strict";const t=document.createElement("template");t.innerHTML="\n    <style>\n        :host {\n  display: inline-block;\n}\n\n:host button {\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 3px;\n  font-size: 14px;\n  font-family: sans-serif;\n  min-width: 80px;\n  padding: 8px 16px;\n  color: var(--button-color, #2a2a2a);\n  background: var(--button-bg, #fff);\n  -webkit-transition: -webkit-box-shadow 0.2s ease-in-out;\n  transition: -webkit-box-shadow 0.2s ease-in-out;\n  transition: box-shadow 0.2s ease-in-out;\n  transition: box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;\n  -webkit-box-shadow: 0 0px 16px transparent;\n          box-shadow: 0 0px 16px transparent;\n}\n\n:host button:focus {\n  outline: none;\n  background: var(--button-hover-bg, #f0f0f0);\n}\n\n:host button:hover {\n  -webkit-box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lLWJ1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCO0NBcUJ0Qjs7QUF0QkQ7RUFHSSx5QkFBd0I7RUFDeEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixvQ0FBbUM7RUFDbkMsbUNBQWtDO0VBQ2xDLHdEQUF1QztFQUF2QyxnREFBdUM7RUFBdkMsd0NBQXVDO0VBQXZDLDZFQUF1QztFQUN2QywyQ0FBdUM7VUFBdkMsbUNBQXVDO0NBUXhDOztBQXJCSDtFQWVNLGNBQWE7RUFDYiw0Q0FBMkM7Q0FDNUM7O0FBakJMO0VBbUJNLGtEQUF5QztVQUF6QywwQ0FBeUM7Q0FDMUMiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLCAjMmEyYTJhKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcsICNmZmYpO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiAwIDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJnLCAjZjBmMGYwKTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n    </style>\n    <button>\n        <slot></slot>\n    </button>\n",window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,"frame-button");class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}}customElements.define("frame-button",o),n.FrameButton=o,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=frame-button.module.js.map
