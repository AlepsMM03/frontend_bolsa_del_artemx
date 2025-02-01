import React, { useEffect } from "react";
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
    useEffect(() => {
        const canvas = document.getElementById("blockchain-animation");
        const ctx = canvas.getContext("2d");
        const blocks = [];

        const createBlock = (x, y) => {
            blocks.push({ x, y, width: 50, height: 30 });
        };

        const drawBlockchain = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            blocks.forEach((block, index) => {
                ctx.fillStyle = "#00ff99";
                ctx.fillRect(block.x, block.y, block.width, block.height);
                ctx.strokeStyle = "#000";
                ctx.strokeRect(block.x, block.y, block.width, block.height);

                // Connect blocks
                if (index < blocks.length - 1) {
                    const nextBlock = blocks[index + 1];
                    ctx.beginPath();
                    ctx.moveTo(block.x + block.width, block.y + block.height / 2);
                    ctx.lineTo(nextBlock.x, nextBlock.y + nextBlock.height / 2);
                    ctx.strokeStyle = "#00ff99";
                    ctx.stroke();
                }
            });
        };

        // Initialize blockchain blocks
        for (let i = 0; i < 5; i++) {
            createBlock(100 + i * 70, 100);
        }

        const animate = () => {
            drawBlockchain();
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
            <Navbar />
            <nav className="text-center py-4 bg-black border-b border-gray-800">
                <h1 className="text-2xl font-bold text-green-400">Conectando a la Blockchain...</h1>
            </nav>

            <div className="container text-center my-5">
                <div className="position-relative">
                    <img
                        src="/Logo_b-artemx_cp.png"
                        alt="Medalla"
                        className="img-fluid rounded-circle movimiento-vertical mx-auto mb-5"
                        style={{ width: "150px" }}
                    />
                    <p className="text-green-400 text-xl font-semibold">
                        ✨ Próximo lanzamiento muy cerca... Conectando a la blockchain... ✨
                    </p>
                    <canvas id="blockchain-animation" width="600" height="200" className="mx-auto mt-4"></canvas>
                </div>
            </div>
        </div>
    );
}

export default App;
