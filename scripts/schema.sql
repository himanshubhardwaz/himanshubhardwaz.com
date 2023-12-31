pragma journal_mode = WAL;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY,
    route TEXT UNIQUE,
    count INTEGER DEFAULT 0
);

COMMIT;
