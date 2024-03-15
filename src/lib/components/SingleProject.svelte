<script lang="ts">
    export let project: {
        techStack: Array < string > ;
        githubUrl: string;
        liveUrl: string;
        thumbnail: string;
        title: string;
        slug: string;
    };

    import { page } from '$app/stores';  

    $: isHomePage = $page.url.pathname.endsWith("/");
</script>

<article class="w-full max-h-[25rem] overflow-hidden relative group cursor-pointer">
    <a href={`/project/${project.slug}${isHomePage ? '?rel=homepage' : ''}`}>

    <img
        src={project.thumbnail}
        class="w-full h-a    scale-100 hover:scale-110 transition duration-[1.5s]"
        loading="lazy"
        width="100%"
        height="100%"
        alt="featureImage"
    />

    <div class="absolute w-full inset-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
        <p class="mr-2 text-xl mb-2">{project.title}</p>
        <p>Tech Stack: </p>
        <ul class="flex gap-1 flex-wrap">
            {#each project?.techStack as techstack, index}
            <li>{techstack}{index !== project.techStack.length - 1 ? ", " : ""}</li>
            {/each}
        </ul>
    </div>
    </a>
</article>
