import { useState } from 'react'
import '../assets/css/default.css';
import Button from './Button.jsx';
import Form from './Form.jsx';
import arrowDown from "../assets/images/arrow-down.svg"

// Header Component
function Header({ isFormOpen, onShowForm }) {

	return (
		<section className="py-7 py-md-0 bg-hero" id="home">
			<div className="container">
				<div className="row vh-md-100">
					<div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
						<h1 className="heading-black text-capitalize">
							Cannabis delivery straight to your door
						</h1>
						<p className="lead py-3">
							hotbox is doordash for cannabis. Get delivery from your favorite
							dispensaries near you today! <p className="md-only">*Maryland residents only*</p>
						</p>
						{isFormOpen === false ?
							<div>
								<Button onClick={onShowForm}>
									Join waitlist
									<em className="ml-2"><img src={arrowDown} alt="down"></img></em>
								</Button>
								<br />
							</div> : <Form />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header;