import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4bKRrKR8OrEuYwlJl2XGmTAuvNLqklXJEXJqgj5Cvp6Czhx8asfpYSXRMKMdqkatoIRmKYyE8eN6IMYKKUen0u1liMdwBntpQNtEhyu-H-2FXtB9Cn1KWswcQwnwYXYx",
  },
});
