import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	await sql`
    CREATE TYPE user_role AS ENUM ('user', 'admin', 'moderator');
  `.execute(db);

	await sql`
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
  `.execute(db);
}

export async function down(db: Kysely<any>): Promise<void> {
	await sql`
    DROP TYPE IF EXISTS user_role;
  `.execute(db);

	await sql`
    DROP EXTENSION IF EXISTS "pgcrypto";
  `.execute(db);
}
