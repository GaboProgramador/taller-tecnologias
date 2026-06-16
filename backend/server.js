const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/mensajes', (req, res) => {
    const carpeta = path.join(__dirname, 'mensajes');
    
    // Si la carpeta no existe, la crea
    if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta);

    // Lee todos los archivos JSON de la carpeta
    const archivos = fs.readdirSync(carpeta);
    const mensajes = archivos
        .filter(file => file.endsWith('.json'))
        .map(file => JSON.parse(fs.readFileSync(path.join(carpeta, file), 'utf-8')));

    res.json(mensajes.length > 0 ? mensajes : [{ texto: "Esperando los commits del taller...", autor: "Sistema" }]);
});

app.listen(PORT, () => console.log(`Server listo en http://localhost:${PORT}`));