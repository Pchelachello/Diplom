export const BASE_API_URL = "https://jsonplaceholder.typicode.com";
export const reqCommentsLink = `${BASE_API_URL}/comments`;
export const reqPostsLink = `${BASE_API_URL}/posts`;
export const reqPhotosLink = `${BASE_API_URL}/photos`;
export const reqUsersLink = `${BASE_API_URL}/users`;
export const reqAlbumsLink = `${BASE_API_URL}/albums`;
export const commentLink = `${reqCommentsLink}/1`;
export const userLink = `${reqCommentsLink}/1`;
export const postLink = `${reqPostsLink}/50`;
export const photoLink = `${reqPhotosLink}/30`;

export const ResponseProperties = {
    ID: "id",
    POSTID: "postId",
    USERID: "userId",
    ALBUMID: "albumId",
    NAME: "name",
    USERNAME: "username",
    EMAIL: "email",
    BODY: "body",
    TITLE: "title",
    ADDRESS: "address",
    PHONE: "phone",
    WEBSITE: "website",
    COMPANY: "company",
    URL: "url",
    THUMBNAILURL: "thumbnailUrl"
};

export const firstComment = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

export const myComment = {
    postId: 101,
    id: 1,
    name: "Test",
    email: "test@test.com",
    body: "Test 123",
};

export const myUser = {
    id: 11,
    name: "Aliaksei Pchelnikau",
    username: "Pchelachello",
    email: "aliaksei.pchelnikau1@gmail.com",
    address: {
        street: "Lenina",
        suite: "217",
        city: "Minsk",
        zipcode: "223610",
        geo: {
            lat: "-1",
            lng: "1"
        }
    },
    phone: "+375441234567",
    website: "test.com",
    company: {
        name: "TestInc",
        catchPhrase: "TaaS",
        bs: "Innovative"
    }
};

export const photoUrl = "https://via.placeholder.com/600/372c93";
export const commentTitle = "For Testing Purposes";