import { LitElement, html } from 'lit-element'

export class Contact extends LitElement {

    render(){
        return html `
        <style>
        #contact {
            padding: 70px 0;
            background: #F6F6F6;
        }
        
        #contact h2 {
            text-align: center;
            font-weight: 400;
            font-size: 36px;
            color: #777777;
            padding-top: 40px;
            margin-bottom: 20px;
        }
        
        #contact hr {
            height: 2px;
            width: 70px;
            text-align: center;
            position: relative;
            background: #C54DAA;
            margin: 0 auto;
            margin-bottom: 25px;
            border: 0;
        }
        
        #contact p {
            font-weight: 300;
            text-align: center;
            margin-bottom: 80px;
        }
        
        form {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 55%;
            margin: auto;
        }
        
        input[type="text"] {
            width: 49%;
            padding: 6px 5px;
            border: 0;
            border: 1px solid #CCCCCC;
            font-size: 15px;
        }
        
        textarea {
            width: 100%;
            border: 0;
            padding: 6px 6px;
            border: 1px solid #CCCCCC;
            margin-top: 15px;
            font-size: 15px;
            padding-bottom: 45px;
        }
        
        input[type="submit"] {
            background: #C54DAA;
            border: 0;
            padding: 15px 20px;
            color: #fff;
            font-size: 15px;
            margin: auto;
            margin-top: 30px;
            border-top: 3px solid #B73C9B;
        }
        
        .socialmedia ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            list-style: none;
        }
        
        .socialmedia i {
            color: #C54DAA;
            font-size: 27px;
            width: 50px;
            margin: 0 10px;
            margin-top: 100px;
        }
        </style>

        <section id="contact">
		<div class="wrapper">
			<h2>GET IN TOUCH</h2>
			<hr>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
			<form action="#">
				<input type="text" placeholder="Name">
				<input type="text" placeholder="Email">
				<textarea placeholder="Message"></textarea>
				<input type="submit" value="SEND MESSAGE">
			</form>

			<div class="socialmedia">
				<ul>
				<li><i class="fa fa-facebook"></i></li>
				<li><i class="fa fa-twitter"></i></li>
				<li><i class="fa fa-google-plus"></i></li>
				<li><i class="fa fa-linkedin"></i></li>
				</ul>
			</div>
		</div>
	</section>
        `
    }
    
}
customElements.define('contact-element', Contact)