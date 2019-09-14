import { LitElement, html } from 'lit-element'

import './inc/footer'
import './inc/navbar'
import './pages/home'
import './pages/about'
import './pages/services'
import './pages/contact'

class MyApp extends LitElement {

  render() {
    return html`
    <navbar-element titulo="Alejandro"></navbar-element>
    
    <footer-element titulo="Alejandro" ></footer-element>
    `
  }
  
}

customElements.define('my-app', MyApp);