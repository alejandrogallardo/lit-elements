import { LitElement, html } from 'lit-element'
import { routerLinkMixin } from 'lit-element-router'

export class Link extends routerLinkMixin(LitElement) {
    static get properties() {
        return {
            href: { type: String }
        };
    }
    constructor() {
        super();
        this.href = '';
    }
    render() {
        return html`
        <style>
        a {
            text-decoration: none;
            color: #fff;
            margin-left: 30px;
            font-weight: 600; 
        }
        </style>

            <a href='${this.href}' @click='${this.linkClick}'><slot></slot></a>
        `;
    }
    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}

customElements.define('app-link', Link);