require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

const { v4: uuid } = require("uuid");

app.use(cors());
app.use(express.json());

// {
    //     id: 1,
    //     category: drinks, junkfood, snscks, streamingServices
    //     name: "burrito",
    //     times: 5,
    //     avgPrice: 5.55,
// },
const antExpenses = [
    
]


app.get("/", (req, res) =>{
    return res.json({
        mensaje: "Lista de usuarios obtenidas", 
        data: antExpenses 
    });
})

app.get("/:id", (req, res) =>{
    const { id } = req.params;
    
    const gastoEncontrado = antExpenses.find( (antExpense) => {
        return antExpense.id === id;
    })

    return res.json({
        mensaje: "Lista de usuarios obtenidas", 
        data: gastoEncontrado
    });
})

app.post("/", (req, res) => {
    const { name, category, times, avgPrice } = req.body;
    const item = {
        id: uuid(),
        name,
        category,
        times,
        avgPrice,
    }
    antExpenses.push(item);
    return res.json({ 
        mensaje: "Gasto ingresado",
        data: item,
    });
})

app.put("/:id", (req, res) => {

    const { id } = req.params;
    const { name, category, times, avgPrice } = req.body;
    const gastoEncontrado = antExpenses.find( (antExpense) => {
        return antExpense.id === id;
    });

    gastoEncontrado.nombre = nombre;
    gastoEncontrado.apellido = apellido;
    gastoEncontrado.username = username;

    return res.json({ 
        mensaje: "Gasto actualizado",
        data: gastoEncontrado,
    });
})

app.delete("/:id", (req, res) => {
    const { id } = req.params;

    const gastoEncontrado = antExpenses.find( (antExpense) => {
        return antExpense.id === id;
    })

    antExpenses.splice(antExpenses.indexOf(gastoEncontrado), 1);

    return res.json({ 
        mensaje: "Gasto eliminado",
        data: gastoEncontrado
    });
})

app.listen(PORT, ()=> {
    console.log(`Corriendo en el puerto ${PORT}`);
})