import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	throw error(404, {
		message: `${slug} Project not found`
	});
};
