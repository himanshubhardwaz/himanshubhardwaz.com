import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const url = `https://api.github.com/repos/himanshubhardwaz/blogs/contents/`;

	const headers = new Headers();

	headers.append('Authorization', `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`);

	try {
		const response = await fetch(url, { headers });

		if (response.ok) {
			const data: Array<{ name: string }> = await response.json();
			const blogs = data.map((blog) => blog.name);
			return { blogs };
		} else {
			throw new Error(`Failed to fetch blogs: ${response.status}`);
		}
	} catch (error) {
		throw new Error('Could not fetch blogs!');
	}
};
