const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', function (req, res) {

  console.log(req.body);
  
  const { fbToken, fbUserID } = req.body;

  axios(`https://graph.facebook.com/${fbUserID}?access_token=${fbToken}`)
    .then(response => {
      console.log(response);
      if (response.data.id) {
        res.redirect('/');
      }
      else res.send({ error: true });
    })
    .catch(err => console.log(err));
  
});

module.exports = router;