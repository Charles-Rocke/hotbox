import '../assets/css/default.css';

// Button component
function Button({ children, onClick }) {
  return (
    <button className="btn btn-primary d-inline-flex flex-row align-items-center" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;