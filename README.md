# Polymer Lit-Elements

Esto es una demo del uso de los componentes web nativos utilizando Lit-Elements

### Instalaciones Necesarias
npm i -g polymer-cli

### Iniciando el proyecto
npm init -y
npm i lit-element
npm install lit-element-router --save

crear carpeta src
crear index.html en la raiz
crear src/index.js




``
import { LitElement, html } from 'lit-element'

export class Footer extends LitElement {

    static get properties(){
        return {
            titulo: { type: String },
            ans: { type: Number }
        }
    }

    render(){
        return html `
        <style>
        .copy {
            background: linear-gradient(to right, rgba(197,77,170,1) 0%, rgba(27,113,214,1) 100%);
            font-size: 15px;
            text-align: center;
            color: #C9BADD;
            
        }
        
        .copy p {
            padding: 30px 0;
            margin: 0;
        }

        </style>

        <section class="copy">
            <div class="overlay">
                <div class="wrapper">
                    <p>Copyright © ${this.ans} ${this.titulo}</p>
                </div>
            </div>
        </section>
        `
    }
    constructor(){
        super();
        this.ans = new Date().getFullYear();
    }
}
customElements.define('footer-element', Footer)
``



polymer serve

Para que pueda funcionar correctamente en todos los navegadores es necesario instalar los polyfills
npm install @webcomponents/webcomponentsjs

Esta parte va en el index.html
<!-- load webcomponents bundle, which includes all the necessary polyfills -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
