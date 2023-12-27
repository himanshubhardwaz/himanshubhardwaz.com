import { getDB, closeDB } from '$lib/server/db';

type PageView = Array<{
	id: number;
	route: string;
	count: string;
}>;

export const load = async ({ request }) => {
	const db = await getDB();

	let data: PageView = await db.all(`SELECT * FROM page_views`);

	data = data.filter(({ route }) => {
		return new URL(route).origin === new URL(request.url).origin;
	});

	await closeDB();

	return { data };
};
