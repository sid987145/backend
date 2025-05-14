const express = require("express");
const app = express();

const jsonData = {
  "login": "sid987145",
  "id": 10000001,
  "node_id": "MDQ6VXNlcjEwMDAwMDAx",
  "avatar_url": "https://avatars.githubusercontent.com/u/10000001?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sid987145",
  "html_url": "https://github.com/sid987145",
  "followers_url": "https://api.github.com/users/sid987145/followers",
  "following_url": "https://api.github.com/users/sid987145/following{/other_user}",
  "gists_url": "https://api.github.com/users/sid987145/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sid987145/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sid987145/subscriptions",
  "organizations_url": "https://api.github.com/users/sid987145/orgs",
  "repos_url": "https://api.github.com/users/sid987145/repos",
  "events_url": "https://api.github.com/users/sid987145/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sid987145/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Siddharth Chaudhary",
  "company": null,
  "blog": "https://sidportfoliomine.netlify.app/",
  "location": "Ghaziabad, India",
  "email": "sid987145@gmail.com",
  "hireable": true,
  "bio": "Aspiring Software Engineer with a strong grasp of programming fundamentals. Passionate about building efficient, user-friendly applications.",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-04-01T00:00:00Z",
  "updated_at": "2025-05-14T00:00:00Z"
};

app.get("/0riginal_Sid", (req, res) => {
  res.json(jsonData);  // Sends the JSON data
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is Running Successfully on Port ${process.env.PORT || 3000}`);
});
