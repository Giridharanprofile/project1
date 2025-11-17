const Photo = require('../models/photo');

exports.createPhoto = async (req, res) => {
    try {
        const Photo = await Photo.create(req.body)
        res.status(201).json(Photo);
    

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        if (!photo) {
            return res.status(404).json({ message: "Photo Not Found" });
        }
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.updatePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndUpdate(req.params.id, req.body , { new: true });
        if (!photo) {
            return res.status(404).json({ message: "Photo Not Found" });
        }
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deletePhoto = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id);
        if (!photo) {
            return res.status(404).json({ message: "Photo Not Found" });
        }
        res.status(200).json({ message: "Photo Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

