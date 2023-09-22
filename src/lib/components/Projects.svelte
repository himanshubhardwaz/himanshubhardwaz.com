<script lang="ts">
    import SingleProject from './SingleProject.svelte';
    import {projects} from '$lib/data';

    export let title: string;
    export let onlyShowFeatured: boolean = false;
</script>

<section class="my-16">
            {#if title}
                <p class="w-[15rem] font-semibold text-lg">{title}</p>
            {/if}
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
            {#each projects as project}
                {#if onlyShowFeatured && project.isFeatured}
                    <SingleProject project={project} />
                {:else if !onlyShowFeatured}
                    <SingleProject project={project} />
                {/if}
            {/each}
            </div>
</section>