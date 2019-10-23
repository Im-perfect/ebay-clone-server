const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/users", (req, res, next) => {
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(() => {
      res.status(201).send({ message: "User created succesfully!" });
    })
    .catch(next);
});

module.exports = router;