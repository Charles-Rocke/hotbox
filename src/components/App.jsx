import { useState } from 'react';
import '../assets/css/default.css';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import Button from './Button.jsx';

// App component
export default function App() {
	// display header button state
	const [displayButton, setDisplayButton] = useState(true);

	// display form state
	const [showForm, setShowForm] = useState(false);

	// handle set display
	function handleSetFormDisplay() {
		setShowForm(!showForm);
	}

	return (
		<main>
			<Nav onShowForm={setShowForm}/>
			{/* Header controls form display */}
			<Header onShowForm={setShowForm} isFormOpen={showForm}/>
		</main>
	)
}
