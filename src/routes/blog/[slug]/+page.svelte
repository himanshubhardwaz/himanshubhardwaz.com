<script lang="ts">
import type {
    PageData
} from "./$types";
import {
    marked
} from "marked";
import {
    onMount
} from 'svelte';

export let data: PageData;

onMount(() => {
    const blogSection = document.getElementById("blog-section");

    let blogShadowRoot: ShadowRoot | null = null;

    if (blogSection) {
        blogShadowRoot = blogSection.attachShadow({
            mode: "open"
        });
    }

    if (blogShadowRoot) {
        const blog = document.createElement("div");
        blog.innerHTML = marked(data.content);
        blog.style.textAlign = "justify";
        blogShadowRoot.appendChild(blog);
    }
});
</script>

<svelte:head>
    <title>{data.title} by Himanshu</title>
    <meta name="description" content={`Blog: ${data.title} by Himanshu`}>
</svelte:head>

<section id="blog-section" />
