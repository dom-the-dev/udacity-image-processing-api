import {
  getFullImagePath,
  getThumbnailPath,
  resizeImage,
} from "../../utilities/imageFiles";
import {existsSync} from "fs";

describe("Get thumbnails", () => {
  it("should return filepath for palmtunnel thumbnail", async () => {
    const thumbnail = await getThumbnailPath("palmtunnel", "200", "300");
    expect(thumbnail).toBe("/src/assets/thumbnail/palmtunnel_200_300.jpg");
  });

  it("should return undefined for not available image", async () => {
    const thumbnail = await getThumbnailPath("palmtunnel", "500", "500");
    expect(thumbnail).toBeFalsy();
  });
});

describe("Get fullsize image", () => {
  it("should return filepath for palmtunnel fullsize", async () => {
    const fullsize = await getFullImagePath("palmtunnel");
    expect(fullsize).toBe("/src/assets/full/palmtunnel.jpg");
  });

  it("should return undefined for not available image", async () => {
    const fullsize = await getFullImagePath("notthere");
    expect(fullsize).toBeFalsy();
  });
});

describe("Resize Image", () => {
  it("should create filepath for resized image", async () => {
    expect(existsSync("./src/assets/thumbnail/palmtunnel_600_600.jpg")).toBeFalsy();

    const resized = await resizeImage("palmtunnel", 600, 600);

    expect(resized).toBe("/src/assets/thumbnail/palmtunnel_600_600.jpg");
    expect(existsSync("./src/assets/thumbnail/palmtunnel_600_600.jpg")).toBeTruthy();
  });
});
