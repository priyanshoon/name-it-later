import { Pool } from "pg";
import { db_config } from "../config/db.config";
import { Kysely, PostgresDialect } from "kysely";
import { Database } from './types';

const pool = new Pool(db_config);

export async function test_connection() {
	try {
		const client = await pool.connect();
		console.log('Connected to postgresql');
		client.release();
		return true;
	} catch (err) {
		console.log('Connection error: ' + err);
		return false;
	}
}


export const db = new Kysely<Database>({
	dialect: new PostgresDialect({ pool })
})

export default pool;

