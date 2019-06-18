const Note = require('../models/note.model');

module.exports = {
    getAll,
    getById,
    create
};

async function getAll() {
    return await Note.find();
}

async function getById(id) {
    return await Note.findById(id);
}

async function create(noteParam) {
    // Validate request
    if (!noteParam.text) {
        return { message: "Note content can not be empty" }
    }

    // Create a Note
    const note = new Note({
        title: noteParam.title || "Untitled Note",
        text: noteParam.text
    });

    // Save Note in the database
    await note.save();
};
