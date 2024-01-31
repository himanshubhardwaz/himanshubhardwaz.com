<script lang="ts">
import type {
    LayoutData
} from "./$types";

import {
    getBlogSlug,
    getTitleFromBlog
} from "$lib/utils";

export let data: LayoutData
</script>

<h1 class="main-heading text-7xl">Blogs </h1>
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
<slot />
