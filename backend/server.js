const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Este es el mensaje que los estudiantes van a cambiar
app.get('/api/mensaje', (req, res) => {
    res.json({ 
        texto: "¡Hola! Estás conectado al Backend de Node.js con éxito.",
        autor: "Profesor" 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});