const { Router } = require("express")
const { toJWT, toData } = require("./jwt")
const bcrypt = require("bcrypt")
const User = require("../user/model")

const router = new Router()

router.post("/login", (req, res, next) => {
    if(!req.body.username || !req.body.password ) {
        return res.status(400).end()
    }

    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(!user){
            res.status(400).end()
        }
        else if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                jwt: toJWT({id: user.id})
            })
        }
        else {
            res.status(400).end()
        }
    }).catch(next)
})

module.exports = router