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
					<form name="waitlist v1" method="POST" data-netlify="true" className="form-split-bill" onSubmit="submit">
						<input type="hidden" name="waitlist v1" value="waitlist v1" />
						<div className="mb-3 label-div">
							<label htmlFor="name" for="exampleFormControlInput1" className="form-label">Your name</label>
							<input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="email" for="exampleFormControlInput1" className="form-label">Email address</label>
							<input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
						</div>

						<div className="mb-3 label-div">
							<label htmlFor="city" for="exampleFormControlInput1" className="form-label">Your City</label>
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