import supertest from "supertest";
import app from "../../app";
import { readdir, unlink } from "fs";
import path from "path";

const request = supertest(app);

const IMAGE_DIR = "./public/assets/thumbnail";

beforeAll(() => {
  readdir(IMAGE_DIR, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      unlink(path.join(IMAGE_DIR, file), (err) => {
        if (err) throw err;
      });
    }
  });
});

describe("Test route", () => {
  it("should response with status 200", async () => {
    const response = await request.get("/api");
    expect(response.statusCode).toBe(200);
  });

  it("should response Api is running", async () => {
    const response = await request.get("/api");
    expect(response.text).toBe("Api is running");
  });
});

describe("GET /routes/images", () => {
  it("should response image not missing filename", async () => {
    const response = await request.get("/api/image");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Filename missing");
  });

  it("it should response that one parameter is missing", async () => {
    const response = await request.get("/api/image?filename=palmtunnel&height=0&width=100");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Values must be greater than zero");
  });

  it("it should response that one parameter is missing", async () => {
    const response = await request.get("/api/image?filename=palmtunnel&height=200");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Width missing");
  });

  it("it should response that one parameter is missing", async () => {
    const response = await request.get("/api/image?filename=palmtunnel&width=200");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Height missing");
  });

  it("it should response original image", async () => {
    const response = await request.get("/api/image?filename=palmtunnel");
    expect(response.statusCode).toBe(200);
  });

  it("it should response an thumbnail", async () => {
    const response = await request.get(
      "/api/image?filename=palmtunnel&width=200&height=200"
    );
    expect(response.statusCode).toBe(200);
  });
});
