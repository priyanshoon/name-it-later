import { Hono } from "hono";
import feed from "./routes/feed.route";
import { test_connection } from "./db/connection";

test_connection();

const app = new Hono();

app.route("/feed", feed);

export default app;
