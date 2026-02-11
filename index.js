
const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routes/posts");


app.use(express.json());


app.use("/posts", postsRouter);


app.use((req, res) => {
    res.status(404).json({ error: "Endpoint non trovato" });
});


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Errore interno del server" });
});


app.listen(port, () => {
    console.log("Server avviato");
});
