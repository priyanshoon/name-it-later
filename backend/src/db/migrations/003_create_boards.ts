import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable("boards")
		.addColumn("id", "serial", (col) => col.primaryKey())
		.addColumn("name", "text", (col) => col.notNull().unique())
		.addColumn("title", "text", (col) => col.notNull())
		.addColumn("description", "text")
		.addColumn("cover_img", "text")
		.addColumn("user_id", "integer", (col) =>
			col.references("users.id").onDelete("cascade"),
		)
		.addColumn("is_deleted", "boolean", (col) => col.defaultTo(false))
		.addColumn("created_at", "timestamptz", (col) =>
			col.defaultTo(sql`CURRENT_TIMESTAMP`),
		)
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable("boards").execute();
}
