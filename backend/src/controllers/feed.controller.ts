import { Context } from "hono";

export async function getFeed(c: Context) {
	return c.json({ "message": "This is the feed." })
}

