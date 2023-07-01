import { useState } from 'react';
import '../assets/css/default.css';
import Button from './Button.jsx';


// Form component
function Form() {
	// form submission handle
	function handleSubmit(e) {
		e.preventDefault();
		
		// if (!bill || !paidByUser) return;
		// onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
		// console.log(whoIsPaying);
	}

	return (
		<section className="py-md-0 bg-hero" id="home">
			<div className="container">
				<div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
					<form className="form-split-bill" onSubmit={handleSubmit}>
						<div className="mb-3 label-div">
							<label for="exampleFormControlInput1" className="form-label">Your name</label>
							<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
						</div>

						<div className="mb-3 label-div">
							<label for="exampleFormControlInput1" className="form-label">Email address</label>
							<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
						</div>

						<div className="mb-3 label-div">
							<label for="exampleFormControlInput1" className="form-label">Your City</label>
							<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your city" />
						</div>
						<Button>
							Join waitlist
							<em className="ml-2" data-feather="arrow-right"></em>
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Form;