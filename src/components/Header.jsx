import { useState } from 'react'
import '../assets/css/default.css';
import Button from './Button.jsx';
import Form from './Form.jsx';

// Header Component
function Header({isFormOpen, onShowForm}) {

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
							dispensaries near you today!
						</p>
						{isFormOpen === false ? <Button onClick={onShowForm}>
							Join waitlist
							<em className="ml-2" data-feather="arrow-right"></em>
						</Button> : <Form />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header;