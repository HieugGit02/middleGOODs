var express = require('express');
var router = express.Router();
const connection = require('../database/connect')

/* GET home page. */
//home page
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM pets";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.render('_pet.view/pets', { title: 'Pets', data: results });
  });
});

router.get('/new', function(req, res, next) {
    res.render('_pet.view/pets-new', {title: 'Create Pet'})
});
  
  
router.get('/:id', function(req, res, next) {
    console.log(req.params);
    var sql = "SELECT * FROM pets WHERE id=?";
    connection.query(sql, req.params.id, function(err, results) {
      console.log(results);
      if (err) throw err;
      res.render('_pet.view/pets-edit', { title: 'Update Pet', data: results[0] });
    });
});



//post 
router.post('/create', function(req, res, next) {
    const date=new Date();
    var sql = `INSERT INTO pets (PetName, Age, Type, Origin, Price, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ? ,?);`
    connection.query(sql, 
      [
        req.body.petName,
        req.body.age,
        req.body.type,
        req.body.origin,
        req.body.price,
        date,
        date
        
      ],
      (err, results) => {
        if (err) throw err;
        res.redirect('/pet')
      })
  });
  


  
  //post edit
router.post('/edit', function(req, res, next) {
    const date=new Date();
    var sql = `UPDATE pets SET PetName=?, Age=?, Type=?, Origin=?, Price=?, createdAt=?, updatedAt=? WHERE id=?;`
    connection.query(sql, 
      [
        req.body.petName,
        req.body.age,
        req.body.type,
        req.body.origin,
        req.body.price,
        date,
        date,
        req.body.id
  
      ],
      (err, results) => {
        if (err) throw err;
        res.redirect('/pet')
      })
  });

  //post remove
router.post('/remove/:id', function(req, res, next) {
    var sql = `DELETE FROM pets WHERE id=?;`
    connection.query(sql, req.params.id,
      (err, results) => {
        if (err) throw err;
        res.redirect('/pet')
      })
  });
  

module.exports = router;