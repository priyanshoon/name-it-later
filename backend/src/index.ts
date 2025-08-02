import { Hono } from 'hono'
import { test_connection } from './db/connection'

test_connection();
const app = new Hono()

export default app;
