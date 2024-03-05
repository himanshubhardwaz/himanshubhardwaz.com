<script lang="ts">
    import type {
        LayoutData
    } from "./$types";

    import backIcon from "$lib/icons/back.svg?raw"

    import {
        getBlogSlug,
        getTitleFromBlog
    } from "$lib/utils";
	import { page } from "$app/stores";

    let isAllBlogsRoute: boolean;

    $: isAllBlogsRoute = $page.url.pathname.endsWith("/blog")

    let blogName: string | undefined;

    $: {
        let parts = $page.url.pathname.split("/");
        blogName = parts[parts.length - 1] || parts[parts.length - 2];
        if(blogName === "blog") blogName = undefined;
    }

    export let data: LayoutData
</script>

{#if !isAllBlogsRoute}
    <a data-sveltekit-preload-data="hover" href="/blog">
	   {`<--`} Go back to blogs
    </a>
    <br />
{/if}

<h1 class="main-heading text-7xl" id="blog-title">{getTitleFromBlog(blogName ?? "Blogs")}</h1>

{#if isAllBlogsRoute}
    <ul class="my-6">
        {#each data.blogs as blog, index}
        <li class="text-lg mt-4">
            {index + 1}
            {". "}
            <a href={`/blog/${getBlogSlug(blog)}`}>
                {getTitleFromBlog(blog)}
            </a>
        </li>
        {/each}
    </ul>
{/if}

<slot />
