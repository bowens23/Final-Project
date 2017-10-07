  var db = require("../models");

 module.exports = function(app) {

  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Word.create({
      word: req.body.word
    })
    .then(function(dbWord) {
      res.json(dbWord);
    });
  });


    app.get("/api/getLists/", function(req, res) {
    db.Word.findAll({})
    .then(function(dbWord) {
      res.json(dbWord);
    });
  });

    app.post("/api/vocabwords", function(req, res) {
    console.log(req.body);
    db.wordword.create({
      vocabword: req.body.vocabword,
      vocabwordsynonym: req.body.vocabwordsynonym,
      WordId : req.body.WordId
    })
    .then(function(dbWord) {
      res.json(dbWord);
    });
  });


    app.get("/api/getvocabwords/", function(req, res) {
    db.wordword.findAll({
        where: {
          WordId: req.query.WordId
        }
    })
    .then(function(dbWord) {
      res.json(dbWord);
    });
  });


  app.post("/api/deleteword/:id", function(req, res) {
    db.wordword.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWord) {
      res.json(dbWord);
    });
  });

    app.post("/api/deletelist/:id", function(req, res) {
    db.Word.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWord) {
db.wordword.destroy({
      where: {
        WordId: req.params.id
      }
    }).then(function(dbWord) {
      res.json(dbWord);
    });
    });
  });




};
