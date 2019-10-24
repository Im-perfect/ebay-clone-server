const { Router } = require("express");
const User = require("./model");
const { toJWT } = require("../auth/jwt");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/users", (req, res, next) => {
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(user => {
      res.status(201).send({
        jwt: toJWT({ id: user.id }) // make a token, with userId encrypted inside of it
      });
    })
    .catch(next);
});

module.exports = router;
