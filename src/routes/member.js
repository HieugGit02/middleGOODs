var express = require('express');
var router = express.Router();
const connection = require('../database/connect')

/* GET home page. */
//home page
router.get('/', (req, res, next)=> {
  var sql = "SELECT * FROM members";
  connection.query(sql, (err, results)=> {
    if (err) throw err;
    res.render('_member.view/members', { title: 'Members', data: results });
  });
});
//get new member
router.get('/new', (req, res, next) =>{
  res.render('_member.view/members-new', {title: 'Create Member'})
});


//get update
router.get('/:id', (req, res, next) =>{
  console.log(req.params);
  var sql = "SELECT * FROM members WHERE id=?";
  connection.query(sql, req.params.id, (err, results) =>{
    console.log(results);
    if (err) throw err;
    res.render('_member.view/members-edit', { title: 'Update Member', data: results[0] });
  });
})

//post member page
router.post('/create', (req, res, next) => {
  const date=new Date();
  var sql = `INSERT INTO members (MemberName, AccountName, Address, City, Country, IsAdmin, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ? ,?, ?);`
  connection.query(sql, 
    [
      req.body.memberName,
      req.body.accountName,
      req.body.address,
      req.body.city,
      req.body.country,
      req.body.isAdmin,
      date,
      date
      
    ],
    (err, results) => {
      if (err) throw err;
      res.redirect('/member')
    })
});
//post edit
router.post('/edit', function(req, res, next) {
  const date=new Date();
  var sql = `UPDATE members SET MemberName=?, AccountName=?, Address=?, City=?, Country=?, IsAdmin=?, createdAt=?, updatedAt=? WHERE id=?;`
  connection.query(sql, 
    [
      req.body.memberName,
      req.body.accountName,
      req.body.address,
      req.body.city,
      req.body.country,
      req.body.isAdmin,
      date,
      date,
      req.body.id

    ],
    (err, results) => {
      if (err) throw err;
      res.redirect('/member')
    })
});


//post remove
router.post('/remove/:id', function(req, res, next) {
  var sql = `DELETE FROM members WHERE id=?;`
  connection.query(sql, req.params.id,
    (err, results) => {
      if (err) throw err;
      res.redirect('/member')
    })
});
module.exports = router;