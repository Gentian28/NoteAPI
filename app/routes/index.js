const noteRoutes = require('./note.routes');
const userRoutes = require('./user.routes');
module.exports = (router) => {
    noteRoutes(router);
    userRoutes(router);
};