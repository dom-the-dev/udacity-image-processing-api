"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../app"));
var request = (0, supertest_1.default)(app_1.default);
// describe("GET /api/images", () => {
//   it("should response image not missing filename", async (done: DoneFn) => {
//     const response = await request.get("/api/image");
//     expect(response.statusCode).toBe(400);
//     expect(response.text).toBe("Filename missing");
//     done();
//   });
//
//   it("it should response original image", async (done: DoneFn) => {
//     const response = await request.get("/api/image?filename=argentina");
//     expect(response.statusCode).toBe(200);
//     done();
//   });
//
//   it("it should response an thumbnail", async (done: DoneFn) => {
//     const response = await request.get(
//       "/api/image?filename=argentina&width=200&height=200"
//     );
//     expect(response.statusCode).toBe(200);
//     done();
//   });
// });
