exports.index = (req, res) => {
    res.render("index", { message: null });
};

exports.submit = (req, res) => {
    const name = req.body.name;
    res.render("index", { message: `Xin chào ${name}! 👋` });
};