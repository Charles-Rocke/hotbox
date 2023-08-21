import { useState, useEffect } from 'react'
import '../assets/css/default.css';
import Button from './Button.jsx';
import Form from './Form.jsx';
import arrowDown from "../assets/images/arrow-down.svg"
import { getDispensaries } from "../services/apiDispensaries"

// Header Component
function Header({ isFormOpen, onShowForm }) {
	useEffect(function(){
		getDispensaries().then(data=>console.log(data))
	}, [])

	return (
		<section className="py-7 py-md-0 bg-hero" id="home">
			<div className="container">
				<div className="row vh-md-100">
					<div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
						<h1 className="heading-black text-capitalize">
							Cannabis delivery straight to your door
						</h1>
						<p className="lead">
							hotbox is doordash for cannabis. Get delivery from your favorite
							dispensaries near you today!
						</p>
						<p className="lead md-only py-3">*Maryland residents only*</p>
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