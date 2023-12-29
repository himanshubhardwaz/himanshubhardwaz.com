import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import fs from 'fs-extra';

const DB_FILE_PATH = './data/sqlite.db';

let database: Database | null = null;

export const getDB = async () => {
	try {
		await fs.access(DB_FILE_PATH);

		if (!database) {
			database = await open({
				filename: DB_FILE_PATH,
				driver: sqlite3.Database
			});

			await database.run(
				`CREATE TABLE IF NOT EXISTS page_views (
				id INTEGER PRIMARY KEY,
				route TEXT UNIQUE,
				count INTEGER DEFAULT 0
				);`
			);
		}

		return database;
	} catch (error) {
		console.error('Error connecting to the database:', error);
		throw error;
	}
};

export const closeDB = async () => {
	if (database) {
		await database.close();
		database = null;
	}
};
