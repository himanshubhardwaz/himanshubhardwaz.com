<script lang="ts">
	import type { LayoutData } from "./$types";

    const getTitleFromBlogName = (blogName: string) => {
        const splits = blogName.split(".");
        let title = splits[0].replace(/-/g, " ");
        title = title.replace(/\b\w/g, (l) => l.toUpperCase());
        return title;
    };

    const getBlogSlug = (blogName: string) => {
        const splits = blogName.split(".");
        return splits[0];
    };

    export let data: LayoutData
</script>


<section class="min-h-[calc(100vh-210px)] sm:min-h-[calc(100vh-270px)]">
            <h1 class="main-heading text-7xl">Blogs </h1>
            <ul class="my-6">
                {#each data.blogs as blog, index}
                    <li class="text-lg mt-4">
                        {index + 1}
                        {". "}
                        <a href={`/blog/${getBlogSlug(blog)}`}>
                            {getTitleFromBlogName(blog)}
                        </a>
                    </li>
                {/each}
            </ul>
            <slot />
</section>