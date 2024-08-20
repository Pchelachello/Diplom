import superagent from "superagent";
import { myComment, myUser, reqCommentsLink, ResponseProperties } from "../consts/consts";

describe("POST request", () => {

  it("Post new comment", async () => {
    let response = await superagent.post(`${reqCommentsLink}`).send(myComment);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(501);
    expect(response.body).toHaveProperty(ResponseProperties.ID);
    expect(response.body).toHaveProperty(ResponseProperties.NAME);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).toHaveProperty(ResponseProperties.BODY);
    const commentId = response.body.id;
    response = await superagent.get(`${reqCommentsLink}/${commentId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.ID, myComment.id);
    expect(response.body).toHaveProperty(ResponseProperties.NAME, myComment.name);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL, myComment.email);
    expect(response.body).toHaveProperty(ResponseProperties.BODY, myComment.body);
  });

  it("Post new user", async () => {
    let response = await superagent.post(`${reqCommentsLink}`).send(myUser);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(11);
    expect(response.body).toHaveProperty(ResponseProperties.ID);
    expect(response.body).toHaveProperty(ResponseProperties.NAME);
    expect(response.body).toHaveProperty(ResponseProperties.USERNAME);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).toHaveProperty(ResponseProperties.ADDRESS);
    expect(response.body).toHaveProperty(ResponseProperties.PHONE);
    expect(response.body).toHaveProperty(ResponseProperties.WEBSITE);
    expect(response.body).toHaveProperty(ResponseProperties.COMPANY);
    const userId = response.body.id;
    response = await superagent.get(`${reqCommentsLink}/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.ID, myUser.id);
    expect(response.body).toHaveProperty(ResponseProperties.NAME, myUser.name);
    expect(response.body).toHaveProperty(ResponseProperties.USERNAME, myUser.username);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL, myUser.email);
    expect(response.body).toHaveProperty(ResponseProperties.ADDRESS, myUser.address);
    expect(response.body).toHaveProperty(ResponseProperties.PHONE, myUser.phone);
    expect(response.body).toHaveProperty(ResponseProperties.WEBSITE, myUser.website);
    expect(response.body).toHaveProperty(ResponseProperties.COMPANY, myUser.company);
  });
});