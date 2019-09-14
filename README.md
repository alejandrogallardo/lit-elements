# Polymer Lit-Elements

Esto es una demo del uso de los componentes web nativos utilizando Lit-Elements

### Instalaciones Necesarias
npm i -g polymer-cli

### Iniciando el proyecto
npm init -y

npm i lit-element

npm install lit-element-router --save

crear carpeta src y dentro las demas sub carpetas

crear index.html en la raiz

crear src/index.js o app.js que son los que van a contener todos los archivos

#### Componente base
```
import { LitElement, html } from 'lit-element'

export class Footer extends LitElement {

    render(){
        return html `
        <style>
        h1 {
            color: peru;
           } 
        </style>

        <h1>Hola Mundo</h1>
        `
    }
    
}
customElements.define('footer-element', Footer)
```

#### Para correr el servidor
polymer serve

**Para que pueda funcionar correctamente en todos los navegadores es necesario instalar los polyfills**

npm install @webcomponents/webcomponentsjs

Esta parte va en el index.html
<!-- load webcomponents bundle, which includes all the necessary polyfills -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
