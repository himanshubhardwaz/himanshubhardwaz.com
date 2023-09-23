export const getTitleFromBlog = (blogName: string) => {
	const splits = blogName.split('.');
	let title = splits[0].replace(/-/g, ' ');
	title = title.replace(/\b\w/g, (l) => l.toUpperCase());
	return title;
};
