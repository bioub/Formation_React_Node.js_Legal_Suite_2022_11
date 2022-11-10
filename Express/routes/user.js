const express = require('express');
const userCtrl = require('../controllers/user');

const router = express.Router();

// prettier-ignore
router.post('/login',
  express.json(),
  userCtrl.login
);


// prettier-ignore
router.get('/',
  express.json(),
  userCtrl.list
);


// prettier-ignore
router.post('/',
  express.json(),
  userCtrl.add
);


// prettier-ignore
router.get('/:userId',
  express.json(),
  userCtrl.show
);

module.exports = router;
