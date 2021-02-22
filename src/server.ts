import express from 'express';

const app = express();

app.listen(3333, () => console.log("Server is running!"))

// rota get:
app.get("/users", (request, response) => {
    return response.json({ message: "teste" });
})
// rota post
app.post("/users", (request, response) => {
    return response.json({ message: "aro" });
})