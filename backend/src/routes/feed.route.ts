import { Hono } from "hono";
import { getFeed } from "../controllers/feed.controller";

const feed = new Hono();

feed.get("/", getFeed)

export default feed;

