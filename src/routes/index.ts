import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Api is running");
});

router.get("/image", ((req, res) => {

                          const filename = req.query.filename;

    if(!filename) {
        res.status(400).send("Filename missing");
    } else {
        const width = req.query.width;
        const height = req.query.height;

        res.sendFile("src/assets/full/fjord.jpg");

        // thumbnail?
                // if not get fullimage and resize
                // response thumbnail

        res.send("Image");
    }

}));

export default router;