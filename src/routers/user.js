const express = require("express");
const router = new express.Router();

// GET /users/me
router.get("/users/me", async (req, res) => {
    res.send({
        name: "Olivia"
    })
});

module.exports = router;
