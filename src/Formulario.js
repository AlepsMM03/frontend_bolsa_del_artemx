import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/animations.css";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Configuración de Firebase (deberías mover esto a un archivo aparte)
const firebaseConfig = {
  apiKey: "AIzaSyD0vGb8D262acqxriQvNreWFtRgAYBrRNA",
  authDomain: "bolsaartemx-8a730.firebaseapp.com",
  databaseURL: "https://bolsaartemx-8a730-default-rtdb.firebaseio.com",
  projectId: "bolsaartemx-8a730",
  storageBucket: "bolsaartemx-8a730.firebasestorage.app",
  messagingSenderId: "17079361597",
  appId: "1:17079361597:web:9a9fa90fee638930974a54",
  measurementId: "G-KSV8P9N4ZT"
};

// Inicializa Firebase una sola vez
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [procedencia, setProcedencia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usamos la instancia de database ya inicializada
    const formularioRef = ref(database, 'formularios/' + Date.now());
    
    set(formularioRef, {
      nombre: nombre,
      email: email,
      telefono: telefono,
      procedencia: procedencia,
      fecha: new Date().toISOString()
    })
    .then(() => {
      alert('Formulario enviado con éxito');
      setNombre('');
      setEmail('');
      setTelefono('');
      setProcedencia('');
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el formulario: ' + error.message);
    });
  };

  return (
    <div id="contacto" className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              <h2 className="text-center mb-4 text-success">Suscríbete para recibir las últimas noticias del lanzamiento de Bolsa del Arte México</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label text-muted">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-muted">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label text-muted">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="procedencia" className="form-label text-muted">Institución de procedencia</label>
                  <input
                    type="text"
                    className="form-control"
                    id="procedencia"
                    value={procedencia}
                    onChange={(e) => setProcedencia(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100 py-2">Enviar Información</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;