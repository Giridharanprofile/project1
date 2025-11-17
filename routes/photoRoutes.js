const express = require('express');
const router = express.Router();

const {
    createPhoto,
    getPhotos,
    getPhotoById,
    updatePhoto,
    deletePhoto

} = require('../controllers/photoControllers');

router.post('/photos', createPhoto);
router.get('/photos', getPhotos);
router.get('/photos/:id', getPhotoById);
router.put('/photos/:id', updatePhoto);
router.delete('/photos/:id', deletePhoto);

module.exports = router;