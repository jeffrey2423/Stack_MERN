const { Router } = require('express');
const router = Router();

const notesController = require('../controllers/notes.controller');

router.route('/')
    //obtener datos
    .get(notesController.getNotes)
    //     //guardar
    .post(notesController.createNotes)

router.route('/:id')
    //actualizar un dato
    .put(notesController.updateNote)
    //borrar un dato
    .delete(notesController.deleteNote)
    //obtener datos
    .get(notesController.getNote)


module.exports = router;