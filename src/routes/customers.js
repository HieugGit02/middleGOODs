var express = require('express');
var router = express.Router();
const connection = require('../database/connect')

/* GET home page. */
//home page
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM customers";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.render('_customer.view/customers', { title: 'Customers', data: results });
  });
});

// get create new customer page
router.get('/new', function(req, res, next) {
  res.render('_customer.view/customers-new', {title: 'Create customer'})
});

//update customer page
router.get('/:id', function(req, res, next) {
  console.log(req.params);
  var sql = "SELECT * FROM Customers WHERE id=?";
  connection.query(sql, req.params.id, function(err, results) {
    console.log(results);
    if (err) throw err;
    res.render('_customer.view/customers-edit', { title: 'Update Customer', data: results[0] });
  });
});



/* Post data. */
// post customer
router.post('/create', function(req, res, next) {
  const date=new Date();
  var sql = `INSERT INTO Customers (CustomerName, AccountName, Address, City, Country, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ? ,?);`
  connection.query(sql, 
    [
      req.body.customerName,
      req.body.accountName,
      req.body.address,
      req.body.city,
      // req.body.postalCode,
      req.body.country,
      date,
      date
      
    ],
    (err, results) => {
      if (err) throw err;
      res.redirect('/customers')
    })
});


//post edit
router.post('/edit', function(req, res, next) {
  const date=new Date();
  var sql = `UPDATE Customers SET CustomerName=?, AccountName=?, Address=?, City=?, Country=?, createdAt=?, updatedAt=? WHERE id=?;`
  connection.query(sql, 
    [
      req.body.customerName,
      req.body.accountName,
      req.body.address,
      req.body.city,
      // req.body.postalCode,
      req.body.country,
      date,
      date,
      req.body.id

    ],
    (err, results) => {
      if (err) throw err;
      res.redirect('/customers')
    })
});

//post remove
router.post('/remove/:id', function(req, res, next) {
  var sql = `DELETE FROM Customers WHERE id=?;`
  connection.query(sql, req.params.id,
    (err, results) => {
      if (err) throw err;
      res.redirect('/customers')
    })
});


module.exports = router;
