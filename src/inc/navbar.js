import { LitElement, html } from 'lit-element'
import { routerMixin } from 'lit-element-router'

import '../app-link';
import '../app-main';

export class Navbar extends routerMixin(LitElement) {

    static get properties() {
        return {
          route: { type: String },
          params: { type: Object },
          titulo: { type: String }
        }
      }
    
      static get routes() {
        return [{
          name: 'home',
          pattern: '',
          data: { title: 'Home' }
        }, {
          name: 'about',
          pattern: 'about',
          data: { title: 'About' }
        }, {
          name: 'services',
          pattern: 'services',
          data: { title: 'Services' }
        }, {
          name: 'contact',
          pattern: 'contact',
          data: { title: 'Contact' }
        }, {
          name: 'not-found',
          pattern: '*'
        }];
      }
    
      constructor() {
        super();
        this.route = '';
        this.params = {};
      }

      onRoute(route, params, query, data) {
        this.route = route;
        this.params = params;
        console.log(route, params, query, data)
      }
    static get properties(){
        return {
            titulo: { type: String }
        }
    }

    render(){
        return html `
        <style>
        .wrapper {
            width: 90%;
            margin: auto;
            max-width: 1280px;
            overflow: hidden;
        }
        .menu {
            background: linear-gradient(to right, rgba(197,77,170,1) 0%, rgba(27,113,214,1) 100%);
            width: 100%;
        }
        
        h1 {
            color: #fff;
            float: left;
        }
        
        nav {
            float: right;
            margin-top: 20px;
            transition: 1s;
        }
        
        nav ul li {
            display: inline-block;
        }
        </style>
      
        
        <div class="menu">
            <div class="wrapper">
                <h1>${ this.titulo }</h1>
                <nav>
                    <ul>
                        <li><app-link href="/">HOME</app-link></li>
                        <li><app-link href="/about">ABOUT</app-link></li>
                        <li><app-link href="/services">SERVICES</app-link></li>
                        <li><app-link href="/contact">CONTACT</app-link></li>
                    </ul>
                </nav>
            </div>
        </div>
           
        <app-main current-route=${this.route}>
            <home-element route='home'></home-element>
            <about-element route='about'></about-element>
            <services-element route='services'></services-element>
            <contact-element route='contact'></contact-element>
            <h1 route='not-found'>Not Found</h1>
        </app-main>
       
        `
    }
}
customElements.define('navbar-element', Navbar)
