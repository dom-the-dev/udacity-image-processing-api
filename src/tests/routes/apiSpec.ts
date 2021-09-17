import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Test routes", () => {
  it("should response with status 200", async (done: DoneFn) => {
    const response = await request.get("/api");
    expect(response.statusCode).toBe(200);
    done();
  });

  it("should response Api is running", () => async (done: DoneFn) => {
    const response = await request.get("/api");
    expect(response.body).toBe("Api is running");
    done();
  });
});

describe("GET /routes/images", () => {
  it("should response image not missing filename", async (done: DoneFn) => {
    const response = await request.get("/api/image");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Filename missing");
    done();
  });

  it("it should response original image", async (done: DoneFn) => {
    const response = await request.get("/api/image?filename=palmtunnel");
    expect(response.statusCode).toBe(200);
    done();
  });

  it("it should response an thumbnail", async (done: DoneFn) => {
    const response = await request.get("/api/image?filename=palmtunnel&width=200&height=200");
    expect(response.statusCode).toBe(200);
    done();
  });
});
