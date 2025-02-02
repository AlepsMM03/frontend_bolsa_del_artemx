import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/animations.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img
                    src="/logoL_b-artemx_bc85898C.png"
                    alt="Logo"
                    className="d-inline-block align-top img-fluid"
                    style={{ maxWidth: "300px", height: "auto" }}
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
                            className="btn btn-outline-light ms-lg-2 mt-2 mt-lg-0"
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
    const [canvasSize, setCanvasSize] = useState({ width: 600, height: 200 });

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = document.querySelector('.canvas-container')?.offsetWidth || 600;
            setCanvasSize({
                width: Math.min(containerWidth, 600),
                height: 200
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
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

        const initBlocks = () => {
            blocks.length = 0;
            const startX = (canvas.width - (5 * 70)) / 2;
            for (let i = 0; i < 5; i++) {
                createBlock(startX + i * 70, 100);
            }
        };

        const animate = () => {
            canvas.width = canvasSize.width;
            canvas.height = canvasSize.height;
            initBlocks();
            drawBlockchain();
            requestAnimationFrame(animate);
        };

        animate();
        return () => window.removeEventListener('resize', handleResize);
    }, [canvasSize]);

    return (
        <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
            <Navbar />
            <nav className="text-center py-4 bg-black border-b border-gray-800">
            <h1 className="h3 h-lg-2 text-green-400">Bolsa del Arte México revoluciona el mercado del arte con un modelo fiduciario, blockchain y valuación certificada, democratizando el acceso y la comercialización global. Lanzamiento Septiembre 2025.</h1>
            <h2 className="h6 h-lg-2 font-bold text-green-400">Conectando a la Blockchain...</h2>
            </nav>

            <div className="container text-center my-5">
                <div className="position-relative canvas-container">
                    <img
                        src="/Logo_b-artemx_cp.png"
                        alt="Medalla"
                        className="img-fluid rounded-circle movimiento-vertical mx-auto mb-5"
                        style={{ width: "60%", maxWidth: "150px" }}
                    />
                    <canvas 
                        id="blockchain-animation" 
                        width={canvasSize.width} 
                        height={canvasSize.height}
                        className="mx-auto mt-4"
                        style={{ width: "100%", maxWidth: "600px" }}
                    ></canvas>
                </div>
                <div className="text-center mt-5">
                    <h2 className="h4 h-lg-3 text-green-400 mb-4">¿Necesitas más información? Contáctanos</h2>
                    <a 
                        href="#contacto" 
                        className="btn btn-outline-green btn-lg"
                        style={{
                            borderColor: "#00ff99",
                            color: "#00ff99",
                            transition: "all 0.3s ease",
                            maxWidth: "300px",
                            width: "100%"
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#00ff99";
                            e.target.style.color = "#000";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#00ff99";
                        }}
                    >
                        Escríbenos
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;