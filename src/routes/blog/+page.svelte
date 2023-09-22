<script lang="ts">
	import type { PageData } from "./$types";

    const getTitleFromBlogName = (blogName: string) => {
        const splits = blogName.split(".");
        return splits[0];
    };

    export let data: PageData
</script>


<section class="min-h-[calc(100vh-210px)] sm:min-h-[calc(100vh-270px)]">
            <h1 class="main-heading text-7xl">Blogs </h1>
            <ul class="my-6">
                {#each data.blogs as blog, index}
                    <li class="text-lg mt-4">
                        {index + 1}
                        {". "}
                        <a href={`/blog/${blog}`}>{getTitleFromBlogName(blog)}</a>
                    </li>
                {/each}
            </ul>
            <slot />
</section>