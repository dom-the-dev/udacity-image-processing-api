"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../app"));
var request = (0, supertest_1.default)(app_1.default);
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
