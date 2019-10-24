const { Router } = require("express");
const Ad = require("./model");

const router = new Router();

router.post("/ads", (req, res, next) => {
  Ad.create(req.body)
    .then(ad => res.send(ad))
    .catch(next);
});

router.get("/ads", (req, res, next) => {
  Ad.findAll()
    .then(ads => res.send(ads))
    .catch(next);
});

router.get("./ads/:id", (req, res, next) => {
  Ad.findByPk(req.params.id)
    .then(ad => {
      if (!ad) {
        res.status(404).send({
          message: "This ad doesn't exitst!"
        });
      } else {
        res.send(ad);
      }
    })
    .catch(next);
});

router.delete("./ads/:id", (req, res, next) => {
  Ad.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).send({
          message: "Succssfully deleted!"
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});
