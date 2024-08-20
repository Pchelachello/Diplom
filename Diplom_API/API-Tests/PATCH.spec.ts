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
    expect(response.body).toHaveProperty(ResponseProperties.NAME);
    expect(response.body).toHaveProperty(ResponseProperties.USERNAME);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).toHaveProperty(ResponseProperties.ADDRESS);
    expect(response.body).toHaveProperty(ResponseProperties.PHONE);
    expect(response.body).toHaveProperty(ResponseProperties.WEBSITE);
    expect(response.body).toHaveProperty(ResponseProperties.COMPANY);
  });

  it("Put post title for photo", async () => {
    let response = await superagent.put(`${photoLink}`).send({ title: commentTitle });
    expect(response.statusCode).toBe(200);
    const title = response.body.title;
    response = await superagent.get(`${photoLink}/${title}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.TITLE, commentTitle);
    expect(response.body).toHaveProperty(ResponseProperties.ALBUMID);
    expect(response.body).toHaveProperty(ResponseProperties.ID);
    expect(response.body).toHaveProperty(ResponseProperties.URL);
    expect(response.body).toHaveProperty(ResponseProperties.THUMBNAILURL);
  });
});