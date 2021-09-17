import express from "express";
import {getFullImage, getThumbnail, resizeImage} from "../utilities/imageFiles";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

router.get("/", (req, res) => {
    res.send("Api is running");
});

router.get("/image", async (req, res) => {
    const filename = req.query.filename as string;
    let filePath = "";

    if (!filename) {
        res.status(400).send("Filename missing");
    } else {
        const width = req.query.width as string;
        const height = req.query.height as string;

        if (width && height) {

            try {
                filePath = await getThumbnail(filename, width, height) as string;

                if (!filePath) {
                    filePath = await resizeImage(filename, parseInt(width), parseInt(height)) as string;
                }
            } catch (error) {
                console.log("INDEX TS", error);
            }

        } else {
            try {
                filePath = await getFullImage(filename) as string;
            } catch (error) {
                console.log("FullImage Error");
            }
        }

        res.sendFile(__dirname + filePath);
    }
});

export default router;
