import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable("users")
		.addColumn("id", "uuid", (col) =>
			col.primaryKey().defaultTo(sql`gen_random_uuid()`),
		)
		.addColumn("username", "text", (col) => col.notNull().unique())
		.addColumn("password", "text", (col) => col.notNull())
		.addColumn("city", "text", (col) => col.notNull())
		.addColumn("ip_addr", "inet")
		.addColumn("role", sql`user_role`, (col) => col.notNull().defaultTo("user"))
		.addColumn("created_at", "timestamptz", (col) =>
			col.defaultTo(sql`CURRENT_TIMESTAMP`),
		)
		.addColumn("updated_at", "timestamptz", (col) =>
			col.defaultTo(sql`CURRENT_TIMESTAMP`),
		)
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable("users").execute();
}
