import asyncHandler from "express-async-handler";
import {
  getFullImagePath,
  getThumbnailPath,
  resizeImage,
} from "../utilities/imageFiles";
import path from "path";

const __dirname = path.resolve();

export const getImage = asyncHandler(async (req, res) => {
  const filename = req.query.filename as string;
  let filePath = "";

  if (!filename) {
    res.status(400).send("Filename missing");
  } else {
    const width = req.query.width as string;
    const height = req.query.height as string;

    try {
      // If no params are passed fullsize image is returned
      if (!width || !height) {
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
  }
});
