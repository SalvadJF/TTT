import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa los estilos de Tailwind CSS

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome to My Laravel Project</h1>
      <nav className="nav-links">
        {window.Laravel && window.Laravel.authenticated ? (
          <a
            href="/home"
            className="nav-link"
          >
            Dashboard
          </a>
        ) : (
          <>
            <a
              href="/login"
              className="nav-link"
            >
              Log in
            </a>
            {window.Laravel && window.Laravel.canRegister && (
              <a
                href="/register"
                className="nav-link"
              >
                Register
              </a>
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default Welcome;

if (document.getElementById("welcome")){
    createRoot(document.getElementById("welcome")).render(<Welcome/>)
}
