import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	await db.executeQuery(sql`
    CREATE TYPE user_role AS ENUM ('user', 'admin', 'moderator');
  `);

	await db.executeQuery(sql`
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
  `);
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.executeQuery(sql`
    DROP TYPE IF EXISTS user_role;
  `);

	await db.executeQuery(sql`
    DROP EXTENSION IF EXISTS "pgcrypto";
  `);
}
