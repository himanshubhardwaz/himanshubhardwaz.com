<script>
import {
    goto
} from '$app/navigation';
import {
    onMount
} from "svelte"
import {
    RESUME_LINK
} from "$lib/constants"

onMount(() => {
    goto(RESUME_LINK);
});
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Himanshu Bhardwaz - Software Engineer | React.js, Node.js, TypeScript | SDE at SaaS Labs US Inc.">
    <meta name="keywords" content="Himanshu Bhardwaz, Software Engineer, React.js, Node.js, TypeScript, Full Stack Developer, Web Developer">
    <meta name="author" content="Himanshu Bhardwaz">
    <meta name="robots" content="index, follow">
    <meta name="og:title" content="Himanshu Bhardwaz - Software Engineer Resume">
    <meta name="og:description" content="Explore Himanshu Bhardwaz's skills, experience, and achievements in software development.">
    <meta name="og:image" content="/resume_preview.png">
    <meta name="og:url" content={RESUME_LINK}>
    <meta name="og:type" content="website">
    <title>Himanshu Bhardwaz - Software Engineer Resume</title>
</svelte:head>

<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    Redirecting...
</div>
