<script lang="ts">
    import type { PageData } from "./$types";

    import BackIcon from "$lib/icons/back.svelte";

	import { marked } from "marked";
	import { onMount } from "svelte";
    import { page } from '$app/stores'; 

    export let data: PageData;

    $: shouldBackToHome = false;

    onMount(() => {
        shouldBackToHome = $page.url.toString().endsWith("rel=homepage")

        const projectSection = document.getElementById("project-section");

        let projectShadowRoot: ShadowRoot | null = null;

        if (projectSection) {
            projectShadowRoot = projectSection.attachShadow({
                mode: "open"
            });
        }

        if (projectShadowRoot) {
            const project = document.createElement("div");
            project.innerHTML = marked(data.content);
            project.style.textAlign = "justify";
            projectShadowRoot.appendChild(project);
        }
    })


</script>

<a class="flex gap-2" data-sveltekit-preload-data="hover" href={shouldBackToHome ? "/" : "/project"}>
    <span class="icon"><svelte:component this={BackIcon} /></span>
    <span>Go back to {shouldBackToHome ? "home" : "projects"}</span>
</a>

<div class="flex gap-2 my-4">
    {#if data.project?.githubUrl}
        <a class="underline text-blue-500" rel="nofollow" target="_blank" data-sveltekit-preload-data="hover" href={data.project?.githubUrl}>
            Github
        </a>
    {/if}
    {#if data.project?.liveUrl}
        <a class="underline text-blue-500" rel="nofollow" target="_blank" data-sveltekit-preload-data="hover" href={data.project?.liveUrl}>
            Project Url
        </a>
    {/if}
</div>

<img class="w-full" src={data.project?.thumbnail} alt="Project thumbnail" />

<section id="project-section" />