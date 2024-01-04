import { experiences, projects, featuredProjects } from '$lib/data';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json({ experiences, projects, featuredProjects });
}
