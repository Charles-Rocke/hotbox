import { useState } from 'react';
import '../assets/css/default.css';
import Button from './Button.jsx';


// Form component
function Form() {
	// control state over input fields
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	
	// form submission handle
	/* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "waitlist v1", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

	return (
		<section className="py-md-0 bg-hero" id="home">
			<div className="container">
				<div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
					
					<form name="waitlist v1" method="POST" data-netlify="true">
						
						<input type="hidden" name="waitlist v1" value="waitlist v1" />
						
						<div className="mb-3 label-div">
							<label htmlFor="name" className="form-label">Your name</label>
							<input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="email" className="form-label">Email address</label>
							<input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="city" className="form-label">Your City</label>
							<input id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your city" />
						</div>
						
						<Button type="submit" onClick={handleSubmit}>
							Join waitlist
							<em className="ml-2"></em>
						</Button>
						
					</form>
				</div>
			</div>
		</section>
	)
}

export default Form;