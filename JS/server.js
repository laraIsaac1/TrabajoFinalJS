const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Importar cors
const app = express();
const PORT = 3000;

// Middleware para permitir CORS
app.use(cors()); // Esto permitirá todas las solicitudes de origen cruzado

// Middleware para procesar JSON en el cuerpo de la solicitud
app.use(express.json());

// Ruta para recibir los datos y guardarlos en personal.json
app.post("/guardar-persona", (req, res) => {
    const nuevaPersona = req.body;

    // Ruta del archivo JSON
    const filePath = path.join(__dirname, "personal.json");

    // Leer el archivo personal.json para obtener los datos actuales
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err && err.code !== "ENOENT") {
            console.error("Error al leer el archivo:", err);
            return res.status(500).json({ error: "Error al leer el archivo" });
        }

        // Si el archivo está vacío o no existe, inicializar con un array vacío
        const personas = data ? JSON.parse(data) : [];

        // Agregar la nueva persona al array
        personas.push(nuevaPersona);

        // Guardar el array actualizado en personal.json
        fs.writeFile(filePath, JSON.stringify(personas, null, 2), (err) => {
            if (err) {
                console.error("Error al guardar los datos:", err);
                return res.status(500).json({ error: "Error al guardar los datos" });
            }
            res.json({ message: "Datos guardados correctamente" });
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
