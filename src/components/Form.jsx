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
	function handleSubmit(e) {
		e.preventDefault();
		setEmail("");
		setName("");
		setCity("");

		// if (!bill || !paidByUser) return;
		// onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
		// console.log(whoIsPaying); 
	}

	return (
		<section className="py-md-0 bg-hero" id="home">
			<div className="container">
				<div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">

					<form className="needs-validation" name="waitlist v1" method="POST" novalidate>

						<input type="hidden" name="form-name" value="waitlist v1" />

						<div className="mb-3 label-div">
							<label htmlFor="name" className="form-label" for="name">Your name</label>
							<input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="name" placeholder="Enter your name" required/>
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="email" className="form-label">Email address</label>
							<input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"required />
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="city" className="form-label">Your City</label>
							<input id="city" name="city" value={city} onChange={(event) => setCity(event.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your city" required/>
						</div>

						<button type="submit" className="btn btn-primary d-inline-flex flex-row align-items-center">Join Waitlist
						</button><em className="ml-2"></em>

					</form>
				</div>
			</div>
		</section>
	)
}

export default Form;