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



function create(req, res) {
    console.log(req.body);
}



const posts = require("../data/posts");

function create(req, res) {

    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    res.status(201).json(newPost);
}

module.exports = {
    index,
    show,
    destroy,
    create,
    update
};






function update(req, res) {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Post non trovato"
        });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.json(post);
}
