var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cards', function(req, res) {
  global.db.findAll((e, docs) => {
      res.json(docs);
  })
})

module.exports = router;