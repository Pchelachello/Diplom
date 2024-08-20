import superagent from "superagent";
import { commentTitle, photoLink, reqUsersLink, ResponseProperties, userLink } from "../consts/consts";

describe("PUT request", () => {

  it("Put userId for user", async () => {
    let response = await superagent.put(`${reqUsersLink}`).send({ id: 666 });
    expect(response.status).toBe(200);
    const id = response.body.id;
    response = await superagent.get(`${userLink}/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.ID, 666);
    expect(response.body).not.toHaveProperty(ResponseProperties.NAME);
    expect(response.body).not.toHaveProperty(ResponseProperties.USERNAME);
    expect(response.body).not.toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).not.toHaveProperty(ResponseProperties.ADDRESS);
    expect(response.body).not.toHaveProperty(ResponseProperties.PHONE);
    expect(response.body).not.toHaveProperty(ResponseProperties.WEBSITE);
    expect(response.body).not.toHaveProperty(ResponseProperties.COMPANY);
  });

  it("Put post title for photo", async () => {
    let response = await superagent.put(`${photoLink}`).send({ title: commentTitle });
    expect(response.statusCode).toBe(200);
    const title = response.body.title;
    response = await superagent.get(`${photoLink}/${title}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.TITLE, commentTitle);
    expect(response.body).not.toHaveProperty(ResponseProperties.ALBUMID);
    expect(response.body).not.toHaveProperty(ResponseProperties.ID);
    expect(response.body).not.toHaveProperty(ResponseProperties.URL);
    expect(response.body).not.toHaveProperty(ResponseProperties.THUMBNAILURL);
  });
});