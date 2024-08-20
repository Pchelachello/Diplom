import superagent from "superagent";
import { photoLink, userLink } from "../consts/consts";

describe("DELETE request", () => {

    it("Delete post", async () => {
        let  response = await superagent.delete(`${photoLink}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
        response = await superagent.get(`${photoLink}`);
        expect(response.status).toBe(404);
    });

    it("Delete user", async () => {
        let  response = await superagent.delete(`${userLink}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
        response = await superagent.get(`${userLink}`);
        expect(response.status).toBe(404);
    });
});