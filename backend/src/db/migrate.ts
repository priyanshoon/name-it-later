import * as path from 'path';
import { db } from './connection';
import { FileMigrationProvider, Migrator } from 'kysely';
import { promises as fs } from 'fs';

async function migrateToLatest() {

	const migrationFolder = path.join(__dirname, 'migrations');
	console.log(migrationFolder);

	const files = await fs.readdir(migrationFolder);
	console.log("Migration files found:", files);

	const migrator = new Migrator({
		db,
		provider: new FileMigrationProvider({
			fs,
			path,
			migrationFolder
		})
	})

	console.log("running migrateToLatest")

	const { error, results } = await migrator.migrateToLatest();

	console.log(results);

	results?.forEach((it) => {
		if (it.status === 'Success') {
			console.log(`migration "${it.migrationName}" was executed successfully`);
		} else if (it.status === 'Error') {
			console.log(`failed to execute migration "${it.migrationName}"`);
		}
	})

	if (error) {
		console.log('failed to migrate');
		console.log(error);
		process.exit(1);
	}

	await db.destroy();
}

migrateToLatest();

