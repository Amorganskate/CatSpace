import GoTrue from "gotrue-js";

export default new GoTrue({
  APIUrl: "https://gentle-beignet-96c25c.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});
