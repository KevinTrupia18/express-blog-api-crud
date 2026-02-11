
const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routes/posts");

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log("Server avviato");
});

function index(req, res) {
    res.json(posts);
}


function show(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    res.json(post);
}


function destroy(req, res) {
    const id = parseInt(req.params.id);

    const index = posts.findIndex(p => p.id === id);

    posts.splice(index, 1);

    console.log(posts);

    res.sendStatus(204);
}



const express = require("express");
const application = express();

app.use(express.json()); // BODY PARSER

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server avviato");
});
