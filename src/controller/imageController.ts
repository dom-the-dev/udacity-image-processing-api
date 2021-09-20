import asyncHandler from "express-async-handler";
import {
    getFullImagePath,
    getThumbnailPath,
    resizeImage,
} from "../utilities/imageFiles";
import path from "path";
import express from "express";

const __dirname = path.resolve();

export const getImage = asyncHandler(async (req: express.Request, res: express.Response) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;

    if (!filename) {
        res.status(400).send("Filename missing");
        return;
    }

    // Catch if height is missing
    if (!height && width) {
        res.status(400).send("Height missing");
        return;
    }

    if (parseInt(height) <= 0 || parseInt(width) <= 0) {
        res.status(400).send("Values must be greater than zero");
        return;
    }

    // Catch if width is missing
    if (height && !width) {
        res.status(400).send("Width missing");
        return;
    }

    let filePath = "";

    try {
        // If no params are passed fullsize image is returned
        if (!width && !height) {
            filePath = (await getFullImagePath(filename)) as string;
        } else {

            // Check for thumbnail
            // Return thumbnail if available
            // Else resize image and return path
            filePath = (await getThumbnailPath(filename, width, height)) as string;

            if (!filePath) {
                filePath = (await resizeImage(
                    filename,
                    parseInt(width),
                    parseInt(height)
                )) as string;
            }
        }

        res.sendFile(__dirname + filePath);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});
