// INDEX
function index(req, res) {
    res.send("Lista dei post");
}

// SHOW
function show(req, res) {
    res.send("Dettaglio di un post");
}

// CREATE
function create(req, res) {
    res.send("Creazione nuovo post");
}

// UPDATE
function update(req, res) {
    res.send("Modifica post");
}

// DESTROY
function destroy(req, res) {
    res.send("Eliminazione post");
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};

const posts = require("../data/posts");
