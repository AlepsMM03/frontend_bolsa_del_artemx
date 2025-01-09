import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/animations.css";


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img
                    src="/logoL_b-artemx_bc85898C.png"
                    alt="Logo"
                    className="d-inline-block align-top"
                    style={{
                        marginRight: "10px",
                        width: "300px",
                        height: "100px",
                    }}
                />
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#conocenos">
                            Conócenos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#mercado">
                            Mercado del arte
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#academico">
                            Académico
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#consultivo">
                            Consejo consultivo
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicios">
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <button
                            className="btn btn-outline-light ms-2"
                            aria-label="Ingresar al sistema"
                        >
                            Ingresar
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

function App() {
    return (
        <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
            <Navbar />

            {/* Contenido principal */}
            <div className="container text-center my-5">
                <div className="position-relative">
                    <img
                        src="/Logo_b-artemx_cp.png"
                        alt="Medalla"
                        className="img-fluid rounded-circle movimiento-vertical"
                    />
                    <p
                        className="position-absolute text-white"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "18px",
                            fontWeight: "bold",
                        }}
                    >
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
