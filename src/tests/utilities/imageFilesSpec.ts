import {getThumbnail, getFullImage, resizeImage} from "../../utilities/imageFiles";

describe("Get thumbnails", () => {
  it("should return filepath for palmtunnel thumbnail", async () => {
    const thumbnail = await getThumbnail("palmtunnel", "200", "300");
    expect(thumbnail).toBe("/src/assets/thumbnail/palmtunnel_200_300.jpg");
  });

  it("should return undefined for not available image", async () => {
    const thumbnail = await getThumbnail("palmtunnel", "500", "500");
    expect(thumbnail).toBeFalsy();
  });

});

describe("Get fullsize image", () => {
  it("should return filepath for palmtunnel fullsize", async () => {
    const fullsize = await getFullImage("palmtunnel");
    expect(fullsize).toBe("/src/assets/full/palmtunnel.jpg");
  });

  it("should return undefined for not available image", async () => {
    const fullsize = await getFullImage("notthere");
    expect(fullsize).toBeFalsy();
  });

});


describe("Resize Image", () => {
  it("should return filepath for palmtunnel fullsize", async () => {
    const fullsize = await getFullImage("palmtunnel");
    expect(fullsize).toBe("/src/assets/full/palmtunnel.jpg");
  });

  it("should return undefined for not available image", async () => {
    const fullsize = await getFullImage("notthere");
    expect(fullsize).toBeFalsy();
  });

});