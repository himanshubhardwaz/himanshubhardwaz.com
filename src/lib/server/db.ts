import Database from 'better-sqlite3';

export const db = new Database(process.env.VITE_DB_FILE_PATH as string);

db.pragma('journal_mode = WAL');
db.pragma('case_sensitive_like = false');

function shutDownSQLite() {
	console.log('SQLite doing graceful shutdown');
	db.close();
}
process.on('SIGINT', shutDownSQLite);
process.on('SIGTERM', shutDownSQLite);
