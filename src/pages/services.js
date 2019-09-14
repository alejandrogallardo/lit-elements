import { LitElement, html } from 'lit-element'

export class Services extends LitElement {

    render(){
        return html `
        <style>
        #services {
            padding: 70px 0;
        }
        
        #services h2 {
            text-align: center;
            font-weight: 400;
            font-size: 36px;
            color: #777;
            margin-bottom: 20px;
        }
        
        #services hr {
            height: 2px;
            width: 70px;
            text-align: center;
            position: relative;
            background: #C54DAA;
            margin: 0 auto;
            margin-bottom: 20px;
            border: 0;
        }
        
        #services p {
            font-weight: 300;
            text-align: center;
            margin-bottom: 50px;
        }
        
        #services .wrapper-services {
            display: flex;
        }
        
        #services .wrapper-services ul {
            list-style: none;
            text-align: center;
        }
        
        #services .wrapper-services ul li:nth-child(1) {
            background: #C54DAA;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            color: #fff;
            font-size: 38px;
            text-align: center;
            padding: 25px 0;
            margin: auto;
            margin-bottom: 20px;
        }
        
        #services .wrapper-services ul li:nth-child(2) {
            color: #C54DAA;
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
        }
        
        #services .wrapper-services ul li:nth-child(3) {
            font-weight: 300;
            font-size: 15px;
            line-height: 22px;
        }
        </style>

        <section id="services">
		<div class="wrapper">
			<h2>OUR SERVICES</h2>
			<hr>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
			<div class="wrapper-services">
				<ul>
					<li><i class="fa fa-comments"></i></li>
					<li>LOREM IPSUM</li>
					<li>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</li>
				</ul>
				<ul>
					<li><i class="fa fa-bullhorn"></i></li>
					<li>DOLOR SIT AMET</li>
					<li>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</li>
				</ul>
				<ul>
					<li><i class="fa fa-group"></i></li>
					<li>TEMPUS ELEIFEND</li>
					<li>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</li>
				</ul>
				<ul>
					<li><i class="fa fa-magic"></i></li>
					<li>PELLENTESQUE</li>
					<li>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</li>
				</ul>
			</div>
		</div>
	</section>
        `
    }
    
}
customElements.define('services-element', Services)