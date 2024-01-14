<script lang="ts">
    import {onMount} from 'svelte';
    import {techStacks} from "$lib/data"
    import {convertImageToWhite} from "$lib/utils"

    const IMAGE_SIZE = 48;

    let techStacksWithConvertedImage: typeof techStacks = [];

    onMount(async () => {
        techStacksWithConvertedImage = await Promise.all(techStacks.map(async (stack) => ({
            ...stack,
            image: await convertImageToWhite(stack.image, IMAGE_SIZE)
        })));
    })
</script>

<section class="flex flex-wrap items-center justify-center gap-4 p-8">
    {#each techStacksWithConvertedImage as techStack}
        <div class="flex items-center  p-4 rounded-md shadow-md">
            <img src={techStack.image} alt={techStack.name} class="rounded-full mr-4" />
            <div>
                <h3 class="text-lg font-semibold">{techStack.name}</h3>
            </div>
        </div>
    {/each}
</section>
