import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

// describe("Test api", () => {
//   it("should response with status 200", async (done: DoneFn) => {
//     const response = await request.get("/api");
//     expect(response.statusCode).toBe(200);
//     done();
//   });
//
//   it("should response Api is running", () => async (done: DoneFn) => {
//     const response = await request.get("/api");
//     console.log("RESPONSE", response);
//     expect(response.body).toBe("Api is running");
//     done();
//   });
// });
