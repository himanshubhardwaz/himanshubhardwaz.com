import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/${slug}.md`;

	const headers = new Headers();

	headers.append('Authorization', `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`);

	const response = await fetch(url, { headers });

	if (response.ok) {
		const data: { content: string } = await response.json();
		const content = atob(data.content);
		return { content };
	}

	throw error(404, {
		message: 'Blog not found'
	});
};
