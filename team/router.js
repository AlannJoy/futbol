const { Router } = require("./express");
const { Team } = require("./model");

const router = new Router();

router
  .get("/", (req, res, next) => {
    Team.findAll().then(teams => res.json(teams));
  })
  .catch(error => next(error));

module.export = router;
