import { LitElement, html } from 'lit-element'

export class Home extends LitElement {

    render(){
        return html `
        <style>
        #about {
            padding: 70px 0;
            background: #F6F6F6;
        }
        
        #about h2 {
            text-align: center;
            font-weight: 400;
            font-size: 36px;
            color: #777;
        }
        
        #about hr {
            height: 2px;
            width: 70px;
            text-align: center;
            position: relative;
            background: #C54DAA;
            margin: 0 auto;
            margin-bottom: 50px;
            border: 0;
        }
        
        .content {
            display: flex;
            justify-content: space-around;
        }
        
        .text {
            width: 600px;
            margin-left: -80px;
        }
        
        .text h3 {
            font-weight: 400;
            color: #C54DBA;
            margin-bottom: 40px;
        }
        
        .text p {
            font-weight: 300;
            margin-bottom: 30px;
        }
        </style>

        <section id="about">
		<div class="wrapper">
			<h2>Home Page</h2>
			<hr>
			<div class="content">
				<div class="foto"><img src="img/about.png" alt=""></div>
				<div class="text">
					<h3>Lorem ipsum dolor sit amet!</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
				</div>
			</div>
		</div>
	</section>
        `
    }
    
}
customElements.define('home-element', Home)