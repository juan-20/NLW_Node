import express from 'express';
import "./database";
import { routes } from "./routes";

const app = express();


// roda
app.listen(3333, () => console.log("Server is running!"))

app.use(express.json())
app.use(routes)

//  rota get:
// app.get("/users", (request, response) => {
//     return response.json({ message: "teste" });
// })
// // rota post
// app.post("/users", (request, response) => {
//     return response.json({ message: "aro" });
// })