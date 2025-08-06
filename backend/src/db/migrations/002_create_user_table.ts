import { Kysely, sql } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
	await database.schema
		.createTable('users')
		.addColumn('id', 'serial', (column) => column.primaryKey())
		.addColumn('username', 'varchar(50)', (column) => column.notNull())
		.addColumn('password', 'text')
		.addColumn('city', 'varchar(50)')
		.addColumn('ip_addr', 'text')
		.addColumn("role", sql`user_role`, (col) => col.notNull().defaultTo("user"))
		.addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
		.execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
	await database.schema.dropTable('users').execute();
}
