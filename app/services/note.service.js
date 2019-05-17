const Note = require('../models/note.model');

module.exports = {
    getById
};

async function getById(id) {
    return await Note.findById(id);
}