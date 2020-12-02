const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query).sort({ date: -1 }).then(dbModel => {
            res.json(dbModel)
        }).catch(error => {
            console.log(error);
            res.status(422).json(error);
        });
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id).then(dbModel => res.json(dbModel)).catch(error => {
            console.log(error);
            res.status(422).json(error);
        });
    }
}