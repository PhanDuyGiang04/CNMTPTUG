exports.loginForm = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123') {
        req.session.user = username;
        res.redirect('/');
    } else {
        res.send('Sai tài khoản hoặc mật khẩu');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login');
};
