import getThumbnail from "../../utilities/imageFiles";

describe("Get thumbnails", () => {

    it("should not find thumbnail for palmtunnel", async () => {
        const thumbnail = await getThumbnail("palmtunnel");
        expect(thumbnail).toBeFalsy();
    });

    it("should find thumbnail for fjord", async () => {
        const thumbnail = await getThumbnail("fjord");
        expect(thumbnail).toBeTruthy();
    });

});