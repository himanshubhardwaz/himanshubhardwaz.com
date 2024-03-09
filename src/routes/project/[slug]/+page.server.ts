import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { projects } from '$lib/data';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const url = `https://api.github.com/repos/himanshubhardwaz/projects/contents/${slug}.md`;

	const headers = new Headers();

	headers.append(
		'Authorization',
		`Bearer ${process.env.VITE_GITHUB_ACCESS_TOKEN ?? import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
	);

	try {
		const response = await fetch(url, { headers });

		if (response.ok) {
			const data: { content: string } = await response.json();
			const content = atob(data.content);
			const project = projects.find((proj) => proj.slug === slug);
			return { content, project };
		} else {
			throw error(response.status, {
				message: 'Failed to fetch project'
			});
		}
	} catch (err) {
		throw error(404, {
			message: 'Project not found'
		});
	}
};
