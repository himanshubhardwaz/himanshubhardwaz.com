export const getBlogSlug = (blogName: string) => {
	const splits = blogName.split('.');
	return splits[0];
};
