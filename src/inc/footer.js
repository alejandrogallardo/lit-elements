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
