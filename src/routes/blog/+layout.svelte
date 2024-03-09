<script lang="ts">
    import type {
        LayoutData
    } from "./$types";

    import BackIcon from "$lib/icons/back.svelte"

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
    <a class="flex gap-2" data-sveltekit-preload-data="hover" href="/blog">
        <span class="icon"><svelte:component this={BackIcon} /></span>
        <span>Go back to blogs</span>
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
