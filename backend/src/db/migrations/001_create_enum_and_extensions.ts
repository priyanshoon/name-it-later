import { Kysely, sql } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
	await sql`
    CREATE TYPE user_role AS ENUM ('user', 'admin', 'moderator');
  `.execute(db);
}

export async function down(db: Kysely<unknown>): Promise<void> {
	await sql`
    DROP TYPE IF EXISTS user_role;
  `.execute(db);
}
