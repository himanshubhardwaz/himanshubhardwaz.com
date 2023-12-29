import { db } from '$lib/server/db';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	try {
		const route = event.url.href;

		const stmt = db.prepare(
			`
			INSERT INTO page_views (route, count)
			VALUES (?, 1)
			ON CONFLICT(route)
			DO UPDATE SET count = COALESCE(count, 0) + 1;
  			`
		);

		stmt.run(route);

		const response = await resolve(event);

		return response;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
		const response = await resolve(event);

		return response;
	}
};
