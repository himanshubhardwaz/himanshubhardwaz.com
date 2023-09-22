import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/${params.slug}.md`;

	console.log({ url });

	const headers = new Headers();

	headers.append('Authorization', `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`);

	try {
		const response = await fetch(url, { headers });

		if (response.ok) {
			const data: { content: string } = await response.json();
			const content = atob(data.content);
			return { content };
		} else {
			throw new Error(`Failed to fetch blog: ${response.status}`);
		}
	} catch (error) {
		console.log({ errorMain: error });
		throw new Error('Could not fetch this blog!');
	}
};
