// TODO

import { db } from '$lib/server/db';

type PageView = Array<{
	id: number;
	route: string;
	count: string;
}>;

export const load = async ({ request }) => {
	let data = db.prepare('SELECT * FROM page_views').all() as unknown[] as PageView;

	data = data.filter(({ route }) => {
		return new URL(route).origin === new URL(request.url).origin;
	});

	return { data };
};
