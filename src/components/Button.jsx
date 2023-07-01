import '../assets/css/default.css';

// Button component
function Button({ children, onClick, type}) {
  return (
    <button type={type} className="btn btn-primary d-inline-flex flex-row align-items-center" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;