import { getDB, closeDB } from '$lib/server/db';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const db = await getDB();

	const route = event.url.href;

	await db.run(
		`
		INSERT INTO page_views (route, count)
		VALUES (?, 1)
		ON CONFLICT(route)
		DO UPDATE SET count = COALESCE(count, 0) + 1;
		`,
		[route]
	);

	const response = await resolve(event);

	await closeDB();

	return response;
};
