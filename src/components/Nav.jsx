import { useState } from 'react';
import '../assets/css/default.css';

// Nav component
function Nav({ onShowForm }) {
	const [showContact, setShowContact] = useState(false);
	// show contact info handle
	function handleShowContact(){
		setShowContact((show) => !show);
	}
	
	return (
		<section className="smart-scroll">
			<div className="container-fluid">
				<nav className="navbar navbar-expand-md navbar-dark">
					<a className="navbar-brand heading-black" href="index.html"> hotbox </a>
					<button
						className="navbar-toggler navbar-toggler-right border-0"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span data-feather="grid"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link page-scroll" href="#Contact" onClick={handleShowContact}>{showContact ? "443-373-6564" : "Contact us"}</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link page-scroll d-flex flex-row align-items-center text-primary"
									onClick={onShowForm}
								>
									<em
										data-feather="layout"
										width="18"
										height="18"
										className="mr-2"
									></em>
									Join Waitlist
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</section>
	)
}

export default Nav;