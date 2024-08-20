import superagent from "superagent";
import { commentLink, firstComment, photoUrl, reqAlbumsLink, reqPhotosLink, reqPostsLink, reqUsersLink, ResponseProperties } from "../consts/consts";

describe("GET запросы", () => {
  it("Get list of all users", async () => {
    const response = await superagent.get(`${reqUsersLink}`);
    expect(response.status).toBe(200);
    if (Array.isArray(response.body)) {
        expect(response.body).not.toBeNull();
      } else {
          fail("Response body is not an array");
      }
    });

  it("Get list of all albums", async () => {
    const response = await superagent.get(`${reqAlbumsLink}`);
    expect(response.status).toBe(200);
    if (Array.isArray(response.body)) {
        expect(response.body).not.toBeNull();
      } else {
          fail("Response body is not an array");
      }
    });

  it("Get post id", async () => {
    const response = await superagent.get(`${reqPostsLink}`).query({ id: 50 });
    expect(response.status).toBe(200);
    if (Array.isArray(response.body)) {
      response.body.forEach((item) => {
        expect(item.id).toBe(50);
      });
    } else {
        fail("Response body is not an array");
    }
  });

  it("Get photo url", async () => {
    const response = await superagent.get(`${reqPhotosLink}`).query({ url: photoUrl });
    expect(response.status).toBe(200);
    if (Array.isArray(response.body)) {
      response.body.forEach((item) => {
        expect(item.url).toBe(photoUrl);
      });
    } else {
        fail("Response body is not an array");
    }
  });

  it("Get 1st comment in the list", async () => {
    const response = await superagent.get(`${commentLink}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(ResponseProperties.POSTID);
    expect(response.body).toHaveProperty(ResponseProperties.ID);
    expect(response.body).toHaveProperty(ResponseProperties.NAME);
    expect(response.body).toHaveProperty(ResponseProperties.EMAIL);
    expect(response.body).toHaveProperty(ResponseProperties.BODY);
    expect(response.body.postId).toBe(firstComment.postId);
    expect(response.body.id).toBe(firstComment.id);
    expect(response.body.name).toBe(firstComment.name);
    expect(response.body.email).toBe(firstComment.email);
    expect(response.body.body).toBe(firstComment.body);
  });
});