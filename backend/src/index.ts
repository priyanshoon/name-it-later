import { Hono } from 'hono'
import feed from './routes/feed.route'

const app = new Hono()

app.route('/feed', feed)

export default app
