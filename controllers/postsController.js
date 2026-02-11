const posts = require("../data/posts");



function index(req, res) {
    res.json(posts);
}



function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
}



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



function update(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.json(post);
}



function destroy(req, res) {

    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts.splice(index, 1);

    res.sendStatus(204);
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
