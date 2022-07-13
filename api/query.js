const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    q = req.body.q

    if (q == '')
        req.json({
            "code": "EINVAL",
            "error": "missing or invalid parameter q"
        })

    reply = {
        "result": "ok",
        "candidates": [
            {
                "code": [
                    "$dialogue",
                    "@org.thingpedia.dialogue.transaction",
                    ".",
                    "execute",
                    ";",
                    "@com.asd",
                    ".",
                    "asd",
                    "(",
                    ")",
                    ";"
                ],
                "score": 1
            }
        ],
        "tokens": q.split(" "),
        "entities": {},
        "intent": {
            "command": 1,
            "other": 0,
            "ignore": 0
        }
    }
    res.json(reply);
});

module.exports = router;