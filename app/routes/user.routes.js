module.exports = (router) => {
    const users = require('../controllers/user.controller');

    router.post('/authenticate', users.authenticate);
    router.post('/register', users.register);
    router.get('/users', users.getAll);
    router.get('/current', users.getCurrent);
    router.get('/user/:id', users.getById);
    router.put('/user/:id', users.update);
    router.delete('/user/:id', users._delete);
}