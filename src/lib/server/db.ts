import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let database: Database | null = null;

export const getDB = async () => {
	try {
		if (!database) {
			database = await open({
				filename: process.env.VITE_DB_FILE_PATH as string,
				driver: sqlite3.Database
			});
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
