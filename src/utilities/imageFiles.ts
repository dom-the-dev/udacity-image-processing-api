import { promises as fs, existsSync } from "fs";
import sharp from "sharp";

export const getThumbnailPath = async (
  fileName: string,
  width: string,
  height: string
): Promise<string | unknown> => {
  const filePath = `/src/assets/thumbnail/${fileName}_${width}_${height}.jpg`;

  try {
    if (existsSync(`.${filePath}`)) {
      return filePath;
    }
  } catch (error) {
    console.log("Error getThumbnail(): ", error);
  }
};

export const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<string | unknown> => {
  try {
    const filePath = `/src/assets/full/${fileName}.jpg`;
    const fullImage = await fs.readFile(`.${filePath}`);
    const thumbnailPath = `/src/assets/thumbnail/${fileName}_${width.toString()}_${height.toString()}.jpg`;

    await sharp(fullImage).resize(width, height).toFile(`.${thumbnailPath}`);

    return thumbnailPath;
  } catch (error) {
    console.log("Error resizeFullImage(): ", error);
  }
};

export const getFullImagePath = async (
  fileName: string
): Promise<string | unknown> => {
  try {
    const filePath = `/src/assets/full/${fileName}.jpg`;

    if (existsSync(`.${filePath}`)) {
      return filePath;
    }
  } catch (error) {
    console.log("Error getThumbnail(): ", error);
  }
};
